/**
 * SHUV - Tipos para UI y Navegación del Mapa de Etapas
 */
/**
 * Tema espiritual basado en progreso
 */
export const SPIRITUAL_THEMES = {
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
export function getThemeForPlayer(nameAccepted, isRevealed) {
    if (!isRevealed || nameAccepted === null) {
        return SPIRITUAL_THEMES.DEFAULT;
    }
    if (nameAccepted) {
        return SPIRITUAL_THEMES.LIGHT_REVEALED;
    }
    else {
        return SPIRITUAL_THEMES.DARK_REJECTED;
    }
}
//# sourceMappingURL=ui-types.js.map
