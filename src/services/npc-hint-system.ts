/**
 * SHUV - Sistema de Pistas de Arquetipos para NPCs
 * Los NPCs comentan decisiones del jugador sin revelar el arquetipo directamente
 */

import { NPCHint, DecisionType, ArchetypeName, DecisionRecord } from '../types/archetypes';

/**
 * Base de datos de pistas sutiles por categoría
 * Cada pista está diseñada para ser ambigua pero significativa
 */
export const NPC_HINTS_DATABASE: NPCHint[] = [
  // === PISTAS DE SABIDURÍA ===
  {
    id: 'wisdom_001',
    npcId: 'salomon',
    triggerCondition: {
      decisionType: 'WISDOM',
      minCount: 3
    },
    dialogLine: 'Has elegido entender antes de juzgar. Eso viene de lo Alto.',
    hintCategory: 'SABIDURIA',
    isPlayed: false
  },
  {
    id: 'wisdom_002',
    npcId: 'daniel',
    triggerCondition: {
      decisionType: 'WISDOM',
      minCount: 5
    },
    dialogLine: 'Tu mente busca la verdad como quien busca tesoro escondido.',
    hintCategory: 'SABIDURIA',
    isPlayed: false
  },
  {
    id: 'wisdom_003',
    npcId: 'ester',
    triggerCondition: {
      decisionType: 'STRATEGY',
      minCount: 4
    },
    dialogLine: 'Piensas tres pasos adelante. Como reina que planea en silencio.',
    hintCategory: 'SABIDURIA',
    isPlayed: false
  },
  
  // === PISTAS DE JUSTICIA ===
  {
    id: 'justice_001',
    npcId: 'debora',
    triggerCondition: {
      decisionType: 'JUSTICE',
      minCount: 3
    },
    dialogLine: 'Tu espada no tiembla ante la maldad. YHWH ve tu corazón recto.',
    hintCategory: 'JUSTICIA',
    isPlayed: false
  },
  {
    id: 'justice_002',
    npcId: 'josue',
    triggerCondition: {
      decisionType: 'JUSTICE',
      minCount: 5
    },
    dialogLine: 'No retrocedes cuando otros huyen. La tierra tiembla ante tu avance.',
    hintCategory: 'JUSTICIA',
    isPlayed: false
  },
  {
    id: 'justice_003',
    npcId: 'elias',
    triggerCondition: {
      decisionType: 'JUSTICE',
      minCount: 7
    },
    dialogLine: 'Hablas verdad aunque el mundo prefiera mentira. Profeta en tiempos oscuros.',
    hintCategory: 'JUSTICIA',
    isPlayed: false
  },
  
  // === PISTAS DE FE ===
  {
    id: 'faith_001',
    npcId: 'noe',
    triggerCondition: {
      decisionType: 'FAITH',
      minCount: 5
    },
    dialogLine: 'Te arrodillas más de lo que luchas. Eso mueve montañas.',
    hintCategory: 'FE',
    isPlayed: false
  },
  {
    id: 'faith_002',
    npcId: 'abraham',
    triggerCondition: {
      decisionType: 'FAITH',
      minCount: 7
    },
    dialogLine: 'Caminas sin ver el camino. Como padre que confía sin entender.',
    hintCategory: 'FE',
    isPlayed: false
  },
  {
    id: 'faith_003',
    npcId: 'ana',
    triggerCondition: {
      decisionType: 'FAITH',
      minCount: 10
    },
    dialogLine: 'Tus lágrimas en oración son más poderosas que mil espadas.',
    hintCategory: 'FE',
    isPlayed: false
  },
  {
    id: 'faith_004',
    npcId: 'maria',
    triggerCondition: {
      decisionType: 'OBEDIENCE',
      minCount: 5
    },
    dialogLine: 'Dices "sí" cuando otros dudan. El cielo mora en tu humildad.',
    hintCategory: 'FE',
    isPlayed: false
  },
  
  // === PISTAS DE SACRIFICIO ===
  {
    id: 'sacrifice_001',
    npcId: 'moises',
    triggerCondition: {
      decisionType: 'SACRIFICE',
      minCount: 3
    },
    dialogLine: 'Das lo que no tienes. Como la viuda del templo.',
    hintCategory: 'SACRIFICIO',
    isPlayed: false
  },
  {
    id: 'sacrifice_002',
    npcId: 'rut',
    triggerCondition: {
      decisionType: 'SACRIFICE',
      minCount: 5
    },
    dialogLine: 'Dejas tu tierra por amor. Tu recompensa será mayor de lo que imaginas.',
    hintCategory: 'SACRIFICIO',
    isPlayed: false
  },
  {
    id: 'sacrifice_003',
    npcId: 'ester',
    triggerCondition: {
      decisionType: 'SACRIFICE',
      minCount: 4
    },
    dialogLine: 'Arriesgas tu vida por tu pueblo. Reina nacida para este momento.',
    hintCategory: 'SACRIFICIO',
    isPlayed: false
  },
  
  // === PISTAS DE VALOR ===
  {
    id: 'courage_001',
    npcId: 'pedro',
    triggerCondition: {
      decisionType: 'COURAGE',
      minCount: 3
    },
    dialogLine: 'Saltas al agua sin mirar la tormenta. Señor, ¿a dónde iremos?',
    hintCategory: 'VALOR',
    isPlayed: false
  },
  {
    id: 'courage_002',
    npcId: 'david',
    triggerCondition: {
      decisionType: 'COURAGE',
      minCount: 5
    },
    dialogLine: 'Enfrentas gigantes con una honda y fe. YHWH ve tu corazón.',
    hintCategory: 'VALOR',
    isPlayed: false
  },
  {
    id: 'courage_003',
    npcId: 'jael',
    triggerCondition: {
      decisionType: 'COURAGE',
      minCount: 4
    },
    dialogLine: 'Esperas el momento justo... y actúas cuando nadie más se atreve.',
    hintCategory: 'VALOR',
    isPlayed: false
  },
  
  // === PISTAS DE LEALTAD ===
  {
    id: 'loyalty_001',
    npcId: 'rut',
    triggerCondition: {
      decisionType: 'LOYALTY',
      minCount: 3
    },
    dialogLine: 'No abandonas a los tuyos. "A donde tú vayas, iré yo".',
    hintCategory: 'LEALTAD',
    isPlayed: false
  },
  {
    id: 'loyalty_002',
    npcId: 'juan',
    triggerCondition: {
      decisionType: 'LOYALTY',
      minCount: 5
    },
    dialogLine: 'Permaneces cuando otros huyen. El amor es más fuerte que la muerte.',
    hintCategory: 'LEALTAD',
    isPlayed: false
  },
  {
    id: 'loyalty_003',
    npcId: 'pedro',
    triggerCondition: {
      decisionType: 'LOYALTY',
      minCount: 4
    },
    dialogLine: 'Aunque caigas siete veces, te levantas. El Maestro te espera.',
    hintCategory: 'LEALTAD',
    isPlayed: false
  },
  
  // === PISTAS DE MISERICORDIA ===
  {
    id: 'mercy_001',
    npcId: 'jose',
    triggerCondition: {
      decisionType: 'MERCY',
      minCount: 3
    },
    dialogLine: 'Perdonas cuando podrías vengarte. Dios lo encamina a bien.',
    hintCategory: 'SABIDURIA',
    isPlayed: false
  },
  {
    id: 'mercy_002',
    npcId: 'juan',
    triggerCondition: {
      decisionType: 'MERCY',
      minCount: 5
    },
    dialogLine: 'Amas al que te hiere. Eso no es humano... es divino.',
    hintCategory: 'SABIDURIA',
    isPlayed: false
  },
  
  // === PISTAS DE RESISTENCIA ===
  {
    id: 'endurance_001',
    npcId: 'job',
    triggerCondition: {
      decisionType: 'ENDURANCE',
      minCount: 5
    },
    dialogLine: 'Aguantas lo que quebraría a otros. Tu Redentor vive.',
    hintCategory: 'FE',
    isPlayed: false
  },
  {
    id: 'endurance_002',
    npcId: 'raquel',
    triggerCondition: {
      decisionType: 'ENDURANCE',
      minCount: 7
    },
    dialogLine: 'Esperas años sin perder la esperanza. El amor todo lo aguarda.',
    hintCategory: 'FE',
    isPlayed: false
  },
  
  // === PISTAS DE TRANSFORMACIÓN ===
  {
    id: 'transformation_001',
    npcId: 'pablo',
    triggerCondition: {
      decisionType: 'TRANSFORMATION',
      minCount: 3
    },
    dialogLine: 'Cambias como el día a la noche. De perseguidor a predicador.',
    hintCategory: 'SABIDURIA',
    isPlayed: false
  },
  {
    id: 'transformation_002',
    npcId: 'maria_magdalena',
    triggerCondition: {
      decisionType: 'TRANSFORMATION',
      minCount: 5
    },
    dialogLine: 'De las tinieblas a la luz. Eres la primera en ver la verdad.',
    hintCategory: 'FE',
    isPlayed: false
  },
  
  // === PISTAS DE LIDERAZGO ===
  {
    id: 'leadership_001',
    npcId: 'moises',
    triggerCondition: {
      decisionType: 'LEADERSHIP',
      minCount: 3
    },
    dialogLine: 'Guías cuando otros se pierden. El peso del pueblo está en tus hombros.',
    hintCategory: 'SABIDURIA',
    isPlayed: false
  },
  {
    id: 'leadership_002',
    npcId: 'debora',
    triggerCondition: {
      decisionType: 'LEADERSHIP',
      minCount: 5
    },
    dialogLine: 'Tomas autoridad cuando nadie más puede. Jueza nacida para liberar.',
    hintCategory: 'JUSTICIA',
    isPlayed: false
  },
  
  // === PISTAS DE COMPASIÓN ===
  {
    id: 'compassion_001',
    npcId: 'juan',
    triggerCondition: {
      decisionType: 'COMPASSION',
      minCount: 3
    },
    dialogLine: 'Proteges al débil como hermano menor. El amor es tu bandera.',
    hintCategory: 'SABIDURIA',
    isPlayed: false
  },
  {
    id: 'compassion_002',
    npcId: 'maria',
    triggerCondition: {
      decisionType: 'COMPASSION',
      minCount: 5
    },
    dialogLine: 'Guardas lo sagrado en tu corazón. Madre de lo divino.',
    hintCategory: 'FE',
    isPlayed: false
  }
];

