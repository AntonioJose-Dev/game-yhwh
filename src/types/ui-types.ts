/**
 * SHUV - Tipos para UI y Navegación del Mapa de Etapas
 */

import { ArchetypeName, PlayerState } from './archetypes';

/**
 * Definición de una etapa del juego
 */
export interface Stage {
  id: number;
  name: string;
  description: string;
  kingdom: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD' | 'BOSS';
  status: 'LOCKED' | 'AVAILABLE' | 'COMPLETED' | 'CURRENT';
  position: {
    x: number; // Porcentaje horizontal (0-100)
    y: number; // Porcentaje vertical (0-100)
  };
  rewards?: {
    feBonus?: number;
    scroll?: string;
    armorPiece?: string;
  };
}

/**
 * Configuración de los 7 Reinos con sus etapas
 */
export interface KingdomConfig {
  id: string;
  name: string;
  description: string;
  stages: Stage[];
  bossStage?: Stage;
}

/**
 * Estado de navegación de la app
 */
export type AppScreen = 
  | 'MAP'           // Mapa principal de etapas
  | 'PROFILE'       // Perfil del jugador
  | 'VERSE_BOOK'    // Libro de versículos
  | 'BATTLE'        // Pantalla de combate
  | 'EDITOR'        // Editor de personaje
  | 'SETTINGS';     // Configuración

/**
 * Datos del perfil del jugador para UI
 */
export interface PlayerProfileUI {
  humanName: string;
  trueName: ArchetypeName | null;
  archetypeTitle: string | null;
  acceptedName: boolean | null;
  currentAct: 1 | 2 | 3;
  kingdomsLiberated: string[];
  feLevel: number;
  currentStage: number;
  completedStages: number[];
  stats: {
    battlesWon: number;
    battlesLost: number;
    decisionsMade: number;
  };
}

/**
 * Nodo visual para el mapa de etapas
 */
export interface MapNode {
  stage: Stage;
  isCompleted: boolean;
  isCurrent: boolean;
  isLocked: boolean;
  canAccess: boolean;
}

/**
 * Configuración de tema visual
 */
export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
}

/**
 * Tema espiritual basado en progreso
 */
export const SPIRITUAL_THEMES: Record<string, ThemeConfig> = {
  DEFAULT: {
    primaryColor: '#6366f1',
    secondaryColor: '#8b5cf6',
    backgroundColor: '#0f172a',
    textColor: '#f8fafc',
    accentColor: '#fbbf24'
  },
  LIGHT_REVEALED: {
    primaryColor: '#fbbf24',
    secondaryColor: '#f59e0b',
    backgroundColor: '#1e293b',
    textColor: '#fef3c7',
    accentColor: '#ffffff'
  },
  DARK_REJECTED: {
    primaryColor: '#7c3aed',
    secondaryColor: '#5b21b6',
    backgroundColor: '#020617',
    textColor: '#e2e8f0',
    accentColor: '#dc2626'
  }
};

/**
 * Obtiene el tema visual según el estado del jugador
 */
export function getThemeForPlayer(
  nameAccepted: boolean | null,
  isRevealed: boolean
): ThemeConfig {
  if (!isRevealed || nameAccepted === null) {
    return SPIRITUAL_THEMES.DEFAULT;
  }
  
  if (nameAccepted) {
    return SPIRITUAL_THEMES.LIGHT_REVEALED;
  } else {
    return SPIRITUAL_THEMES.DARK_REJECTED;
  }
}
