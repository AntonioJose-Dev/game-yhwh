/**
 * SHUV - Servicio de Combate Espiritual
 * Sistema de turnos con versículos bíblicos como ataques
 */

import { DecisionType, ArchetypeName } from '../types/archetypes';
import { PlayerService } from '../services/player-service';
import { loadPlayerProgress, savePlayerProgress } from '../persistence/telegram-storage';
import {
  VerseConfig,
  EnemyType,
  VerseCategory,
  VERSES_CONFIG,
  ENEMY_BESTIARY,
  getUnlockedVerses,
  calculateVerseDamage,
  getVerseEffectiveness,
  getVerseById
} from '../core/verses-config';
import { getStageById } from '../core/kingdoms-config';

/**
 * Tipos de acciones en combate
 */
export type CombatActionType = 
  | 'ATTACK'      // Usar un versículo como ataque
  | 'PRAY'        // Orar (efecto según nivel de FE)
  | 'DEFEND'      // Usar Armadura de Efesios
  | 'FLEE';       // Intentar huir

/**
 * Resultado de una acción de oración según nivel de FE
 */
export interface PrayerResult {
  type: 'HEAL_MINOR' | 'REVEAL_WEAKNESS' | 'DIVINE_INTERVENTION';
  description: string;
  effect: {
    healAmount?: number;
    damage?: number;
    weaknessRevealed?: boolean;
    divineStrike?: boolean;
  };
  feThreshold: 'LOW' | 'MEDIUM' | 'HIGH';
}

/**
 * Estado de una batalla en curso
 */
export interface BattleState {
  isActive: boolean;
  stageId: number;
  enemy: {
    type: EnemyType;
    name: string;
    currentHp: number;
    maxHp: number;
    weaknessRevealed: boolean;
  };
  player: {
    currentHp: number;
    maxHp: number;
    feLevel: number;
    isDefending: boolean;
    defenseTurnsRemaining: number;
  };
  turn: number;
  combatLog: CombatLogEntry[];
  unlockedVerses: VerseConfig[];
  verseCooldowns: Record<string, number>; // verseId -> turns remaining
}

/**
 * Entrada en el log de combate
 */
export interface CombatLogEntry {
  turn: number;
  actor: 'PLAYER' | 'ENEMY';
  action: string;
  description: string;
  verseUsed?: string;
  damageDealt?: number;
  healingDone?: number;
  timestamp: number;
}

/**
 * Resultado final del combate
 */
export interface CombatResult {
  victory: boolean;
  rewards: {
    feGained: number;
    itemsUnlocked: string[];
    decisionsRecorded: Array<{
      type: DecisionType;
      description: string;
    }>;
  };
  battleStats: {
    totalTurns: number;
    versesUsed: number;
    damageTaken: number;
    healingDone: number;
  };
}

/**
 * Configuración de enemigo por etapa
 */
export function getEnemyForStage(stageId: number): {
  type: EnemyType;
  hpMultiplier: number;
} {
  const stage = getStageById(stageId);
  if (!stage) {
    // Default enemy para etapas sin configuración específica
    return { type: 'ORGULLO_SOBERBIO', hpMultiplier: 1.0 };
  }

  // Mapeo de reinos a tipos de enemigos
  const kingdomEnemyMap: Record<string, EnemyType> = {
    'ORGULLO': 'ORGULLO_SOBERBIO',
    'AVARICIA': 'AVARICIA_CODICIOSA',
    'LUJURIA': 'LUJURIA_IMPURA',
    'IRA': 'IRA_FURIOSA',
    'GULA': 'GULA_DESVORADA',
    'ENVIDIA': 'ENVIDIA_MALIGNA',
    'PEREZA': 'PEREZA_NEGLIGENTE'
  };

  const kingdom = stage.kingdom;
  const enemyType = kingdomEnemyMap[kingdom] || 'ORGULLO_SOBERBIO';
  
  // Multiplicador de HP según dificultad
  let hpMultiplier = 1.0;
  if (stage.difficulty === 'MEDIUM') hpMultiplier = 1.3;
  if (stage.difficulty === 'BOSS') hpMultiplier = 1.8;

  return { type: enemyType, hpMultiplier };
}

