/**
 * SHUV - Punto de Entrada Principal para Telegram Mini App
 * Exporta todas las funcionalidades necesarias para la UI
 */
// Core
export { ARCHETYPE_CONFIGS, getArchetypeConfig, getArchetypesByGender, getArchetypesByDecisionType, ALL_ARCHETYPE_NAMES } from './core/archetype-configs.js';
export { initializeArchetypeState, calculateDecisionImpact, updateArchetypeState, calculateDominantArchetype, createDecisionRecord, revealTrueName, getArchetypeStatistics, isCloseToArchetype, getMostFrequentDecisionTypes } from './core/archetype-engine.js';
export { KINGDOMS_CONFIG, getAllStages, getStageById, getKingdomForStage, calculateStageStatus, isKingdomLiberated, getNextAvailableKingdom } from './core/kingdoms-config.js';
// Sistema de Combate
export { CombatService, createCombatService, getCombatService } from './services/combat-service.js';
export { VERSES_CONFIG, ENEMY_BESTIARY, getAllVerses, getVerseById, getUnlockedVerses, calculateVerseDamage, getVerseEffectiveness } from './core/verses-config.js';
// Servicios
export { PlayerService, getPlayerService, initializePlayerService } from './services/player-service.js';
export { NPC_HINTS_DATABASE, checkNPCHints, markHintAsPlayed, getAllAvailableHints, getHintsByCategory, resetAllHints } from './services/npc-hint-system.js';
export { PersistenceService, getPersistenceService, createInitialExtendedState, savePlayerProgress, loadPlayerProgress } from './persistence/telegram-storage.js';
export { GameService, getGameService, initializeGame } from './services/game-service.js';
// UI Helpers
export { SPIRITUAL_THEMES, getThemeForPlayer } from './types/ui-types.js';
//# sourceMappingURL=app.js.map
