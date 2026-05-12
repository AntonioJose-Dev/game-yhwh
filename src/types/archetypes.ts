/**
 * SHUV - Sistema de Arquetipos Bíblicos
 * Tipos centrales para el sistema de arquetipos y decisiones del jugador
 */

// Lista completa de los 20 arquetipos bíblicos
export type ArchetypeName =
  // Masculinos (12)
  | 'PEDRO'      // El Valiente Impulsivo
  | 'DAVID'      // El Adorador Guerrero
  | 'MOISES'     // El Líder Liberador
  | 'JOSE'       // El Perdonador
  | 'JOB'        // El Resistente
  | 'SALOMON'    // El Sabio
  | 'JOSUE'      // El Conquistador
  | 'ELIAS'      // El Profeta Solitario
  | 'DANIEL'     // El Fiel en el Exilio
  | 'PABLO'      // El Transformado
  | 'JUAN'       // El Amado
  | 'ABRAHAM'    // El que Obedece sin Ver
  // Femeninos (8)
  | 'DEBORA'     // La Jueza Guerrera
  | 'ESTER'      // La Estratega Valiente
  | 'RUT'        // La Leal Inquebrantable
  | 'MARIA'      // La Portadora de lo Sagrado
  | 'RAQUEL'     // La que Espera
  | 'ANA'        // La que Ora en Silencio
  | 'MARIA_MAGDALA' // La Restaurada
  | 'JAEL';      // La que Actúa en el Momento Justo

// Tipos de decisiones que el jugador puede tomar
export type DecisionType =
  | 'MERCY'         // Misericordia (perdonar enemigos)
  | 'JUSTICE'       // Justicia (combatir sin piedad)
  | 'WISDOM'        // Sabiduría (investigar, leer pergaminos)
  | 'SACRIFICE'     // Sacrificio (dar recursos a otros)
  | 'FAITH'         // Fe (orar, confiar sin ver)
  | 'LEADERSHIP'    // Liderazgo (tomar decisiones por el grupo)
  | 'ENDURANCE'     // Resistencia (aguantar sufrimiento)
  | 'OBEDIENCE'     // Obediencia (seguir instrucciones divinas)
  | 'COURAGE'       // Valor (avanzar ante el peligro)
  | 'LOYALTY'       // Lealtad (no abandonar aliados)
  | 'TRANSFORMATION' // Transformación (cambio radical de comportamiento)
  | 'STRATEGY'      // Estrategia (planificar antes de actuar)
  | 'COMPASSION'    // Compasión (proteger débiles);

// Registro de una decisión individual
export interface DecisionRecord {
  id: string;
  timestamp: number;
  decisionType: DecisionType;
  description: string;
  kingdom?: string;
  context?: string;
  archetypeScores: Partial<Record<ArchetypeName, number>>;
}

// Puntuación de un arquetipo específico
export interface ArchetypeScore {
  name: ArchetypeName;
  score: number;
  lastUpdated: number;
  recentDecisions: string[]; // IDs de las últimas decisiones que afectaron este arquetipo
}

// Estado completo de los arquetipos del jugador
export interface ArchetypeState {
  scores: Record<ArchetypeName, ArchetypeScore>;
  dominantArchetype: ArchetypeName | null;
  secondaryArchetype: ArchetypeName | null;
  isRevealed: boolean;
  revelationTimestamp?: number;
}

// Datos del jugador completos
export interface PlayerState {
  id: string;
  telegramId?: string;
  humanName: string;
  trueName: ArchetypeName | null;
  acceptedName: boolean | null; // null = no se ha revelado aún
  archetypeState: ArchetypeState;
  decisionLog: DecisionRecord[];
  currentAct: 1 | 2 | 3;
  kingdomsLiberated: string[];
  createdAt: number;
  updatedAt: number;
}

// Configuración de cada arquetipo
export interface ArchetypeConfig {
  name: ArchetypeName;
  title: string;
  gender: 'MASCULINE' | 'FEMININE';
  primaryDecisionTypes: DecisionType[];
  secondaryDecisionTypes: DecisionType[];
  description: string;
  biblicalReference: string;
}

// Pista sutil que un NPC puede dar
export interface NPCHint {
  id: string;
  npcId: string;
  triggerCondition: {
    decisionType: DecisionType;
    minCount: number;
    kingdom?: string;
    archetypeName?: ArchetypeName;
  };
  dialogLine: string;
  hintCategory: 'SABIDURIA' | 'JUSTICIA' | 'FE' | 'SACRIFICIO' | 'VALOR' | 'LEALTAD';
  isPlayed: boolean;
  playedAt?: number;
}

// Resultado del cálculo del arquetipo dominante
export interface ArchetypeCalculationResult {
  dominant: ArchetypeName;
  secondary: ArchetypeName | null;
  allScores: Array<{ name: ArchetypeName; score: number }>;
  confidence: number; // 0-1, qué tan claro es el arquetipo dominante
}