/**
 * Servicio de Combate Espiritual
 */
export class CombatService {
  private playerService: PlayerService;
  private currentBattle: BattleState | null = null;

  constructor(playerService: PlayerService) {
    this.playerService = playerService;
  }

  /**
   * Inicia una nueva batalla para una etapa específica
   */
  async startBattle(stageId: number): Promise<BattleState> {
    const playerState = await loadPlayerProgress();
    if (!playerState) {
      throw new Error('No hay estado del jugador cargado');
    }

    const enemyConfig = getEnemyForStage(stageId);
    const enemyBestiary = ENEMY_BESTIARY[enemyConfig.type];
    const maxEnemyHp = Math.floor(enemyBestiary.baseHp * enemyConfig.hpMultiplier);

    // Obtener versículos desbloqueados
    const unlockedVerses = getUnlockedVerses(
      playerState.currentStage,
      playerState.feLevel,
      undefined // kingdom se puede pasar si se quiere filtrar
    );

    // Calcular HP del jugador basado en FE y armadura
    const basePlayerHp = 100;
    const feBonus = Math.floor(playerState.feLevel * 0.5);
    const armorBonus = playerState.inventory.armorPieces.length * 20;
    const maxPlayerHp = basePlayerHp + feBonus + armorBonus;

    this.currentBattle = {
      isActive: true,
      stageId,
      enemy: {
        type: enemyConfig.type,
        name: enemyBestiary.name,
        currentHp: maxEnemyHp,
        maxHp: maxEnemyHp,
        weaknessRevealed: false
      },
      player: {
        currentHp: maxPlayerHp,
        maxHp: maxPlayerHp,
        feLevel: playerState.feLevel,
        isDefending: false,
        defenseTurnsRemaining: 0
      },
      turn: 1,
      combatLog: [],
      unlockedVerses,
      verseCooldowns: {}
    };

    this.addLogEntry('ENEMY', 'Encuentro', `¡Un ${enemyBestiary.name} salvaje aparece!`, enemyBestiary.description);

    return this.currentBattle;
  }

  /**
   * Ejecuta una acción del jugador
   */
  async executeAction(
    actionType: CombatActionType,
    verseId?: string
  ): Promise<{
    battleState: BattleState;
    prayerResult?: PrayerResult;
    enemyAttacks: boolean;
  }> {
    if (!this.currentBattle || !this.currentBattle.isActive) {
      throw new Error('No hay batalla activa');
    }

    const battle = this.currentBattle;
    let enemyAttacks = true;
    let prayerResult: PrayerResult | undefined;

    // Resetear defensa del jugador
    if (battle.player.isDefending && battle.player.defenseTurnsRemaining <= 0) {
      battle.player.isDefending = false;
    }

    switch (actionType) {
      case 'ATTACK':
        if (!verseId) {
          throw new Error('Se requiere verseId para atacar');
        }
        this.executeAttack(verseId);
        break;

      case 'PRAY':
        prayerResult = this.executePrayer();
        // Orar puede evitar que el enemigo ataque
        if (prayerResult.type === 'DIVINE_INTERVENTION') {
          enemyAttacks = false;
        }
        break;

      case 'DEFEND':
        this.executeDefend();
        // Defender reduce daño pero no evita ataque
        break;

      case 'FLEE':
        return await this.attemptToFlee();
    }

    // Turno del enemigo (si corresponde)
    if (enemyAttacks && battle.enemy.currentHp > 0) {
      this.executeEnemyTurn();
    }

    // Verificar condiciones de victoria/derrota
    if (battle.enemy.currentHp <= 0) {
      return await this.handleVictory();
    }

    if (battle.player.currentHp <= 0) {
      return await this.handleDefeat();
    }

    // Incrementar turno
    battle.turn++;
    
    // Reducir cooldowns de versículos
    for (const [verseId, cooldown] of Object.entries(battle.verseCooldowns)) {
      if (cooldown > 0) {
        battle.verseCooldowns[verseId] = cooldown - 1;
      }
    }

    return {
      battleState: battle,
      prayerResult,
      enemyAttacks
    };
  }

