/**
 * SHUV - Motor de Cálculo de Arquetipos
 * Calcula el arquetipo dominante basado en las decisiones del jugador
 */
import { ARCHETYPE_CONFIGS } from '../core/archetype-configs';
/**
 * Puntuaciones base por tipo de decisión
 * Las decisiones primarias dan más puntos que las secundarias
 */
const PRIMARY_DECISION_SCORE = 3;
const SECONDARY_DECISION_SCORE = 1;
/**
 * Inicializa el estado de arquetipos para un nuevo jugador
 */
export function initializeArchetypeState() {
    const allNames = Object.keys(ARCHETYPE_CONFIGS);
    const now = Date.now();
    const scores = {};
    for (const name of allNames) {
        scores[name] = {
            name,
            score: 0,
            lastUpdated: now,
            recentDecisions: []
        };
    }
    return {
        scores,
        dominantArchetype: null,
        secondaryArchetype: null,
        isRevealed: false
    };
}
/**
 * Calcula qué arquetipos se ven afectados por una decisión
 * Retorna un mapa de arquetipo -> puntuación a añadir
 */
export function calculateDecisionImpact(decisionType) {
    const impact = {};
    const allNames = Object.keys(ARCHETYPE_CONFIGS);
    for (const name of allNames) {
        const config = ARCHETYPE_CONFIGS[name];
        let scoreToAdd = 0;
        // Verificar si es decisión primaria para este arquetipo
        if (config.primaryDecisionTypes.includes(decisionType)) {
            scoreToAdd = PRIMARY_DECISION_SCORE;
        }
        // Verificar si es decisión secundaria
        else if (config.secondaryDecisionTypes.includes(decisionType)) {
            scoreToAdd = SECONDARY_DECISION_SCORE;
        }
        if (scoreToAdd > 0) {
            impact[name] = scoreToAdd;
        }
    }
    return impact;
}
/**
 * Actualiza el estado de arquetipos con una nueva decisión
 */
export function updateArchetypeState(currentState, decision) {
    const newScores = { ...currentState.scores };
    const now = Date.now();
    // Aplicar impacto de la decisión a cada arquetipo afectado
    for (const [archetypeName, scoreDelta] of Object.entries(decision.archetypeScores)) {
        const name = archetypeName;
        if (newScores[name] && scoreDelta && scoreDelta > 0) {
            newScores[name] = {
                ...newScores[name],
                score: newScores[name].score + scoreDelta,
                lastUpdated: now,
                recentDecisions: [
                    decision.id,
                    ...newScores[name].recentDecisions.slice(0, 9) // Mantener últimas 10 decisiones
                ]
            };
        }
    }
    // Recalcular arquetipo dominante y secundario
    const calculation = calculateDominantArchetype(newScores);
    return {
        scores: newScores,
        dominantArchetype: calculation.dominant,
        secondaryArchetype: calculation.secondary,
        isRevealed: currentState.isRevealed,
        revelationTimestamp: currentState.revelationTimestamp
    };
}
/**
 * Calcula el arquetipo dominante y secundario basado en las puntuaciones
 */
export function calculateDominantArchetype(scores) {
    const allScores = Object.values(scores)
        .map(s => ({ name: s.name, score: s.score }))
        .sort((a, b) => b.score - a.score);
    const dominant = allScores[0];
    const secondPlace = allScores[1];
    // Calcular confianza basada en la diferencia entre primero y segundo
    const totalScore = allScores.reduce((sum, s) => sum + s.score, 0);
    let confidence = 0;
    if (totalScore === 0) {
        confidence = 0;
    }
    else if (!secondPlace || secondPlace.score === 0) {
        confidence = 1; // Máxima confianza si no hay competencia
    }
    else {
        // Confianza basada en qué tan claro es el liderazgo
        const gap = dominant.score - secondPlace.score;
        const averageScore = totalScore / allScores.length;
        confidence = Math.min(1, gap / (averageScore || 1));
    }
    return {
        dominant: dominant.name,
        secondary: secondPlace && secondPlace.score > 0 ? secondPlace.name : null,
        allScores,
        confidence
    };
}
/**
 * Prepara una estructura de decisión lista para ser registrada
 */
export function createDecisionRecord(decisionType, description, kingdom, context) {
    const archetypeScores = calculateDecisionImpact(decisionType);
    const now = Date.now();
    const decision = {
        id: generateDecisionId(),
        timestamp: now,
        decisionType,
        description,
        kingdom,
        context,
        archetypeScores
    };
    return { decision, archetypeScores };
}
/**
 * Genera un ID único para una decisión
 */
function generateDecisionId() {
    return `dec_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
/**
 * Revela el arquetipo verdadero del jugador (llamado al final del Acto II)
 */
export function revealTrueName(state) {
    if (state.isRevealed) {
        throw new Error('El nombre verdadero ya fue revelado');
    }
    if (!state.dominantArchetype) {
        throw new Error('No hay arquetipo dominante calculado aún');
    }
    const trueName = state.dominantArchetype;
    const config = ARCHETYPE_CONFIGS[trueName];
    const newState = {
        ...state,
        isRevealed: true,
        revelationTimestamp: Date.now()
    };
    return {
        state: newState,
        trueName,
        config
    };
}
/**
 * Obtiene estadísticas detalladas del progreso de arquetipos
 */
export function getArchetypeStatistics(state) {
    const allScores = Object.values(state.scores);
    const sortedScores = [...allScores].sort((a, b) => b.score - a.score);
    const totalDecisions = allScores.reduce((sum, s) => sum + s.recentDecisions.length, 0);
    const topThree = sortedScores.slice(0, 3).map(s => ({
        name: s.name,
        score: s.score,
        title: ARCHETYPE_CONFIGS[s.name].title
    }));
    const nonZeroScores = allScores.filter(s => s.score > 0);
    const averageScore = nonZeroScores.length > 0
        ? nonZeroScores.reduce((sum, s) => sum + s.score, 0) / nonZeroScores.length
        : 0;
    const mostActive = sortedScores.find(s => s.score > 0)?.name || sortedScores[0].name;
    const leastActive = sortedScores.reverse().find(s => s.score >= 0)?.name || sortedScores[0].name;
    return {
        totalDecisions,
        topThree,
        averageScore,
        mostActiveArchetype: mostActive,
        leastActiveArchetype: leastActive
    };
}
/**
 * Verifica si un jugador está cerca de desbloquear un arquetipo específico
 * (útil para dar pistas más específicas)
 */
export function isCloseToArchetype(state, targetArchetype, threshold = 0.8) {
    if (!state.dominantArchetype)
        return false;
    const targetScore = state.scores[targetArchetype].score;
    const dominantScore = state.scores[state.dominantArchetype].score;
    if (dominantScore === 0)
        return false;
    return targetScore / dominantScore >= threshold;
}
/**
 * Obtiene los tipos de decisión más frecuentes del jugador
 */
export function getMostFrequentDecisionTypes(decisionLog, limit = 3) {
    const counts = {};
    for (const decision of decisionLog) {
        counts[decision.decisionType] = (counts[decision.decisionType] || 0) + 1;
    }
    return Object.entries(counts)
        .map(([type, count]) => ({ type: type, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, limit);
}
//# sourceMappingURL=archetype-engine.js.map