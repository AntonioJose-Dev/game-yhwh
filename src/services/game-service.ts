/**
 * SHUV - Servicio Principal del Juego para Telegram Mini App
 */

import { PlayerService, getPlayerService } from '../services/player-service';
import {
  PersistenceService,
  getPersistenceService,
  ExtendedPlayerState,
  createInitialExtendedState,
  loadPlayerProgress,
  savePlayerProgress
} from '../persistence/telegram-storage';
import {
  PlayerProfileUI,
  AppScreen,
  getThemeForPlayer,
  ThemeConfig
} from '../types/ui-types';
import {
  calculateStageStatus,
  getAllStages,
  getStageById
} from '../core/kingdoms-config';
import type { Stage } from '../types/ui-types';
import { ArchetypeName, DecisionType } from '../types/archetypes';

export interface AppState {
  currentScreen: AppScreen;
  playerProfile: PlayerProfileUI | null;
  stages: Map<number, Stage>;
  theme: ThemeConfig;
  isLoading: boolean;
  error: string | null;
  telegramId?: string;
}

export class GameService {
  private playerService: PlayerService;
  private persistenceService: PersistenceService;
  private state: AppState;

  constructor() {
    this.playerService = getPlayerService();
    this.persistenceService = getPersistenceService();
    this.state = {
      currentScreen: 'MAP',
      playerProfile: null,
      stages: new Map(),
      theme: {
        primaryColor: '#6366f1',
        secondaryColor: '#8b5cf6',
        backgroundColor: '#0f172a',
        textColor: '#f8fafc',
        accentColor: '#fbbf24'
      },
      isLoading: true,
      error: null,
      telegramId: undefined
    };
  }

  async initialize(telegramId?: string): Promise<AppState> {
    this.state.isLoading = true;
    this.state.telegramId = telegramId;
    try {
      const savedProgress = await loadPlayerProgress();
      if (savedProgress) {
        this.playerService.importState(JSON.stringify(savedProgress));
        this.updateStateFromPlayer(savedProgress);
      } else {
        const playerName = telegramId ? `Jugador_${telegramId.slice(-4)}` : 'Jugador';
        const newState = this.playerService.createNewPlayer(playerName, telegramId);
        const extendedState = createInitialExtendedState(newState, telegramId);
        await this.persistenceService.saveState(extendedState);
        this.updateStateFromPlayer(extendedState);
      }
      this.state.isLoading = false;
      return this.state;
    } catch (error) {
      console.error('[GameService] Error inicializando:', error);
      this.state.error = 'Error cargando progreso. Inténtalo de nuevo.';
      this.state.isLoading = false;
      return this.state;
    }
  }

  private updateStateFromPlayer(playerState: ExtendedPlayerState): void {
    const profile: PlayerProfileUI = {
      humanName: playerState.humanName,
      trueName: playerState.trueName,
      archetypeTitle: playerState.trueName ? playerState.trueName : null,
      acceptedName: playerState.acceptedName,
      currentAct: playerState.currentAct,
      kingdomsLiberated: playerState.kingdomsLiberated,
      feLevel: playerState.feLevel,
      currentStage: playerState.currentStage,
      completedStages: playerState.completedStages,
      stats: playerState.stats
    };
    const stageMap = calculateStageStatus(playerState.currentStage, playerState.completedStages);
    const isRevealed = playerState.archetypeState.isRevealed;
    const theme = getThemeForPlayer(playerState.acceptedName, isRevealed);
    this.state = { ...this.state, playerProfile: profile, stages: stageMap, theme, error: null };
  }

  navigateTo(screen: AppScreen): AppState {
    this.state.currentScreen = screen;
    return this.state;
  }

  async recordDecision(decisionType: DecisionType, description: string, kingdom?: string, context?: string): Promise<AppState> {
    try {
      this.playerService.recordDecision(decisionType, description, kingdom, context);
      const currentState = await loadPlayerProgress();
      if (currentState) {
        currentState.stats.decisionsMade += 1;
        await this.persistenceService.saveState(currentState);
        this.updateStateFromPlayer(currentState);
      }
      return this.state;
    } catch (error) {
      console.error('[GameService] Error registrando decisión:', error);
      throw error;
    }
  }

  async completeStage(stageId: number, battleWon: boolean): Promise<AppState> {
    try {
      const currentState = await loadPlayerProgress();
      if (!currentState) throw new Error('No hay estado del jugador');
      if (battleWon) {
        if (!currentState.completedStages.includes(stageId)) currentState.completedStages.push(stageId);
        currentState.stats.battlesWon += 1;
        if (stageId === currentState.currentStage) currentState.currentStage = stageId + 1;
        const stage = getStageById(stageId);
        if (stage?.rewards?.feBonus) currentState.feLevel = Math.min(100, currentState.feLevel + stage.rewards.feBonus);
      } else {
        currentState.stats.battlesLost += 1;
      }
      await this.persistenceService.saveState(currentState);
      this.updateStateFromPlayer(currentState);
      return this.state;
    } catch (error) {
      console.error('[GameService] Error completando etapa:', error);
      throw error;
    }
  }

  async revealTrueName(): Promise<{ trueName: ArchetypeName; title: string; description: string; biblicalReference: string; }> {
    const result = this.playerService.revealTrueName();
    const currentState = await loadPlayerProgress();
    if (currentState) {
      currentState.nameAccepted = null;
      await this.persistenceService.saveState(currentState);
      this.updateStateFromPlayer(currentState);
    }
    return result;
  }

  async acceptOrRejectName(accept: boolean): Promise<AppState> {
    this.playerService.acceptOrRejectName(accept);
    const currentState = await loadPlayerProgress();
    if (currentState) {
      currentState.nameAccepted = accept;
      await this.persistenceService.saveState(currentState);
      this.updateStateFromPlayer(currentState);
    }
    return this.state;
  }

  getNPCHints(npcId: string) {
    return this.playerService.getAvailableHintsForNPC(npcId);
  }

  /** Expone el PlayerService para uso en CombatService */
  getPlayerService(): PlayerService {
    return this.playerService;
  }

  getState(): AppState {
    return { ...this.state };
  }

  async refreshState(): Promise<AppState> {
    const currentState = await loadPlayerProgress();
    if (currentState) {
      this.playerService.importState(JSON.stringify(currentState));
      this.updateStateFromPlayer(currentState);
    }
    return this.state;
  }

  async resetGame(): Promise<AppState> {
    await this.persistenceService.clearState();
    this.playerService.resetProgress();
    return this.initialize(this.state.telegramId);
  }

  exportState(): string {
    return this.playerService.exportState();
  }
}

let globalGameService: GameService | null = null;

export function getGameService(): GameService {
  if (!globalGameService) globalGameService = new GameService();
  return globalGameService;
}

/**
 * Devuelve { gameService, state } para que el UI pueda acceder
 * al servicio y al estado inicial en un solo await.
 */
export async function initializeGame(telegramId?: string): Promise<{ gameService: GameService; state: AppState }> {
  globalGameService = new GameService();
  const state = await globalGameService.initialize(telegramId);
  return { gameService: globalGameService, state };
}