  /**
   * Ejecuta un ataque con versículo
   */
  private executeAttack(verseId: string): void {
    const battle = this.currentBattle!;
    const verse = getVerseById(verseId);
    
    if (!verse) {
      this.addLogEntry('PLAYER', 'Error', 'Versículo no encontrado');
      return;
    }

    // Verificar cooldown
    if (battle.verseCooldowns[verseId] && battle.verseCooldowns[verseId] > 0) {
      this.addLogEntry('PLAYER', 'Espera', `${verse.name} aún está en recarga (${battle.verseCooldowns[verseId]} turnos)`);
      return;
    }

    // Calcular daño
    const damage = calculateVerseDamage(verse, battle.enemy.type, battle.player.feLevel);
    const effectiveness = getVerseEffectiveness(verse, battle.enemy.type);

    // Aplicar daño al enemigo
    battle.enemy.currentHp = Math.max(0, battle.enemy.currentHp - damage);

    // Registrar en log
    let effectivenessText = '';
    if (effectiveness === 'SUPER_EFFECTIVE') {
      effectivenessText = ' ¡Súper efectivo!';
    } else if (effectiveness === 'RESISTED') {
      effectivenessText = ' (Resistido)';
    }

    this.addLogEntry(
      'PLAYER',
      'Ataque',
      `Usas "${verse.name}"${effectivenessText}`,
      verse.reference.text,
      verseId,
      damage
    );

    // Efectos adicionales
    if (verse.effect.revealWeakness && !battle.enemy.weaknessRevealed) {
      battle.enemy.weaknessRevealed = true;
      this.addLogEntry('PLAYER', 'Sabiduría', '¡Has revelado la debilidad del enemigo!', '', verseId);
    }

    // Aplicar cooldown
    if (verse.cooldownTurns && verse.cooldownTurns > 0) {
      battle.verseCooldowns[verseId] = verse.cooldownTurns;
    }

    // Registrar decisión de combate
    if (verse.decisionTypeReward) {
      this.recordCombatDecision(verse.decisionTypeReward, `Usó ${verse.name} en combate`);
    }
  }

  /**
   * Ejecuta acción de orar con 3 resultados según FE
   */
  private executePrayer(): PrayerResult {
    const battle = this.currentBattle!;
    const feLevel = battle.player.feLevel;
    
    let result: PrayerResult;

    // Determinar resultado según nivel de FE
    if (feLevel < 40) {
      // FE baja → cura menor
      const healAmount = 15 + Math.floor(feLevel * 0.3);
      battle.player.currentHp = Math.min(battle.player.maxHp, battle.player.currentHp + healAmount);
      
      result = {
        type: 'HEAL_MINOR',
        description: 'Oras en silencio... sientes una pequeña sanidad.',
        effect: { healAmount },
        feThreshold: 'LOW'
      };
      
      this.addLogEntry('PLAYER', 'Oración', `Oras y recuperas ${healAmount} HP`, '', undefined, undefined, healAmount);
      
    } else if (feLevel < 75) {
      // FE media → revela debilidad
      const alreadyRevealed = battle.enemy.weaknessRevealed;
      battle.enemy.weaknessRevealed = true;
      
      result = {
        type: 'REVEAL_WEAKNESS',
        description: alreadyRevealed 
          ? 'Oras buscando entendimiento... ya conocías la debilidad del enemigo.'
          : 'Oras y YHWH revela la debilidad de tu enemigo!',
        effect: { weaknessRevealed: true },
        feThreshold: 'MEDIUM'
      };
      
      this.addLogEntry(
        'PLAYER',
        'Oración',
        alreadyRevealed ? 'Oras buscando entendimiento...' : '¡YHWH revela la debilidad del enemigo!',
        ''
      );
      
    } else {
      // FE alta → intervención divina directa
      const divineDamage = 50 + Math.floor(feLevel * 1.5);
      battle.enemy.currentHp = Math.max(0, battle.enemy.currentHp - divineDamage);
      
      result = {
        type: 'DIVINE_INTERVENTION',
        description: '¡YHWH interviene directamente con poder divino!',
        effect: { damage: divineDamage, divineStrike: true },
        feThreshold: 'HIGH'
      };
      
      this.addLogEntry(
        'PLAYER',
        'Intervención Divina',
        `¡El poder de YHWH golpea al enemigo con ${divineDamage} de daño!`,
        'Porque tú eres mi lámpara, oh Jehová; Jehová alumbrará mis tinieblas. (2 Samuel 22:29)',
        undefined,
        divineDamage
      );
    }

    // Registrar decisión de fe
    this.recordCombatDecision('FAITH', 'Oró durante el combate');

    return result;
  }

