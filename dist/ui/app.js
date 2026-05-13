// src/core/archetype-configs.ts
var ARCHETYPE_CONFIGS = {
  // === ARQUETIPOS MASCULINOS (12) ===
  PEDRO: {
    name: "PEDRO",
    title: "El Valiente Impulsivo",
    gender: "MASCULINE",
    primaryDecisionTypes: ["COURAGE", "JUSTICE", "LOYALTY"],
    secondaryDecisionTypes: ["TRANSFORMATION", "COMPASSION"],
    description: "Atacas primero, proteges a otros, caes y te levantas. Tu valent\xEDa es tu fuerza y tu debilidad.",
    biblicalReference: 'Mateo 14:28-29 - "Se\xF1or, si eres t\xFA, m\xE1ndame ir a ti sobre las aguas."'
  },
  DAVID: {
    name: "DAVID",
    title: "El Adorador Guerrero",
    gender: "MASCULINE",
    primaryDecisionTypes: ["FAITH", "COURAGE", "WISDOM"],
    secondaryDecisionTypes: ["COMPASSION", "JUSTICE"],
    description: "Buscas a YHWH en la oscuridad, usas Fe + Fuerza. Cantas salmos mientras luchas.",
    biblicalReference: 'Salmos 144:1 - "Bendito YHWH, mi roca, que adiestra mis manos para la batalla."'
  },
  MOISES: {
    name: "MOISES",
    title: "El L\xEDder Liberador",
    gender: "MASCULINE",
    primaryDecisionTypes: ["LEADERSHIP", "OBEDIENCE", "SACRIFICE"],
    secondaryDecisionTypes: ["ENDURANCE", "FAITH"],
    description: "Gu\xEDas NPCs, tomas decisiones por el grupo, sacrificio propio. Liberas cautivos.",
    biblicalReference: '\xC9xodo 3:10 - "Ven, te enviar\xE9 a Fara\xF3n para que saques de Egipto a mi pueblo."'
  },
  JOSE: {
    name: "JOSE",
    title: "El Perdonador",
    gender: "MASCULINE",
    primaryDecisionTypes: ["MERCY", "COMPASSION", "ENDURANCE"],
    secondaryDecisionTypes: ["WISDOM", "FAITH"],
    description: "Eres misericordioso con enemigos, sufres sin vengarte. Perdonas traiciones.",
    biblicalReference: 'G\xE9nesis 50:20 - "Vosotros pensasteis mal contra m\xED, mas YHWH lo encamin\xF3 a bien."'
  },
  JOB: {
    name: "JOB",
    title: "El Resistente",
    gender: "MASCULINE",
    primaryDecisionTypes: ["ENDURANCE", "FAITH", "OBEDIENCE"],
    secondaryDecisionTypes: ["WISDOM", "SACRIFICE"],
    description: "Aguantas sufrimiento extremo sin abandonar la fe. No maldices tu suerte.",
    biblicalReference: 'Job 19:25 - "Yo s\xE9 que mi Redentor vive, y al fin se levantar\xE1 sobre el polvo."'
  },
  SALOMON: {
    name: "SALOMON",
    title: "El Sabio",
    gender: "MASCULINE",
    primaryDecisionTypes: ["WISDOM", "STRATEGY", "OBEDIENCE"],
    secondaryDecisionTypes: ["LEADERSHIP", "FAITH"],
    description: "Investigas antes de actuar, recoges pergaminos, buscas conocimiento. Juzgas con discernimiento.",
    biblicalReference: 'Proverbios 2:6 - "Porque YHWH da la sabidur\xEDa, y de su boca viene el conocimiento."'
  },
  JOSUE: {
    name: "JOSUE",
    title: "El Conquistador",
    gender: "MASCULINE",
    primaryDecisionTypes: ["COURAGE", "JUSTICE", "LEADERSHIP"],
    secondaryDecisionTypes: ["OBEDIENCE", "FAITH"],
    description: "Combate puro, sin miedo, avanzas cuando todos retroceden. Tomas territorios.",
    biblicalReference: 'Josu\xE9 1:9 - "Mira que te mando que te esfuerces y seas valiente."'
  },
  ELIAS: {
    name: "ELIAS",
    title: "El Profeta Solitario",
    gender: "MASCULINE",
    primaryDecisionTypes: ["FAITH", "OBEDIENCE", "ENDURANCE"],
    secondaryDecisionTypes: ["WISDOM", "JUSTICE"],
    description: "Juegas solo, rechazas alianzas, escuchas la voz de YHWH. Hablas verdad al poder.",
    biblicalReference: '1 Reyes 19:12 - "Y despu\xE9s del fuego un silbo apacible y delicado."'
  },
  DANIEL: {
    name: "DANIEL",
    title: "El Fiel en el Exilio",
    gender: "MASCULINE",
    primaryDecisionTypes: ["FAITH", "OBEDIENCE", "WISDOM"],
    secondaryDecisionTypes: ["ENDURANCE", "STRATEGY"],
    description: "Mantienes pureza en territorio enemigo, no te contaminas. Oras aunque est\xE9 prohibido.",
    biblicalReference: 'Daniel 1:8 - "Y Daniel propuso en su coraz\xF3n no contaminarse."'
  },
  PABLO: {
    name: "PABLO",
    title: "El Transformado",
    gender: "MASCULINE",
    primaryDecisionTypes: ["TRANSFORMATION", "WISDOM", "LEADERSHIP"],
    secondaryDecisionTypes: ["COURAGE", "ENDURANCE"],
    description: "Empiezas con decisiones oscuras y luego cambias radicalmente. De perseguidor a predicador.",
    biblicalReference: 'Hechos 9:15-16 - "Este es instrumento escogido para llevar mi nombre."'
  },
  JUAN: {
    name: "JUAN",
    title: "El Amado",
    gender: "MASCULINE",
    primaryDecisionTypes: ["COMPASSION", "MERCY", "LOYALTY"],
    secondaryDecisionTypes: ["FAITH", "WISDOM"],
    description: "Amor como arma principal, proteges a los d\xE9biles siempre. El disc\xEDpulo que Jes\xFAs amaba.",
    biblicalReference: '1 Juan 4:19 - "Nosotros le amamos a \xE9l, porque \xE9l nos am\xF3 primero."'
  },
  ABRAHAM: {
    name: "ABRAHAM",
    title: "El que Obedece sin Ver",
    gender: "MASCULINE",
    primaryDecisionTypes: ["OBEDIENCE", "FAITH", "SACRIFICE"],
    secondaryDecisionTypes: ["ENDURANCE", "LEADERSHIP"],
    description: "Tomas decisiones de fe sin pruebas, conf\xEDas sin entender. Padre de multitudes.",
    biblicalReference: 'Hebreos 11:8 - "Por la fe Abraham, siendo llamado, obedeci\xF3."'
  },
  // === ARQUETIPOS FEMENINOS (8) ===
  DEBORA: {
    name: "DEBORA",
    title: "La Jueza Guerrera",
    gender: "FEMININE",
    primaryDecisionTypes: ["LEADERSHIP", "JUSTICE", "STRATEGY"],
    secondaryDecisionTypes: ["COURAGE", "FAITH"],
    description: "Lideras en combate, tomas autoridad cuando nadie m\xE1s puede. Jueza y profetisa.",
    biblicalReference: 'Jueces 4:4-5 - "Gobernaba en aquel tiempo a Israel una profetisa llamada D\xE9bora."'
  },
  ESTER: {
    name: "ESTER",
    title: "La Estratega Valiente",
    gender: "FEMININE",
    primaryDecisionTypes: ["STRATEGY", "COURAGE", "SACRIFICE"],
    secondaryDecisionTypes: ["WISDOM", "LOYALTY"],
    description: "Act\xFAas con sabidur\xEDa pol\xEDtica, sacrificas tu seguridad por tu pueblo. Reina valiente.",
    biblicalReference: 'Ester 4:16 - "Si perezco, que perezca." Entr\xF3 a ver al rey sin ser llamada.'
  },
  RUT: {
    name: "RUT",
    title: "La Leal Inquebrantable",
    gender: "FEMININE",
    primaryDecisionTypes: ["LOYALTY", "COMPASSION", "ENDURANCE"],
    secondaryDecisionTypes: ["FAITH", "SACRIFICE"],
    description: 'Nunca abandonas a un aliado NPC, fidelidad absoluta. "A donde t\xFA vayas, ir\xE9 yo".',
    biblicalReference: 'Rut 1:16 - "Tu pueblo ser\xE1 mi pueblo, y tu Dios mi Dios."'
  },
  MARIA: {
    name: "MARIA",
    title: "La Portadora de lo Sagrado",
    gender: "FEMININE",
    primaryDecisionTypes: ["FAITH", "OBEDIENCE", "COMPASSION"],
    secondaryDecisionTypes: ["ENDURANCE", "SACRIFICE"],
    description: "Proteges objetos sagrados, receptiva a YHWH, humilde en poder. Madre del Mes\xEDas.",
    biblicalReference: 'Lucas 1:38 - "He aqu\xED la sierva del Se\xF1or; h\xE1gase conmigo conforme a tu palabra."'
  },
  RAQUEL: {
    name: "RAQUEL",
    title: "La que Espera",
    gender: "FEMININE",
    primaryDecisionTypes: ["ENDURANCE", "FAITH", "LOYALTY"],
    secondaryDecisionTypes: ["COMPASSION", "WISDOM"],
    description: "Perseveras en misiones largas sin recompensa inmediata. Esperas a\xF1os por amor.",
    biblicalReference: 'G\xE9nesis 29:20 - "Y sirvi\xF3 Jacob por Raquel siete a\xF1os, y le parecieron pocos d\xEDas."'
  },
  ANA: {
    name: "ANA",
    title: "La que Ora en Silencio",
    gender: "FEMININE",
    primaryDecisionTypes: ["FAITH", "ENDURANCE", "OBEDIENCE"],
    secondaryDecisionTypes: ["WISDOM", "SACRIFICE"],
    description: "Usas la oraci\xF3n como mec\xE1nica principal antes de cada batalla. Lloras ante YHWH.",
    biblicalReference: '1 Samuel 1:10 - "Ella con amargura de alma or\xF3 a YHWH y llor\xF3 abundantemente."'
  },
  MARIA_MAGDALA: {
    name: "MARIA_MAGDALA",
    title: "La Restaurada",
    gender: "FEMININE",
    primaryDecisionTypes: ["TRANSFORMATION", "LOYALTY", "COMPASSION"],
    secondaryDecisionTypes: ["FAITH", "COURAGE"],
    description: "Empiezas con el perfil m\xE1s oscuro y alcanzas la mayor transformaci\xF3n. Primera en ver la resurrecci\xF3n.",
    biblicalReference: 'Marcos 16:9 - "Jes\xFAs se apareci\xF3 primero a Mar\xEDa Magdalena, de quien hab\xEDa echado siete demonios."'
  },
  JAEL: {
    name: "JAEL",
    title: "La que Act\xFAa en el Momento Justo",
    gender: "FEMININE",
    primaryDecisionTypes: ["STRATEGY", "COURAGE", "JUSTICE"],
    secondaryDecisionTypes: ["WISDOM", "FAITH"],
    description: "Esperas, observas y golpeas en el momento exacto \u2014 paciencia t\xE1ctica. Mata a S\xEDsara.",
    biblicalReference: 'Jueces 5:24-27 - "Entre las mujeres sea bendita Jael." Clav\xF3 la estaca en la sien.'
  }
};
function getArchetypeConfig(name) {
  return ARCHETYPE_CONFIGS[name];
}
function getArchetypesByGender(gender) {
  return Object.values(ARCHETYPE_CONFIGS).filter((config) => config.gender === gender);
}
function getArchetypesByDecisionType(decisionType) {
  return Object.values(ARCHETYPE_CONFIGS).filter(
    (config) => config.primaryDecisionTypes.includes(decisionType)
  );
}
var ALL_ARCHETYPE_NAMES = Object.keys(ARCHETYPE_CONFIGS);

