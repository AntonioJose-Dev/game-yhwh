/**
 * SHUV - Servicio de Gestión del Estado del Jugador
 * Maneja el estado centralizado del jugador, decisiones y persistencia
 */

import {
  PlayerState,
  ArchetypeState,
  DecisionRecord,
  DecisionType,
  ArchetypeName
} from '../types/archetypes';
import {
  initializeArchetypeState,
  updateArchetypeState,
  createDecisionRecord,
  revealTrueName,
  getArchetypeStatistics
} from '../core/archetype-engine';
import { NPC_HINTS_DATABASE, checkNPCHints, markHintAsPlayed } from '../services/npc-hint-system';

/**
 * Clase principal para gestionar el estado del jugador
 */
export class PlayerService {
  private state: PlayerState | null = null;
  private storageKey: string = 'shuv_player_state';
  
  /**
   * Crea un nuevo jugador o carga uno existente
   */
  constructor(playerId?: string) {
    if (playerId) {
      this.loadPlayer(playerId);
    }
  }
  
  /**
   * Inicializa un nuevo jugador
   */
  createNewPlayer(
    humanName: string,
    telegramId?: string
  ): PlayerState {
    const now = Date.now();
    const playerId = telegramId || `player_${now}_${Math.random().toString(36).substr(2, 9)}`;
    
    this.state = {
      id: playerId,
      telegramId,
      humanName,
      trueName: null,
      acceptedName: null,
      archetypeState: initializeArchetypeState(),
      decisionLog: [],
      currentAct: 1,
      kingdomsLiberated: [],
      createdAt: now,
      updatedAt: now
    };
    
    this.persist();
    return this.state;
  }
  