  /**
   * Ejecuta acción de defender (Armadura de Efesios)
   */
  private executeDefend(): void {
    const battle = this.currentBattle!;
    
    battle.player.isDefending = true;
    battle.player.defenseTurnsRemaining = 2; // Dura 2 turnos

    this.addLogEntry(
      'PLAYER',
      'Defensa',
      'Te vistes con toda la Armadura de Efesios',
      'Vestíos toda la armadura de Dios, para que podáis estar firmes contra las asechanzas del diablo. (Efesios 6:11)'
    );

    // Registrar decisión
    this.recordCombatDecision('FAITH', 'Se defendió con la Armadura de Efesios');
  }

  /**
   * Intenta huir del combate
   */
  private async attemptToFlee(): Promise<{
    battleState: BattleState;
    enemyAttacks: boolean;
  }> {
    const battle = this.currentBattle!;
    
    // Probabilidad de huir basada en FE
    const fleeChance = 0.3 + (battle.player.feLevel / 200); // 30% + hasta 50% extra
    const success = Math.random() < fleeChance;

    if (success) {
      this.addLogEntry('PLAYER', 'Huida', 'Logras escapar del enemigo...', '');
      battle.isActive = false;
      
      // Registrar derrota sin penalización completa
      await this.handleDefeat(true);
      
      return {
        battleState: battle,
        enemyAttacks: false
      };
    } else {
      this.addLogEntry('PLAYER', 'Huida Fallida', 'No puedes escapar! El enemigo te bloquea el paso.', '');
      
      // El enemigo ataca con bonus por intento de huida
      this.executeEnemyTurn(true);
      
      return {
        battleState: battle,
        enemyAttacks: false // Ya atacó en executeEnemyTurn
      };
    }
  }

  /**
   * Ejecuta el turno del enemigo
   */
  private executeEnemyTurn(fleeAttemptBonus: boolean = false): void {
    const battle = this.currentBattle!;
    const enemy = ENEMY_BESTIARY[battle.enemy.type];
    
    // Daño base del enemigo
    let damage = Math.floor(enemy.baseHp * 0.15); // 15% de su HP base
    
    // Modificadores
    if (battle.player.isDefending) {
      damage = Math.floor(damage * 0.4); // 60% menos daño si defiende
    }
    
    if (fleeAttemptBonus) {
      damage = Math.floor(damage * 1.5); // 50% más si intentó huir
    }
    
    // Variación aleatoria (±20%)
    const variance = 0.8 + (Math.random() * 0.4);
    damage = Math.floor(damage * variance);
    
    // Aplicar daño al jugador
    battle.player.currentHp = Math.max(0, battle.player.currentHp - damage);
    
    // Reducir duración de defensa
    if (battle.player.isDefending) {
      battle.player.defenseTurnsRemaining--;
    }

    this.addLogEntry(
      'ENEMY',
      'Ataque',
      `${battle.enemy.name} te ataca`,
      enemy.specialAbility || '',
      undefined,
      damage
    );
  }