/**
 * Verifica si un NPC debe dar una pista basada en el historial de decisiones
 */
export function checkNPCHints(
  npcId: string,
  decisionLog: DecisionRecord[],
  hintsState: NPCHint[]
): NPCHint[] {
  const availableHints: NPCHint[] = [];
  
  // Filtrar hints para este NPC que aún no han sido jugados
  const npcHints = hintsState.filter(h => h.npcId === npcId && !h.isPlayed);
  
  for (const hint of npcHints) {
    // Contar decisiones del tipo requerido
    const matchingDecisions = decisionLog.filter(
      d => d.decisionType === hint.triggerCondition.decisionType
    );
    
    // Verificar si cumple el mínimo requerido
    if (matchingDecisions.length >= hint.triggerCondition.minCount) {
      // Verificar restricción de reino si existe
      if (hint.triggerCondition.kingdom) {
        const kingdomDecisions = matchingDecisions.filter(
          d => d.kingdom === hint.triggerCondition.kingdom
        );
        if (kingdomDecisions.length < hint.triggerCondition.minCount) {
          continue;
        }
      }
      
      availableHints.push(hint);
    }
  }
  
  return availableHints;
}

/**
 * Marca una pista como jugada
 */
export function markHintAsPlayed(
  hintsState: NPCHint[],
  hintId: string,
  timestamp: number = Date.now()
): NPCHint[] {
  return hintsState.map(hint => {
    if (hint.id === hintId) {
      return {
        ...hint,
        isPlayed: true,
        playedAt: timestamp
      };
    }
    return hint;
  });
}

/**
 * Obtiene todas las pistas disponibles para un jugador
 */
export function getAllAvailableHints(
  decisionLog: DecisionRecord[],
  hintsState: NPCHint[]
): NPCHint[] {
  const allNpcIds = [...new Set(hintsState.map(h => h.npcId))];
  let allAvailable: NPCHint[] = [];
  
  for (const npcId of allNpcIds) {
    const available = checkNPCHints(npcId, decisionLog, hintsState);
    allAvailable = [...allAvailable, ...available];
  }
  
  return allAvailable;
}

/**
 * Obtiene pistas por categoría
 */
export function getHintsByCategory(
  category: NPCHint['hintCategory'],
  hintsState: NPCHint[]
): NPCHint[] {
  return hintsState.filter(h => h.hintCategory === category);
}

/**
 * Resetea todas las pistas (útil para testing o nuevo juego+)
 */
export function resetAllHints(hintsState: NPCHint[]): NPCHint[] {
  return hintsState.map(hint => ({
    ...hint,
    isPlayed: false,
    playedAt: undefined
  }));
}
