/**
 * SHUV - Punto de Entrada Principal para Telegram Mini App
 * Exporta todas las funcionalidades necesarias para la UI
 */

// Tipos
export type { 
  PlayerState, 
  ArchetypeState, 
  DecisionRecord, 
  DecisionType, 
  ArchetypeName,
  ArchetypeConfig,
  NPCHint
} from './types/archetypes';

export type {
  Stage,
  KingdomConfig,
  AppScreen,
  PlayerProfileUI,
  MapNode,
  ThemeConfig
} from './types/ui-types';

export type {
  ExtendedPlayerState
} from './persistence/telegram-storage';

// Core
export { 
  ARCHETYPE_CONFIGS, 
  getArchetypeConfig, 
  getArchetypesByGender,
  getArchetypesByDecisionType,
  ALL_ARCHETYPE_NAMES
} from './core/archetype-configs';

export {
  initializeArchetypeState,
  calculateDecisionImpact,
  updateArchetypeState,
  calculateDominantArchetype,
  createDecisionRecord,
  revealTrueName,
  getArchetypeStatistics,
  isCloseToArchetype,
  getMostFrequentDecisionTypes
} from './core/archetype-engine';

export {
  KINGDOMS_CONFIG,
  getAllStages,
  getStageById,
  getKingdomForStage,
  calculateStageStatus,
  isKingdomLiberated,
  getNextAvailableKingdom
} from './core/kingdoms-config';

// Servicios
export { 
  PlayerService, 
  getPlayerService,
  initializePlayerService
} from './services/player-service';

export {
  NPC_HINTS_DATABASE,
  checkNPCHints,
  markHintAsPlayed,
  getAllAvailableHints,
  getHintsByCategory,
  resetAllHints
} from './services/npc-hint-system';

export {
  PersistenceService,
  getPersistenceService,
  createInitialExtendedState,
  savePlayerProgress,
  loadPlayerProgress
} from './persistence/telegram-storage';

export {
  GameService,
  getGameService,
  initializeGame,
  type AppState
} from './services/game-service';

// UI Helpers
export {
  SPIRITUAL_THEMES,
  getThemeForPlayer
} from './types/ui-types';