  /**
   * Carga un jugador desde almacenamiento persistente
   */
  loadPlayer(playerId: string): PlayerState | null {
    try {
      // Intentar cargar desde localStorage (web)
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        const parsed: PlayerState = JSON.parse(stored);
        if (parsed.id === playerId) {
          this.state = parsed;
          return this.state;
        }
      }
      
      // Si no existe, crear uno nuevo
      return this.createNewPlayer('Jugador');
    } catch (error) {
      console.error('Error cargando jugador:', error);
      return this.createNewPlayer('Jugador');
    }
  }
  
  /**
   * Registra una nueva decisión del jugador
   */
  recordDecision(
    decisionType: DecisionType,
    description: string,
    kingdom?: string,
    context?: string
  ): { decision: DecisionRecord; updatedState: PlayerState } {
    if (!this.state) {
      throw new Error('No hay jugador activo');
    }
    
    // Crear la decisión con su impacto en arquetipos
    const { decision, archetypeScores } = createDecisionRecord(
      decisionType,
      description,
      kingdom,
      context
    );
    
    // Actualizar estado de arquetipos
    const newArchetypeState = updateArchetypeState(
      this.state.archetypeState,
      decision
    );
    
    // Actualizar estado completo
    this.state = {
      ...this.state,
      archetypeState: newArchetypeState,
      decisionLog: [...this.state.decisionLog, decision],
      updatedAt: Date.now()
    };
    
    this.persist();
    
    return {
      decision,
      updatedState: this.state
    };
  }
  
  /**
   * Obtiene pistas disponibles para un NPC específico
   */
  getAvailableHintsForNPC(npcId: string): Array<{
    hintId: string;
    dialogLine: string;
    category: string;
  }> {
    if (!this.state) return [];
    
    const availableHints = checkNPCHints(
      npcId,
      this.state.decisionLog,
      NPC_HINTS_DATABASE
    );
    
    return availableHints.map(h => ({
      hintId: h.id,
      dialogLine: h.dialogLine,
      category: h.hintCategory
    }));
  }
  
  /**
   * Marca una pista como vista
   */
  markHintViewed(hintId: string): void {
    // En una implementación completa, esto actualizaría el estado persistente
    // Por ahora es un placeholder para futura integración
    console.log(`Pista ${hintId} marcada como vista`);
  }
  
  /**
   * Revela el nombre verdadero del jugador (final del Acto II)
   */
  revealTrueName(): {
    trueName: ArchetypeName;
    title: string;
    description: string;
    biblicalReference: string;
  } {
    if (!this.state) {
      throw new Error('No hay jugador activo');
    }
    
    const result = revealTrueName(this.state.archetypeState);
    
    this.state = {
      ...this.state,
      archetypeState: result.state,
      trueName: result.trueName,
      updatedAt: Date.now()
    };
    
    this.persist();
    
    return {
      trueName: result.trueName,
      title: result.config.title,
      description: result.config.description,
      biblicalReference: result.config.biblicalReference
    };
  }
  
  /**
   * El jugador acepta o rechaza su nombre verdadero
   */
  acceptOrRejectName(accept: boolean): PlayerState {
    if (!this.state) {
      throw new Error('No hay jugador activo');
    }
    
    if (!this.state.archetypeState.isRevealed) {
      throw new Error('El nombre aún no ha sido revelado');
    }
    
    this.state = {
      ...this.state,
      acceptedName: accept,
      updatedAt: Date.now()
    };
    
    this.persist();
    return this.state;
  }
  
  /**
   * Obtiene estadísticas del progreso de arquetipos
   */
  getStatistics(): ReturnType<typeof getArchetypeStatistics> {
    if (!this.state) {
      throw new Error('No hay jugador activo');
    }
    
    return getArchetypeStatistics(this.state.archetypeState);
  }
  
  /**
   * Obtiene el estado actual del jugador
   */
  getState(): PlayerState | null {
    return this.state;
  }
  
  /**
   * Obtiene el arquetipo dominante actual
   */
  getDominantArchetype(): ArchetypeName | null {
    if (!this.state) return null;
    return this.state.archetypeState.dominantArchetype;
  }
  
  /**
   * Avanza al siguiente acto
   */
  advanceToAct(act: 1 | 2 | 3): PlayerState {
    if (!this.state) {
      throw new Error('No hay jugador activo');
    }
    
    this.state = {
      ...this.state,
      currentAct: act,
      updatedAt: Date.now()
    };
    
    this.persist();
    return this.state;
  }
  
  /**
   * Registra un reino liberado
   */
  liberateKingdom(kingdomId: string): PlayerState {
    if (!this.state) {
      throw new Error('No hay jugador activo');
    }
    
    if (!this.state.kingdomsLiberated.includes(kingdomId)) {
      this.state = {
        ...this.state,
        kingdomsLiberated: [...this.state.kingdomsLiberated, kingdomId],
        updatedAt: Date.now()
      };
      
      this.persist();
    }
    
    return this.state;
  }
  
  /**
   * Persiste el estado en localStorage
   */
  private persist(): void {
    if (!this.state) return;
    
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    } catch (error) {
      console.error('Error persistiendo estado:', error);
    }
  }
  
  /**
   * Exporta el estado completo para sincronización con backend
   */
  exportState(): string {
    if (!this.state) return '';
    return JSON.stringify(this.state);
  }
  
  /**
   * Importa estado desde backend (Supabase)
   */
  importState(jsonState: string): PlayerState | null {
    try {
      this.state = JSON.parse(jsonState);
      return this.state;
    } catch (error) {
      throw new Error('Estado inválido');
    }
  }
  
  /**
   * Resetea completamente el progreso del jugador
   */
  resetProgress(): PlayerState {
    if (!this.state) {
      throw new Error('No hay jugador activo');
    }
    
    const now = Date.now();
    this.state = {
      ...this.state,
      archetypeState: initializeArchetypeState(),
      decisionLog: [],
      currentAct: 1,
      kingdomsLiberated: [],
      trueName: null,
      acceptedName: null,
      updatedAt: now
    };
    
    this.persist();
    return this.state;
  }
}

/**
 * Instancia singleton para uso global
 */
let globalPlayerService: PlayerService | null = null;

export function getPlayerService(): PlayerService {
  if (!globalPlayerService) {
    globalPlayerService = new PlayerService();
  }
  return globalPlayerService;
}

export function initializePlayerService(playerId?: string): PlayerService {
  globalPlayerService = new PlayerService(playerId);
  return globalPlayerService;
}
