/**
 * SHUV - Sistema de Arquetipos Bíblicos
 * Módulo principal que exporta toda la funcionalidad del sistema de arquetipos
 */

// === TIPOS ===
export type {
  ArchetypeName,
  DecisionType,
  DecisionRecord,
  ArchetypeScore,
  ArchetypeState,
  PlayerState,
  ArchetypeConfig,
  NPCHint,
  ArchetypeCalculationResult
} from './types/archetypes';

// === CONFIGURACIÓN ===
export {
  ARCHETYPE_CONFIGS,
  getArchetypeConfig,
  getArchetypesByGender,
  getArchetypesByDecisionType,
  ALL_ARCHETYPE_NAMES
} from './core/archetype-configs';

// === MOTOR DE ARQUETIPOS ===
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

// === SISTEMA DE PISTAS NPC ===
export {
  NPC_HINTS_DATABASE,
  checkNPCHints,
  markHintAsPlayed,
  getAllAvailableHints,
  getHintsByCategory,
  resetAllHints
} from './services/npc-hint-system';

// === SERVICIO DE JUGADOR ===
export {
  PlayerService,
  getPlayerService,
  initializePlayerService
} from './services/player-service';