  /**
   * Maneja la victoria del jugador
   */
  private async handleVictory(): Promise<{
    battleState: BattleState;
    prayerResult?: PrayerResult;
    enemyAttacks: boolean;
  }> {
    const battle = this.currentBattle!;
    battle.isActive = false;

    this.addLogEntry('PLAYER', 'Victoria', '¡Has vencido al enemigo!', 'El justo será como árbol plantado junto a corrientes de aguas. (Salmos 1:3)');

    // Obtener recompensas
    const stage = getStageById(battle.stageId);
    const feGained = stage?.rewards?.feBonus || 5;
    const itemsUnlocked: string[] = [];

    if (stage?.rewards?.scroll) {
      itemsUnlocked.push(`Pergamino: ${stage.rewards.scroll}`);
    }
    if (stage?.rewards?.armorPiece) {
      itemsUnlocked.push(`Armadura: ${stage.rewards.armorPiece}`);
    }

    // Actualizar estado del jugador
    const playerState = await loadPlayerProgress();
    if (playerState) {
      // Añadir FE
      playerState.feLevel = Math.min(100, playerState.feLevel + feGained);
      
      // Añadir items
      if (stage?.rewards?.scroll && !playerState.inventory.scrolls.includes(stage.rewards.scroll)) {
        playerState.inventory.scrolls.push(stage.rewards.scroll);
      }
      if (stage?.rewards?.armorPiece && !playerState.inventory.armorPieces.includes(stage.rewards.armorPiece)) {
        playerState.inventory.armorPieces.push(stage.rewards.armorPiece);
      }
      
      // Actualizar estadísticas
      playerState.stats.battlesWon += 1;
      
      await savePlayerProgress(playerState, {});
    }

    return {
      battleState: battle,
      enemyAttacks: false
    };
  }

  /**
   * Maneja la derrota del jugador
   */
  private async handleDefeat(fled: boolean = false): Promise<{
    battleState: BattleState;
    prayerResult?: PrayerResult;
    enemyAttacks: boolean;
  }> {
    const battle = this.currentBattle!;
    battle.isActive = false;

    const message = fled 
      ? 'Has escapado... pero la batalla queda pendiente.'
      : 'Has sido derrotado... pero YHWH te da otra oportunidad.';

    this.addLogEntry('PLAYER', 'Derrota', message, 'Caerás siete veces, pero te levantarás. (Proverbios 24:16)');

    // Actualizar estadísticas sin penalización severa
    const playerState = await loadPlayerProgress();
    if (playerState) {
      playerState.stats.battlesLost += 1;
      await savePlayerProgress(playerState, {});
    }

    return {
      battleState: battle,
      enemyAttacks: false
    };
  }

  /**
   * Añade entrada al log de combate
   */
  private addLogEntry(
    actor: 'PLAYER' | 'ENEMY',
    action: string,
    description: string,
    verseText: string = '',
    verseId?: string,
    damageDealt?: number,
    healingDone?: number
  ): void {
    if (!this.currentBattle) return;

    const entry: CombatLogEntry = {
      turn: this.currentBattle.turn,
      actor,
      action,
      description: verseText ? `${description} "${verseText}"` : description,
      verseUsed: verseId,
      damageDealt,
      healingDone,
      timestamp: Date.now()
    };

    this.currentBattle.combatLog.push(entry);
  }

  /**
   * Registra decisión de arquetipo desde combate
   */
  private recordCombatDecision(type: DecisionType, description: string): void {
    try {
      this.playerService.recordDecision(type, description, 'COMBATE', 'Decisión tomada durante batalla espiritual');
    } catch (error) {
      console.error('[CombatService] Error registrando decisión:', error);
    }
  }

  /**
   * Obtiene el estado actual de la batalla
   */
  getBattleState(): BattleState | null {
    return this.currentBattle;
  }

  /**
   * Verifica si hay una batalla activa
   */
  isBattleActive(): boolean {
    return this.currentBattle?.isActive ?? false;
  }

  /**
   * Reinicia la batalla actual (para reintentar)
   */
  async retryBattle(): Promise<BattleState> {
    if (!this.currentBattle) {
      throw new Error('No hay batalla para reintentar');
    }
    return this.startBattle(this.currentBattle.stageId);
  }
}

// Instancia singleton del servicio de combate
let globalCombatService: CombatService | null = null;

/**
 * Crea una instancia del servicio de combate
 */
export function createCombatService(playerService: PlayerService): CombatService {
  globalCombatService = new CombatService(playerService);
  return globalCombatService;
}

/**
 * Obtiene la instancia global del servicio de combate
 * Nota: Para uso en entorno browser, inicializar manualmente con createCombatService
 */
export function getCombatService(): CombatService {
  if (!globalCombatService) {
    throw new Error('CombatService no inicializado. Usar createCombatService() primero.');
  }
  return globalCombatService;
}
