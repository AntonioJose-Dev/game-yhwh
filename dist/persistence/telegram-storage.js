/**
 * SHUV - Sistema de Persistencia con Telegram CloudStorage
 * Guarda y carga progreso del jugador usando Telegram WebApp CloudStorage
 * con fallback a localStorage si no está disponible
 */
/**
 * Crea un estado inicial extendido para nuevo jugador
 */
export function createInitialExtendedState(baseState, telegramId) {
    return {
        ...baseState,
        currentStage: 1,
        completedStages: [],
        feLevel: 50, // Nivel inicial de FE
        nameAccepted: null,
        inventory: {
            scrolls: [],
            armorPieces: [],
            oil: 3,
            mana: 100
        },
        stats: {
            battlesWon: 0,
            battlesLost: 0,
            decisionsMade: 0,
            playTimeSeconds: 0
        }
    };
}
/**
 * Servicio de persistencia para Telegram Mini App
 */
export class PersistenceService {
    constructor() {
        this.storageKey = 'shuv_player_v1';
        this.cloudStorage = null;
        this.isTelegramAvailable = false;
        this.checkTelegramAvailability();
    }
    /**
     * Verifica si Telegram WebApp está disponible
     */
    checkTelegramAvailability() {
        // @ts-ignore - Telegram.WebApp puede no estar definido en desarrollo web
        if (typeof window !== 'undefined' && window.Telegram?.WebApp?.CloudStorage) {
            // @ts-ignore
            this.cloudStorage = window.Telegram.WebApp.CloudStorage;
            this.isTelegramAvailable = true;
            console.log('[Persistence] Telegram CloudStorage disponible');
        }
        else {
            this.isTelegramAvailable = false;
            console.log('[Persistence] Usando localStorage (fallback)');
        }
    }
    /**
     * Guarda el estado del jugador
     */
    async saveState(state) {
        const serialized = JSON.stringify(state);
        return new Promise((resolve) => {
            if (this.isTelegramAvailable && this.cloudStorage) {
                this.cloudStorage.setItem(this.storageKey, serialized, (error) => {
                    if (error) {
                        console.error('[Persistence] Error guardando en CloudStorage:', error);
                        // Fallback a localStorage
                        this.saveToLocalStorage(serialized);
                        resolve(false);
                    }
                    else {
                        console.log('[Persistence] Estado guardado en CloudStorage');
                        resolve(true);
                    }
                });
            }
            else {
                this.saveToLocalStorage(serialized);
                resolve(false);
            }
        });
    }
    /**
     * Carga el estado del jugador
     */
    async loadState() {
        return new Promise((resolve) => {
            if (this.isTelegramAvailable && this.cloudStorage) {
                this.cloudStorage.getItem(this.storageKey, (error, value) => {
                    if (error || !value) {
                        console.warn('[Persistence] No se encontró estado en CloudStorage');
                        const localState = this.loadFromLocalStorage();
                        resolve(localState);
                    }
                    else {
                        try {
                            const state = JSON.parse(value);
                            console.log('[Persistence] Estado cargado desde CloudStorage');
                            resolve(state);
                        }
                        catch (e) {
                            console.error('[Persistence] Error parseando estado:', e);
                            resolve(this.loadFromLocalStorage());
                        }
                    }
                });
            }
            else {
                resolve(this.loadFromLocalStorage());
            }
        });
    }
    /**
     * Guarda en localStorage como fallback
     */
    saveToLocalStorage(serialized) {
        try {
            localStorage.setItem(this.storageKey, serialized);
            console.log('[Persistence] Estado guardado en localStorage');
        }
        catch (error) {
            console.error('[Persistence] Error guardando en localStorage:', error);
        }
    }
    /**
     * Carga desde localStorage como fallback
     */
    loadFromLocalStorage() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            if (stored) {
                const state = JSON.parse(stored);
                console.log('[Persistence] Estado cargado desde localStorage');
                return state;
            }
            return null;
        }
        catch (error) {
            console.error('[Persistence] Error cargando desde localStorage:', error);
            return null;
        }
    }
    /**
     * Elimina el estado guardado (reset de progreso)
     */
    async clearState() {
        return new Promise((resolve) => {
            if (this.isTelegramAvailable && this.cloudStorage) {
                this.cloudStorage.removeItem(this.storageKey, (error) => {
                    if (error) {
                        console.error('[Persistence] Error eliminando en CloudStorage:', error);
                    }
                    localStorage.removeItem(this.storageKey);
                    resolve();
                });
            }
            else {
                localStorage.removeItem(this.storageKey);
                resolve();
            }
        });
    }
    /**
     * Verifica si existe un estado guardado
     */
    async hasSavedState() {
        return new Promise((resolve) => {
            if (this.isTelegramAvailable && this.cloudStorage) {
                this.cloudStorage.getItem(this.storageKey, (error, value) => {
                    if (value) {
                        resolve(true);
                    }
                    else {
                        // Verificar localStorage
                        const local = localStorage.getItem(this.storageKey);
                        resolve(!!local);
                    }
                });
            }
            else {
                const local = localStorage.getItem(this.storageKey);
                resolve(!!local);
            }
        });
    }
    /**
     * Obtiene información del almacenamiento
     */
    getStorageInfo() {
        return {
            isTelegram: this.isTelegramAvailable,
            available: this.isTelegramAvailable || typeof localStorage !== 'undefined'
        };
    }
}
/**
 * Instancia singleton del servicio de persistencia
 */
let globalPersistenceService = null;
export function getPersistenceService() {
    if (!globalPersistenceService) {
        globalPersistenceService = new PersistenceService();
    }
    return globalPersistenceService;
}
/**
 * Helper para guardar estado combinando PlayerService y datos extendidos
 */
export async function savePlayerProgress(playerState, additionalData) {
    const persistence = getPersistenceService();
    const existingState = await persistence.loadState();
    const mergedState = {
        ...(existingState || createInitialExtendedState(playerState)),
        ...playerState,
        ...additionalData
    };
    return persistence.saveState(mergedState);
}
/**
 * Helper para cargar progreso completo del jugador
 */
export async function loadPlayerProgress() {
    const persistence = getPersistenceService();
    return persistence.loadState();
}
//# sourceMappingURL=telegram-storage.js.map