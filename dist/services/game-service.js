/**
 * SHUV - Servicio Principal del Juego para Telegram Mini App
 * Integra persistencia, arquetipos, y gestión de estado del jugador
 */
import { getPlayerService } from '../services/player-service';
import { getPersistenceService, createInitialExtendedState, loadPlayerProgress } from '../persistence/telegram-storage';
import { getThemeForPlayer } from '../types/ui-types';
import { calculateStageStatus, getStageById } from '../core/kingdoms-config';
/**
 * Servicio principal que coordina toda la lógica del juego
 */
export class GameService {
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
    /**
     * Inicializa el juego cargando o creando el estado del jugador
     */
    async initialize(telegramId) {
        this.state.isLoading = true;
        this.state.telegramId = telegramId;
        try {
            // Intentar cargar progreso guardado
            const savedProgress = await loadPlayerProgress();
            if (savedProgress) {
                // Cargar estado existente
                this.playerService.importState(JSON.stringify(savedProgress));
                this.updateStateFromPlayer(savedProgress);
            }
            else {
                // Crear nuevo jugador
                const playerName = telegramId ? `Jugador_${telegramId.slice(-4)}` : 'Jugador';
                const newState = this.playerService.createNewPlayer(playerName, telegramId);
                const extendedState = createInitialExtendedState(newState, telegramId);
                await this.persistenceService.saveState(extendedState);
                this.updateStateFromPlayer(extendedState);
            }
            this.state.isLoading = false;
            return this.state;
        }
        catch (error) {
            console.error('[GameService] Error inicializando:', error);
            this.state.error = 'Error cargando progreso. Inténtalo de nuevo.';
            this.state.isLoading = false;
            return this.state;
        }
    }
    /**
     * Actualiza el estado interno desde los datos del jugador
     */
    updateStateFromPlayer(playerState) {
        const playerService = this.playerService;
        const profile = {
            humanName: playerState.humanName,
            trueName: playerState.trueName,
            archetypeTitle: playerState.trueName
                ? playerService.getState()?.archetypeState.scores[playerState.trueName]?.score || 0 > 0
                    ? playerState.trueName
                    : null
                : null,
            acceptedName: playerState.acceptedName,
            currentAct: playerState.currentAct,
            kingdomsLiberated: playerState.kingdomsLiberated,
            feLevel: playerState.feLevel,
            currentStage: playerState.currentStage,
            completedStages: playerState.completedStages,
            stats: playerState.stats
        };
        // Calcular etapas disponibles
        const stageMap = calculateStageStatus(playerState.currentStage, playerState.completedStages);
        // Obtener tema visual
        const isRevealed = playerState.archetypeState.isRevealed;
        const theme = getThemeForPlayer(playerState.acceptedName, isRevealed);
        this.state = {
            ...this.state,
            playerProfile: profile,
            stages: stageMap,
            theme,
            error: null
        };
    }
    /**
     * Navega a una pantalla específica
     */
    navigateTo(screen) {
        this.state.currentScreen = screen;
        return this.state;
    }
    /**
     * Registra una decisión del jugador
     */
    async recordDecision(decisionType, description, kingdom, context) {
        try {
            const result = this.playerService.recordDecision(decisionType, description, kingdom, context);
            // Actualizar estadísticas
            const currentState = await loadPlayerProgress();
            if (currentState) {
                currentState.stats.decisionsMade += 1;
                await this.persistenceService.saveState(currentState);
                this.updateStateFromPlayer(currentState);
            }
            return this.state;
        }
        catch (error) {
            console.error('[GameService] Error registrando decisión:', error);
            throw error;
        }
    }
    /**
     * Completa una etapa
     */
    async completeStage(stageId, battleWon) {
        try {
            const currentState = await loadPlayerProgress();
            if (!currentState) {
                throw new Error('No hay estado del jugador');
            }
            if (battleWon) {
                // Añadir a completadas si no está ya
                if (!currentState.completedStages.includes(stageId)) {
                    currentState.completedStages.push(stageId);
                }
                // Actualizar estadísticas
                currentState.stats.battlesWon += 1;
                // Avanzar etapa actual si es la siguiente
                if (stageId === currentState.currentStage) {
                    currentState.currentStage = stageId + 1;
                }
                // Aplicar recompensas de FE
                const stage = getStageById(stageId);
                if (stage?.rewards?.feBonus) {
                    currentState.feLevel = Math.min(100, currentState.feLevel + stage.rewards.feBonus);
                }
            }
            else {
                currentState.stats.battlesLost += 1;
            }
            await this.persistenceService.saveState(currentState);
            this.updateStateFromPlayer(currentState);
            return this.state;
        }
        catch (error) {
            console.error('[GameService] Error completando etapa:', error);
            throw error;
        }
    }
    /**
     * Revela el nombre verdadero del jugador
     */
    async revealTrueName() {
        const result = this.playerService.revealTrueName();
        // Guardar cambio
        const currentState = await loadPlayerProgress();
        if (currentState) {
            currentState.nameAccepted = null; // Aún no acepta o rechaza
            await this.persistenceService.saveState(currentState);
            this.updateStateFromPlayer(currentState);
        }
        return result;
    }
    /**
     * El jugador acepta o rechaza su nombre
     */
    async acceptOrRejectName(accept) {
        this.playerService.acceptOrRejectName(accept);
        const currentState = await loadPlayerProgress();
        if (currentState) {
            currentState.nameAccepted = accept;
            await this.persistenceService.saveState(currentState);
            this.updateStateFromPlayer(currentState);
        }
        return this.state;
    }
    /**
     * Obtiene pistas disponibles para un NPC
     */
    getNPCHints(npcId) {
        return this.playerService.getAvailableHintsForNPC(npcId);
    }
    /**
     * Obtiene el estado actual de la app
     */
    getState() {
        return { ...this.state };
    }
    /**
     * Fuerza una recarga del estado desde persistencia
     */
    async refreshState() {
        const currentState = await loadPlayerProgress();
        if (currentState) {
            this.playerService.importState(JSON.stringify(currentState));
            this.updateStateFromPlayer(currentState);
        }
        return this.state;
    }
    /**
     * Resetea todo el progreso (nuevo juego)
     */
    async resetGame() {
        await this.persistenceService.clearState();
        this.playerService.resetProgress();
        return this.initialize(this.state.telegramId);
    }
    /**
     * Exporta el estado completo para debugging
     */
    exportState() {
        return this.playerService.exportState();
    }
}
/**
 * Instancia singleton del servicio de juego
 */
let globalGameService = null;
export function getGameService() {
    if (!globalGameService) {
        globalGameService = new GameService();
    }
    return globalGameService;
}
/**
 * Inicializa el servicio de juego (llamar al iniciar la app)
 */
export async function initializeGame(telegramId) {
    globalGameService = new GameService();
    return globalGameService.initialize(telegramId);
}
//# sourceMappingURL=game-service.js.map
