/**
 * SHUV - Sistema de Persistencia con Telegram CloudStorage
 * Guarda y carga progreso del jugador usando Telegram WebApp CloudStorage
 * con fallback a localStorage si no está disponible
 */

import { PlayerState } from '../types/archetypes';

interface TelegramCloudStorage {
  getItem(key: string, callback: (error: Error | null, value?: string) => void): void;
  setItem(key: string, value: string, callback: (error: Error | null) => void): void;
  getItems(keys: string[], callback: (error: Error | null, values: Record<string, string>) => void): void;
  setItems(items: Record<string, string>, callback: (error: Error | null) => void): void;
  removeItem(key: string, callback: (error: Error | null) => void): void;
  getKeys(callback: (error: Error | null, keys: string[]) => void): void;
}

export interface ExtendedPlayerState extends PlayerState {
  currentStage: number;
  completedStages: number[];
  feLevel: number;
  nameAccepted: boolean | null;
  inventory: {
    scrolls: string[];
    armorPieces: string[];
    oil: number;
    mana: number;
  };
  stats: {
    battlesWon: number;
    battlesLost: number;
    decisionsMade: number;
    playTimeSeconds: number;
  };
}

export function createInitialExtendedState(
  baseState: PlayerState,
  telegramId?: string
): ExtendedPlayerState {
  return {
    ...baseState,
    currentStage: 1,
    completedStages: [],
    feLevel: 50,
    nameAccepted: null,
    inventory: { scrolls: [], armorPieces: [], oil: 3, mana: 100 },
    stats: { battlesWon: 0, battlesLost: 0, decisionsMade: 0, playTimeSeconds: 0 }
  };
}

/**
 * Comprueba si la versión de Telegram WebApp es >= la requerida (ej: "6.9")
 */
function isTelegramVersionAtLeast(required: string): boolean {
  try {
    // @ts-ignore
    const version: string = window.Telegram?.WebApp?.version ?? '0.0';
    const [rMajor, rMinor = 0] = required.split('.').map(Number);
    const [vMajor, vMinor = 0] = version.split('.').map(Number);
    if (vMajor !== rMajor) return vMajor > rMajor;
    return vMinor >= rMinor;
  } catch {
    return false;
  }
}

export class PersistenceService {
  private storageKey: string = 'shuv_player_v1';
  private cloudStorage: TelegramCloudStorage | null = null;
  private isTelegramAvailable: boolean = false;

  constructor() {
    this.checkTelegramAvailability();
  }

  private checkTelegramAvailability(): void {
    // @ts-ignore
    const tg = typeof window !== 'undefined' ? window.Telegram?.WebApp : null;
    // CloudStorage requiere Telegram >= 6.9
    if (tg?.CloudStorage && isTelegramVersionAtLeast('6.9')) {
      this.cloudStorage = tg.CloudStorage;
      this.isTelegramAvailable = true;
      console.log('[Persistence] Telegram CloudStorage disponible (v' + tg.version + ')');
    } else {
      this.isTelegramAvailable = false;
      const ver = tg?.version ?? 'desconocida';
      console.log('[Persistence] Usando localStorage (versión Telegram: ' + ver + ')');
    }
  }

  async saveState(state: ExtendedPlayerState): Promise<boolean> {
    const serialized = JSON.stringify(state);
    return new Promise((resolve) => {
      if (this.isTelegramAvailable && this.cloudStorage) {
        this.cloudStorage.setItem(this.storageKey, serialized, (error) => {
          if (error) {
            console.error('[Persistence] Error guardando en CloudStorage:', error);
            this.saveToLocalStorage(serialized);
            resolve(false);
          } else {
            console.log('[Persistence] Estado guardado en CloudStorage');
            resolve(true);
          }
        });
      } else {
        this.saveToLocalStorage(serialized);
        resolve(false);
      }
    });
  }

  async loadState(): Promise<ExtendedPlayerState | null> {
    return new Promise((resolve) => {
      if (this.isTelegramAvailable && this.cloudStorage) {
        this.cloudStorage.getItem(this.storageKey, (error, value) => {
          if (error || !value) {
            console.warn('[Persistence] No se encontró estado en CloudStorage');
            resolve(this.loadFromLocalStorage());
          } else {
            try {
              resolve(JSON.parse(value) as ExtendedPlayerState);
            } catch (e) {
              resolve(this.loadFromLocalStorage());
            }
          }
        });
      } else {
        resolve(this.loadFromLocalStorage());
      }
    });
  }

  private saveToLocalStorage(serialized: string): void {
    try {
      localStorage.setItem(this.storageKey, serialized);
      console.log('[Persistence] Estado guardado en localStorage');
    } catch (error) {
      console.error('[Persistence] Error guardando en localStorage:', error);
    }
  }

  private loadFromLocalStorage(): ExtendedPlayerState | null {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        console.log('[Persistence] Estado cargado desde localStorage');
        return JSON.parse(stored) as ExtendedPlayerState;
      }
      return null;
    } catch (error) {
      console.error('[Persistence] Error cargando desde localStorage:', error);
      return null;
    }
  }

  async clearState(): Promise<void> {
    return new Promise((resolve) => {
      if (this.isTelegramAvailable && this.cloudStorage) {
        this.cloudStorage.removeItem(this.storageKey, () => {
          localStorage.removeItem(this.storageKey);
          resolve();
        });
      } else {
        localStorage.removeItem(this.storageKey);
        resolve();
      }
    });
  }

  async hasSavedState(): Promise<boolean> {
    return new Promise((resolve) => {
      if (this.isTelegramAvailable && this.cloudStorage) {
        this.cloudStorage.getItem(this.storageKey, (error, value) => {
          if (value) resolve(true);
          else resolve(!!localStorage.getItem(this.storageKey));
        });
      } else {
        resolve(!!localStorage.getItem(this.storageKey));
      }
    });
  }

  getStorageInfo() {
    return {
      isTelegram: this.isTelegramAvailable,
      available: this.isTelegramAvailable || typeof localStorage !== 'undefined'
    };
  }
}

let globalPersistenceService: PersistenceService | null = null;

export function getPersistenceService(): PersistenceService {
  if (!globalPersistenceService) {
    globalPersistenceService = new PersistenceService();
  }
  return globalPersistenceService;
}

export async function savePlayerProgress(
  playerState: PlayerState,
  additionalData: Partial<ExtendedPlayerState>
): Promise<boolean> {
  const persistence = getPersistenceService();
  const existingState = await persistence.loadState();
  const mergedState: ExtendedPlayerState = {
    ...(existingState || createInitialExtendedState(playerState)),
    ...playerState,
    ...additionalData
  };
  return persistence.saveState(mergedState);
}

export async function loadPlayerProgress(): Promise<ExtendedPlayerState | null> {
  const persistence = getPersistenceService();
  return persistence.loadState();
}