// src/core/archetype-engine.ts
var PRIMARY_DECISION_SCORE = 3;
var SECONDARY_DECISION_SCORE = 1;
function initializeArchetypeState() {
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
function calculateDecisionImpact(decisionType) {
  const impact = {};
  const allNames = Object.keys(ARCHETYPE_CONFIGS);
  for (const name of allNames) {
    const config = ARCHETYPE_CONFIGS[name];
    let scoreToAdd = 0;
    if (config.primaryDecisionTypes.includes(decisionType)) {
      scoreToAdd = PRIMARY_DECISION_SCORE;
    } else if (config.secondaryDecisionTypes.includes(decisionType)) {
      scoreToAdd = SECONDARY_DECISION_SCORE;
    }
    if (scoreToAdd > 0) {
      impact[name] = scoreToAdd;
    }
  }
  return impact;
}
function updateArchetypeState(currentState, decision) {
  const newScores = { ...currentState.scores };
  const now = Date.now();
  for (const [archetypeName, scoreDelta] of Object.entries(decision.archetypeScores)) {
    const name = archetypeName;
    if (newScores[name] && scoreDelta && scoreDelta > 0) {
      newScores[name] = {
        ...newScores[name],
        score: newScores[name].score + scoreDelta,
        lastUpdated: now,
        recentDecisions: [
          decision.id,
          ...newScores[name].recentDecisions.slice(0, 9)
          // Mantener últimas 10 decisiones
        ]
      };
    }
  }
  const calculation = calculateDominantArchetype(newScores);
  return {
    scores: newScores,
    dominantArchetype: calculation.dominant,
    secondaryArchetype: calculation.secondary,
    isRevealed: currentState.isRevealed,
    revelationTimestamp: currentState.revelationTimestamp
  };
}
function calculateDominantArchetype(scores) {
  const allScores = Object.values(scores).map((s) => ({ name: s.name, score: s.score })).sort((a, b) => b.score - a.score);
  const dominant = allScores[0];
  const secondPlace = allScores[1];
  const totalScore = allScores.reduce((sum, s) => sum + s.score, 0);
  let confidence = 0;
  if (totalScore === 0) {
    confidence = 0;
  } else if (!secondPlace || secondPlace.score === 0) {
    confidence = 1;
  } else {
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
function createDecisionRecord(decisionType, description, kingdom, context) {
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
function generateDecisionId() {
  return `dec_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
function revealTrueName(state) {
  if (state.isRevealed) {
    throw new Error("El nombre verdadero ya fue revelado");
  }
  if (!state.dominantArchetype) {
    throw new Error("No hay arquetipo dominante calculado a\xFAn");
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
function getArchetypeStatistics(state) {
  const allScores = Object.values(state.scores);
  const sortedScores = [...allScores].sort((a, b) => b.score - a.score);
  const totalDecisions = allScores.reduce(
    (sum, s) => sum + s.recentDecisions.length,
    0
  );
  const topThree = sortedScores.slice(0, 3).map((s) => ({
    name: s.name,
    score: s.score,
    title: ARCHETYPE_CONFIGS[s.name].title
  }));
  const nonZeroScores = allScores.filter((s) => s.score > 0);
  const averageScore = nonZeroScores.length > 0 ? nonZeroScores.reduce((sum, s) => sum + s.score, 0) / nonZeroScores.length : 0;
  const mostActive = sortedScores.find((s) => s.score > 0)?.name || sortedScores[0].name;
  const leastActive = sortedScores.reverse().find((s) => s.score >= 0)?.name || sortedScores[0].name;
  return {
    totalDecisions,
    topThree,
    averageScore,
    mostActiveArchetype: mostActive,
    leastActiveArchetype: leastActive
  };
}
function isCloseToArchetype(state, targetArchetype, threshold = 0.8) {
  if (!state.dominantArchetype) return false;
  const targetScore = state.scores[targetArchetype].score;
  const dominantScore = state.scores[state.dominantArchetype].score;
  if (dominantScore === 0) return false;
  return targetScore / dominantScore >= threshold;
}
function getMostFrequentDecisionTypes(decisionLog, limit = 3) {
  const counts = {};
  for (const decision of decisionLog) {
    counts[decision.decisionType] = (counts[decision.decisionType] || 0) + 1;
  }
  return Object.entries(counts).map(([type, count]) => ({ type, count })).sort((a, b) => b.count - a.count).slice(0, limit);
}

// src/services/npc-hint-system.ts
var NPC_HINTS_DATABASE = [
  // === PISTAS DE SABIDURÍA ===
  {
    id: "wisdom_001",
    npcId: "salomon",
    triggerCondition: {
      decisionType: "WISDOM",
      minCount: 3
    },
    dialogLine: "Has elegido entender antes de juzgar. Eso viene de lo Alto.",
    hintCategory: "SABIDURIA",
    isPlayed: false
  },
  {
    id: "wisdom_002",
    npcId: "daniel",
    triggerCondition: {
      decisionType: "WISDOM",
      minCount: 5
    },
    dialogLine: "Tu mente busca la verdad como quien busca tesoro escondido.",
    hintCategory: "SABIDURIA",
    isPlayed: false
  },
  {
    id: "wisdom_003",
    npcId: "ester",
    triggerCondition: {
      decisionType: "STRATEGY",
      minCount: 4
    },
    dialogLine: "Piensas tres pasos adelante. Como reina que planea en silencio.",
    hintCategory: "SABIDURIA",
    isPlayed: false
  },
  // === PISTAS DE JUSTICIA ===
  {
    id: "justice_001",
    npcId: "debora",
    triggerCondition: {
      decisionType: "JUSTICE",
      minCount: 3
    },
    dialogLine: "Tu espada no tiembla ante la maldad. YHWH ve tu coraz\xF3n recto.",
    hintCategory: "JUSTICIA",
    isPlayed: false
  },
  {
    id: "justice_002",
    npcId: "josue",
    triggerCondition: {
      decisionType: "JUSTICE",
      minCount: 5
    },
    dialogLine: "No retrocedes cuando otros huyen. La tierra tiembla ante tu avance.",
    hintCategory: "JUSTICIA",
    isPlayed: false
  },
  {
    id: "justice_003",
    npcId: "elias",
    triggerCondition: {
      decisionType: "JUSTICE",
      minCount: 7
    },
    dialogLine: "Hablas verdad aunque el mundo prefiera mentira. Profeta en tiempos oscuros.",
    hintCategory: "JUSTICIA",
    isPlayed: false
  },
  // === PISTAS DE FE ===
  {
    id: "faith_001",
    npcId: "noe",
    triggerCondition: {
      decisionType: "FAITH",
      minCount: 5
    },
    dialogLine: "Te arrodillas m\xE1s de lo que luchas. Eso mueve monta\xF1as.",
    hintCategory: "FE",
    isPlayed: false
  },
  {
    id: "faith_002",
    npcId: "abraham",
    triggerCondition: {
      decisionType: "FAITH",
      minCount: 7
    },
    dialogLine: "Caminas sin ver el camino. Como padre que conf\xEDa sin entender.",
    hintCategory: "FE",
    isPlayed: false
  },
  {
    id: "faith_003",
    npcId: "ana",
    triggerCondition: {
      decisionType: "FAITH",
      minCount: 10
    },
    dialogLine: "Tus l\xE1grimas en oraci\xF3n son m\xE1s poderosas que mil espadas.",
    hintCategory: "FE",
    isPlayed: false
  },
  {
    id: "faith_004",
    npcId: "maria",
    triggerCondition: {
      decisionType: "OBEDIENCE",
      minCount: 5
    },
    dialogLine: 'Dices "s\xED" cuando otros dudan. El cielo mora en tu humildad.',
    hintCategory: "FE",
    isPlayed: false
  },
  // === PISTAS DE SACRIFICIO ===
  {
    id: "sacrifice_001",
    npcId: "moises",
    triggerCondition: {
      decisionType: "SACRIFICE",
      minCount: 3
    },
    dialogLine: "Das lo que no tienes. Como la viuda del templo.",
    hintCategory: "SACRIFICIO",
    isPlayed: false
  },
  {
    id: "sacrifice_002",
    npcId: "rut",
    triggerCondition: {
      decisionType: "SACRIFICE",
      minCount: 5
    },
    dialogLine: "Dejas tu tierra por amor. Tu recompensa ser\xE1 mayor de lo que imaginas.",
    hintCategory: "SACRIFICIO",
    isPlayed: false
  },
  {
    id: "sacrifice_003",
    npcId: "ester",
    triggerCondition: {
      decisionType: "SACRIFICE",
      minCount: 4
    },
    dialogLine: "Arriesgas tu vida por tu pueblo. Reina nacida para este momento.",
    hintCategory: "SACRIFICIO",
    isPlayed: false
  },
  // === PISTAS DE VALOR ===
  {
    id: "courage_001",
    npcId: "pedro",
    triggerCondition: {
      decisionType: "COURAGE",
      minCount: 3
    },
    dialogLine: "Saltas al agua sin mirar la tormenta. Se\xF1or, \xBFa d\xF3nde iremos?",
    hintCategory: "VALOR",
    isPlayed: false
  },
  {
    id: "courage_002",
    npcId: "david",
    triggerCondition: {
      decisionType: "COURAGE",
      minCount: 5
    },
    dialogLine: "Enfrentas gigantes con una honda y fe. YHWH ve tu coraz\xF3n.",
    hintCategory: "VALOR",
    isPlayed: false
  },
  {
    id: "courage_003",
    npcId: "jael",
    triggerCondition: {
      decisionType: "COURAGE",
      minCount: 4
    },
    dialogLine: "Esperas el momento justo... y act\xFAas cuando nadie m\xE1s se atreve.",
    hintCategory: "VALOR",
    isPlayed: false
  },
  // === PISTAS DE LEALTAD ===
  {
    id: "loyalty_001",
    npcId: "rut",
    triggerCondition: {
      decisionType: "LOYALTY",
      minCount: 3
    },
    dialogLine: 'No abandonas a los tuyos. "A donde t\xFA vayas, ir\xE9 yo".',
    hintCategory: "LEALTAD",
    isPlayed: false
  },
  {
    id: "loyalty_002",
    npcId: "juan",
    triggerCondition: {
      decisionType: "LOYALTY",
      minCount: 5
    },
    dialogLine: "Permaneces cuando otros huyen. El amor es m\xE1s fuerte que la muerte.",
    hintCategory: "LEALTAD",
    isPlayed: false
  },
  {
    id: "loyalty_003",
    npcId: "pedro",
    triggerCondition: {
      decisionType: "LOYALTY",
      minCount: 4
    },
    dialogLine: "Aunque caigas siete veces, te levantas. El Maestro te espera.",
    hintCategory: "LEALTAD",
    isPlayed: false
  },
  // === PISTAS DE MISERICORDIA ===
  {
    id: "mercy_001",
    npcId: "jose",
    triggerCondition: {
      decisionType: "MERCY",
      minCount: 3
    },
    dialogLine: "Perdonas cuando podr\xEDas vengarte. Dios lo encamina a bien.",
    hintCategory: "SABIDURIA",
    isPlayed: false
  },
  {
    id: "mercy_002",
    npcId: "juan",
    triggerCondition: {
      decisionType: "MERCY",
      minCount: 5
    },
    dialogLine: "Amas al que te hiere. Eso no es humano... es divino.",
    hintCategory: "SABIDURIA",
    isPlayed: false
  },
  // === PISTAS DE RESISTENCIA ===
  {
    id: "endurance_001",
    npcId: "job",
    triggerCondition: {
      decisionType: "ENDURANCE",
      minCount: 5
    },
    dialogLine: "Aguantas lo que quebrar\xEDa a otros. Tu Redentor vive.",
    hintCategory: "FE",
    isPlayed: false
  },
  {
    id: "endurance_002",
    npcId: "raquel",
    triggerCondition: {
      decisionType: "ENDURANCE",
      minCount: 7
    },
    dialogLine: "Esperas a\xF1os sin perder la esperanza. El amor todo lo aguarda.",
    hintCategory: "FE",
    isPlayed: false
  },
  // === PISTAS DE TRANSFORMACIÓN ===
  {
    id: "transformation_001",
    npcId: "pablo",
    triggerCondition: {
      decisionType: "TRANSFORMATION",
      minCount: 3
    },
    dialogLine: "Cambias como el d\xEDa a la noche. De perseguidor a predicador.",
    hintCategory: "SABIDURIA",
    isPlayed: false
  },
  {
    id: "transformation_002",
    npcId: "maria_magdalena",
    triggerCondition: {
      decisionType: "TRANSFORMATION",
      minCount: 5
    },
    dialogLine: "De las tinieblas a la luz. Eres la primera en ver la verdad.",
    hintCategory: "FE",
    isPlayed: false
  },
  // === PISTAS DE LIDERAZGO ===
  {
    id: "leadership_001",
    npcId: "moises",
    triggerCondition: {
      decisionType: "LEADERSHIP",
      minCount: 3
    },
    dialogLine: "Gu\xEDas cuando otros se pierden. El peso del pueblo est\xE1 en tus hombros.",
    hintCategory: "SABIDURIA",
    isPlayed: false
  },
  {
    id: "leadership_002",
    npcId: "debora",
    triggerCondition: {
      decisionType: "LEADERSHIP",
      minCount: 5
    },
    dialogLine: "Tomas autoridad cuando nadie m\xE1s puede. Jueza nacida para liberar.",
    hintCategory: "JUSTICIA",
    isPlayed: false
  },
  // === PISTAS DE COMPASIÓN ===
  {
    id: "compassion_001",
    npcId: "juan",
    triggerCondition: {
      decisionType: "COMPASSION",
      minCount: 3
    },
    dialogLine: "Proteges al d\xE9bil como hermano menor. El amor es tu bandera.",
    hintCategory: "SABIDURIA",
    isPlayed: false
  },
  {
    id: "compassion_002",
    npcId: "maria",
    triggerCondition: {
      decisionType: "COMPASSION",
      minCount: 5
    },
    dialogLine: "Guardas lo sagrado en tu coraz\xF3n. Madre de lo divino.",
    hintCategory: "FE",
    isPlayed: false
  }
];
function checkNPCHints(npcId, decisionLog, hintsState) {
  const availableHints = [];
  const npcHints = hintsState.filter((h) => h.npcId === npcId && !h.isPlayed);
  for (const hint of npcHints) {
    const matchingDecisions = decisionLog.filter(
      (d) => d.decisionType === hint.triggerCondition.decisionType
    );
    if (matchingDecisions.length >= hint.triggerCondition.minCount) {
      if (hint.triggerCondition.kingdom) {
        const kingdomDecisions = matchingDecisions.filter(
          (d) => d.kingdom === hint.triggerCondition.kingdom
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
function markHintAsPlayed(hintsState, hintId, timestamp = Date.now()) {
  return hintsState.map((hint) => {
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
function getAllAvailableHints(decisionLog, hintsState) {
  const allNpcIds = [...new Set(hintsState.map((h) => h.npcId))];
  let allAvailable = [];
  for (const npcId of allNpcIds) {
    const available = checkNPCHints(npcId, decisionLog, hintsState);
    allAvailable = [...allAvailable, ...available];
  }
  return allAvailable;
}
function getHintsByCategory(category, hintsState) {
  return hintsState.filter((h) => h.hintCategory === category);
}
function resetAllHints(hintsState) {
  return hintsState.map((hint) => ({
    ...hint,
    isPlayed: false,
    playedAt: void 0
  }));
}

// src/services/player-service.ts
var PlayerService = class {
  /**
   * Crea un nuevo jugador o carga uno existente
   */
  constructor(playerId) {
    this.state = null;
    this.storageKey = "shuv_player_state";
    if (playerId) {
      this.loadPlayer(playerId);
    }
  }
  /**
   * Inicializa un nuevo jugador
   */
  createNewPlayer(humanName, telegramId) {
    const now = Date.now();
    const playerId = telegramId || `player_${now}_${Math.random().toString(36).substr(2, 9)}`;
    this.state = {
      id: playerId,
      telegramId,
      humanName,
      trueName: null,
      acceptedName: null,
      archetypeState: initializeArchetypeState(),
      decisionLog: [],
      currentAct: 1,
      kingdomsLiberated: [],
      createdAt: now,
      updatedAt: now
    };
    this.persist();
    return this.state;
  }
  /**
   * Carga un jugador desde almacenamiento persistente
   */
  loadPlayer(playerId) {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.id === playerId) {
          this.state = parsed;
          return this.state;
        }
      }
      return this.createNewPlayer("Jugador");
    } catch (error) {
      console.error("Error cargando jugador:", error);
      return this.createNewPlayer("Jugador");
    }
  }
  /**
   * Registra una nueva decisión del jugador
   */
  recordDecision(decisionType, description, kingdom, context) {
    if (!this.state) {
      throw new Error("No hay jugador activo");
    }
    const { decision, archetypeScores } = createDecisionRecord(
      decisionType,
      description,
      kingdom,
      context
    );
    const newArchetypeState = updateArchetypeState(
      this.state.archetypeState,
      decision
    );
    this.state = {
      ...this.state,
      archetypeState: newArchetypeState,
      decisionLog: [...this.state.decisionLog, decision],
      updatedAt: Date.now()
    };
    this.persist();
    return {
      decision,
      updatedState: this.state
    };
  }
  /**
   * Obtiene pistas disponibles para un NPC específico
   */
  getAvailableHintsForNPC(npcId) {
    if (!this.state) return [];
    const availableHints = checkNPCHints(
      npcId,
      this.state.decisionLog,
      NPC_HINTS_DATABASE
    );
    return availableHints.map((h) => ({
      hintId: h.id,
      dialogLine: h.dialogLine,
      category: h.hintCategory
    }));
  }
  /**
   * Marca una pista como vista
   */
  markHintViewed(hintId) {
    console.log(`Pista ${hintId} marcada como vista`);
  }
  /**
   * Revela el nombre verdadero del jugador (final del Acto II)
   */
  revealTrueName() {
    if (!this.state) {
      throw new Error("No hay jugador activo");
    }
    const result = revealTrueName(this.state.archetypeState);
    this.state = {
      ...this.state,
      archetypeState: result.state,
      trueName: result.trueName,
      updatedAt: Date.now()
    };
    this.persist();
    return {
      trueName: result.trueName,
      title: result.config.title,
      description: result.config.description,
      biblicalReference: result.config.biblicalReference
    };
  }
  /**
   * El jugador acepta o rechaza su nombre verdadero
   */
  acceptOrRejectName(accept) {
    if (!this.state) {
      throw new Error("No hay jugador activo");
    }
    if (!this.state.archetypeState.isRevealed) {
      throw new Error("El nombre a\xFAn no ha sido revelado");
    }
    this.state = {
      ...this.state,
      acceptedName: accept,
      updatedAt: Date.now()
    };
    this.persist();
    return this.state;
  }
  /**
   * Obtiene estadísticas del progreso de arquetipos
   */
  getStatistics() {
    if (!this.state) {
      throw new Error("No hay jugador activo");
    }
    return getArchetypeStatistics(this.state.archetypeState);
  }
  /**
   * Obtiene el estado actual del jugador
   */
  getState() {
    return this.state;
  }
  /**
   * Obtiene el arquetipo dominante actual
   */
  getDominantArchetype() {
    if (!this.state) return null;
    return this.state.archetypeState.dominantArchetype;
  }
  /**
   * Avanza al siguiente acto
   */
  advanceToAct(act) {
    if (!this.state) {
      throw new Error("No hay jugador activo");
    }
    this.state = {
      ...this.state,
      currentAct: act,
      updatedAt: Date.now()
    };
    this.persist();
    return this.state;
  }
  /**
   * Registra un reino liberado
   */
  liberateKingdom(kingdomId) {
    if (!this.state) {
      throw new Error("No hay jugador activo");
    }
    if (!this.state.kingdomsLiberated.includes(kingdomId)) {
      this.state = {
        ...this.state,
        kingdomsLiberated: [...this.state.kingdomsLiberated, kingdomId],
        updatedAt: Date.now()
      };
      this.persist();
    }
    return this.state;
  }
  /**
   * Persiste el estado en localStorage
   */
  persist() {
    if (!this.state) return;
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    } catch (error) {
      console.error("Error persistiendo estado:", error);
    }
  }
  /**
   * Exporta el estado completo para sincronización con backend
   */
  exportState() {
    if (!this.state) return "";
    return JSON.stringify(this.state);
  }
  /**
   * Importa estado desde backend (Supabase)
   */
  importState(jsonState) {
    try {
      this.state = JSON.parse(jsonState);
      return this.state;
    } catch (error) {
      throw new Error("Estado inv\xE1lido");
    }
  }
  /**
   * Resetea completamente el progreso del jugador
   */
  resetProgress() {
    if (!this.state) {
      throw new Error("No hay jugador activo");
    }
    const now = Date.now();
    this.state = {
      ...this.state,
      archetypeState: initializeArchetypeState(),
      decisionLog: [],
      currentAct: 1,
      kingdomsLiberated: [],
      trueName: null,
      acceptedName: null,
      updatedAt: now
    };
    this.persist();
    return this.state;
  }
};
var globalPlayerService = null;
function getPlayerService() {
  if (!globalPlayerService) {
    globalPlayerService = new PlayerService();
  }
  return globalPlayerService;
}
function initializePlayerService(playerId) {
  globalPlayerService = new PlayerService(playerId);
  return globalPlayerService;
}
export {
  ALL_ARCHETYPE_NAMES,
  ARCHETYPE_CONFIGS,
  NPC_HINTS_DATABASE,
  PlayerService,
  calculateDecisionImpact,
  calculateDominantArchetype,
  checkNPCHints,
  createDecisionRecord,
  getAllAvailableHints,
  getArchetypeConfig,
  getArchetypeStatistics,
  getArchetypesByDecisionType,
  getArchetypesByGender,
  getHintsByCategory,
  getMostFrequentDecisionTypes,
  getPlayerService,
  initializeArchetypeState,
  initializePlayerService,
  isCloseToArchetype,
  markHintAsPlayed,
  resetAllHints,
  revealTrueName,
  updateArchetypeState
};
