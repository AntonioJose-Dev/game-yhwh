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

// src/persistence/telegram-storage.ts
function createInitialExtendedState(baseState, telegramId) {
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
function isTelegramVersionAtLeast(required) {
  try {
    const version = window.Telegram?.WebApp?.version ?? "0.0";
    const [rMajor, rMinor = 0] = required.split(".").map(Number);
    const [vMajor, vMinor = 0] = version.split(".").map(Number);
    if (vMajor !== rMajor) return vMajor > rMajor;
    return vMinor >= rMinor;
  } catch {
    return false;
  }
}
var PersistenceService = class {
  constructor() {
    this.storageKey = "shuv_player_v1";
    this.cloudStorage = null;
    this.isTelegramAvailable = false;
    this.checkTelegramAvailability();
  }
  checkTelegramAvailability() {
    const tg = typeof window !== "undefined" ? window.Telegram?.WebApp : null;
    if (tg?.CloudStorage && isTelegramVersionAtLeast("6.9")) {
      this.cloudStorage = tg.CloudStorage;
      this.isTelegramAvailable = true;
      console.log("[Persistence] Telegram CloudStorage disponible (v" + tg.version + ")");
    } else {
      this.isTelegramAvailable = false;
      const ver = tg?.version ?? "desconocida";
      console.log("[Persistence] Usando localStorage (versi\xF3n Telegram: " + ver + ")");
    }
  }
  async saveState(state) {
    const serialized = JSON.stringify(state);
    return new Promise((resolve) => {
      if (this.isTelegramAvailable && this.cloudStorage) {
        this.cloudStorage.setItem(this.storageKey, serialized, (error) => {
          if (error) {
            console.error("[Persistence] Error guardando en CloudStorage:", error);
            this.saveToLocalStorage(serialized);
            resolve(false);
          } else {
            console.log("[Persistence] Estado guardado en CloudStorage");
            resolve(true);
          }
        });
      } else {
        this.saveToLocalStorage(serialized);
        resolve(false);
      }
    });
  }
  async loadState() {
    return new Promise((resolve) => {
      if (this.isTelegramAvailable && this.cloudStorage) {
        this.cloudStorage.getItem(this.storageKey, (error, value) => {
          if (error || !value) {
            console.warn("[Persistence] No se encontr\xF3 estado en CloudStorage");
            resolve(this.loadFromLocalStorage());
          } else {
            try {
              resolve(JSON.parse(value));
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
  saveToLocalStorage(serialized) {
    try {
      localStorage.setItem(this.storageKey, serialized);
      console.log("[Persistence] Estado guardado en localStorage");
    } catch (error) {
      console.error("[Persistence] Error guardando en localStorage:", error);
    }
  }
  loadFromLocalStorage() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        console.log("[Persistence] Estado cargado desde localStorage");
        return JSON.parse(stored);
      }
      return null;
    } catch (error) {
      console.error("[Persistence] Error cargando desde localStorage:", error);
      return null;
    }
  }
  async clearState() {
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
  async hasSavedState() {
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
      available: this.isTelegramAvailable || typeof localStorage !== "undefined"
    };
  }
};
var globalPersistenceService = null;
function getPersistenceService() {
  if (!globalPersistenceService) {
    globalPersistenceService = new PersistenceService();
  }
  return globalPersistenceService;
}
async function savePlayerProgress(playerState, additionalData) {
  const persistence = getPersistenceService();
  const existingState = await persistence.loadState();
  const mergedState = {
    ...existingState || createInitialExtendedState(playerState),
    ...playerState,
    ...additionalData
  };
  return persistence.saveState(mergedState);
}
async function loadPlayerProgress() {
  const persistence = getPersistenceService();
  return persistence.loadState();
}

// src/types/ui-types.ts
var SPIRITUAL_THEMES = {
  DEFAULT: {
    primaryColor: "#6366f1",
    secondaryColor: "#8b5cf6",
    backgroundColor: "#0f172a",
    textColor: "#f8fafc",
    accentColor: "#fbbf24"
  },
  LIGHT_REVEALED: {
    primaryColor: "#fbbf24",
    secondaryColor: "#f59e0b",
    backgroundColor: "#1e293b",
    textColor: "#fef3c7",
    accentColor: "#ffffff"
  },
  DARK_REJECTED: {
    primaryColor: "#7c3aed",
    secondaryColor: "#5b21b6",
    backgroundColor: "#020617",
    textColor: "#e2e8f0",
    accentColor: "#dc2626"
  }
};
function getThemeForPlayer(nameAccepted, isRevealed) {
  if (!isRevealed || nameAccepted === null) {
    return SPIRITUAL_THEMES.DEFAULT;
  }
  if (nameAccepted) {
    return SPIRITUAL_THEMES.LIGHT_REVEALED;
  } else {
    return SPIRITUAL_THEMES.DARK_REJECTED;
  }
}

// src/core/kingdoms-config.ts
var KINGDOMS_CONFIG = {
  ORGULLO: {
    id: "ORGULLO",
    name: "Reino del Orgullo",
    description: "La fortaleza del ego donde la soberan\xEDa ciega los ojos",
    stages: [
      {
        id: 1,
        name: "El Despertar",
        description: "Primeros pasos hacia la humildad",
        kingdom: "ORGULLO",
        difficulty: "EASY",
        status: "AVAILABLE",
        position: { x: 50, y: 90 },
        rewards: { feBonus: 5 }
      },
      {
        id: 2,
        name: "Espejo Roto",
        description: "Confronta tu propio reflejo",
        kingdom: "ORGULLO",
        difficulty: "MEDIUM",
        status: "LOCKED",
        position: { x: 30, y: 75 },
        rewards: { feBonus: 10, scroll: "humildad" }
      },
      {
        id: 3,
        name: "Ca\xEDda del Soberbio",
        description: "Batalla contra el pr\xEDncipe del orgullo",
        kingdom: "ORGULLO",
        difficulty: "BOSS",
        status: "LOCKED",
        position: { x: 50, y: 50 },
        rewards: { feBonus: 25, armorPiece: "humildad" }
      }
    ]
  },
  AVARICIA: {
    id: "AVARICIA",
    name: "Reino de la Avaricia",
    description: "Las minas doradas donde el coraz\xF3n se esclaviza",
    stages: [
      {
        id: 4,
        name: "Entrada a las Minas",
        description: "El brillo cegador del oro",
        kingdom: "AVARICIA",
        difficulty: "EASY",
        status: "LOCKED",
        position: { x: 70, y: 90 },
        rewards: { feBonus: 5 }
      },
      {
        id: 5,
        name: "El Mercader",
        description: "Decide qu\xE9 vale realmente la pena",
        kingdom: "AVARICIA",
        difficulty: "MEDIUM",
        status: "LOCKED",
        position: { x: 80, y: 70 },
        rewards: { feBonus: 10 }
      },
      {
        id: 6,
        name: "Tesoros del Cielo",
        description: "Batalla contra el guardi\xE1n de la codicia",
        kingdom: "AVARICIA",
        difficulty: "BOSS",
        status: "LOCKED",
        position: { x: 70, y: 50 },
        rewards: { feBonus: 25, scroll: "generosidad" }
      }
    ]
  },
  LUJuria: {
    id: "LUJURIA",
    name: "Reino de la Lujuria",
    description: "Los jardines del deseo que marchitan el alma",
    stages: [
      {
        id: 7,
        name: "Sendero de Rosas",
        description: "Belleza que enga\xF1a",
        kingdom: "LUJURIA",
        difficulty: "EASY",
        status: "LOCKED",
        position: { x: 20, y: 85 },
        rewards: { feBonus: 5 }
      },
      {
        id: 8,
        name: "Fuente Cristalina",
        description: "Agua que no sacia la sed",
        kingdom: "LUJURIA",
        difficulty: "MEDIUM",
        status: "LOCKED",
        position: { x: 15, y: 65 },
        rewards: { feBonus: 10 }
      },
      {
        id: 9,
        name: "Pureza Restaurada",
        description: "Victoria sobre la carne",
        kingdom: "LUJURIA",
        difficulty: "BOSS",
        status: "LOCKED",
        position: { x: 20, y: 45 },
        rewards: { feBonus: 25, armorPiece: "pureza" }
      }
    ]
  },
  IRA: {
    id: "IRA",
    name: "Reino de la Ira",
    description: "El volc\xE1n donde hierve la furia descontrolada",
    stages: [
      {
        id: 10,
        name: "Cenizas Calientes",
        description: "Primeras chispas de enojo",
        kingdom: "IRA",
        difficulty: "EASY",
        status: "LOCKED",
        position: { x: 85, y: 80 },
        rewards: { feBonus: 5 }
      },
      {
        id: 11,
        name: "R\xEDo de Fuego",
        description: "La ira consume todo a su paso",
        kingdom: "IRA",
        difficulty: "MEDIUM",
        status: "LOCKED",
        position: { x: 90, y: 60 },
        rewards: { feBonus: 10 }
      },
      {
        id: 12,
        name: "Mansedumbre Triunfante",
        description: "Domar la bestia interior",
        kingdom: "IRA",
        difficulty: "BOSS",
        status: "LOCKED",
        position: { x: 85, y: 40 },
        rewards: { feBonus: 25, scroll: "mansedumbre" }
      }
    ]
  },
  GULA: {
    id: "GULA",
    name: "Reino de la Gula",
    description: "El banquete eterno que nunca sacia",
    stages: [
      {
        id: 13,
        name: "Mesas Abundantes",
        description: "El exceso disfrazado de bendici\xF3n",
        kingdom: "GULA",
        difficulty: "EASY",
        status: "LOCKED",
        position: { x: 10, y: 75 },
        rewards: { feBonus: 5 }
      },
      {
        id: 14,
        name: "Ayuno Sagrado",
        description: 'Aprender a decir "basta"',
        kingdom: "GULA",
        difficulty: "MEDIUM",
        status: "LOCKED",
        position: { x: 5, y: 55 },
        rewards: { feBonus: 10 }
      },
      {
        id: 15,
        name: "Pan del Cielo",
        description: "El verdadero alimento del alma",
        kingdom: "GULA",
        difficulty: "BOSS",
        status: "LOCKED",
        position: { x: 10, y: 35 },
        rewards: { feBonus: 25, armorPiece: "templanza" }
      }
    ]
  },
  ENVIDIA: {
    id: "ENVIDIA",
    name: "Reino de la Envidia",
    description: "Los espejos oscuros que distorsionan la realidad",
    stages: [
      {
        id: 16,
        name: "Reflejo Ajeno",
        description: "Compararse destruye el gozo",
        kingdom: "ENVIDIA",
        difficulty: "EASY",
        status: "LOCKED",
        position: { x: 60, y: 70 },
        rewards: { feBonus: 5 }
      },
      {
        id: 17,
        name: "Celebraci\xF3n del Otro",
        description: "Goza cuando otros triunfan",
        kingdom: "ENVIDIA",
        difficulty: "MEDIUM",
        status: "LOCKED",
        position: { x: 55, y: 50 },
        rewards: { feBonus: 10 }
      },
      {
        id: 18,
        name: "Contentamiento",
        description: "Tu prop\xF3sito es \xFAnico",
        kingdom: "ENVIDIA",
        difficulty: "BOSS",
        status: "LOCKED",
        position: { x: 60, y: 30 },
        rewards: { feBonus: 25, scroll: "contentamiento" }
      }
    ]
  },
  PEREZA: {
    id: "PEREZA",
    name: "Reino de la Pereza",
    description: "Las arenas movedizas de la inacci\xF3n",
    stages: [
      {
        id: 19,
        name: "Sue\xF1o Pesado",
        description: "El llamado al descanso excesivo",
        kingdom: "PEREZA",
        difficulty: "EASY",
        status: "LOCKED",
        position: { x: 40, y: 60 },
        rewards: { feBonus: 5 }
      },
      {
        id: 20,
        name: "Despertar del Guerrero",
        description: "Lev\xE1ntate y toma tu espada",
        kingdom: "PEREZA",
        difficulty: "MEDIUM",
        status: "LOCKED",
        position: { x: 35, y: 40 },
        rewards: { feBonus: 10 }
      },
      {
        id: 21,
        name: "Corona del Vencedor",
        description: "Batalla final contra la negligencia",
        kingdom: "PEREZA",
        difficulty: "BOSS",
        status: "LOCKED",
        position: { x: 40, y: 20 },
        rewards: { feBonus: 30, armorPiece: "diligencia" }
      }
    ]
  }
};
function getAllStages() {
  const allStages = [];
  for (const kingdom of Object.values(KINGDOMS_CONFIG)) {
    allStages.push(...kingdom.stages);
  }
  return allStages.sort((a, b) => a.id - b.id);
}
function getStageById(stageId) {
  for (const kingdom of Object.values(KINGDOMS_CONFIG)) {
    const stage = kingdom.stages.find((s) => s.id === stageId);
    if (stage) return stage;
  }
  return null;
}
function calculateStageStatus(currentStage, completedStages) {
  const stageMap = /* @__PURE__ */ new Map();
  const allStages = getAllStages();
  for (const stage of allStages) {
    let status = "LOCKED";
    if (completedStages.includes(stage.id)) {
      status = "COMPLETED";
    } else if (stage.id === currentStage) {
      status = "CURRENT";
    } else if (stage.id === currentStage + 1 || currentStage > 0 && stage.id <= currentStage) {
      status = "AVAILABLE";
    }
    if (stage.id === 1 && completedStages.length === 0 && currentStage === 0) {
      status = "AVAILABLE";
    }
    stageMap.set(stage.id, { ...stage, status });
  }
  return stageMap;
}

// src/services/game-service.ts
var GameService = class {
  constructor() {
    this.playerService = getPlayerService();
    this.persistenceService = getPersistenceService();
    this.state = {
      currentScreen: "MAP",
      playerProfile: null,
      stages: /* @__PURE__ */ new Map(),
      theme: {
        primaryColor: "#6366f1",
        secondaryColor: "#8b5cf6",
        backgroundColor: "#0f172a",
        textColor: "#f8fafc",
        accentColor: "#fbbf24"
      },
      isLoading: true,
      error: null,
      telegramId: void 0
    };
  }
  /**
   * Inicializa el juego cargando o creando el estado del jugador
   */
  async initialize(telegramId) {
    this.state.isLoading = true;
    this.state.telegramId = telegramId;
    try {
      const savedProgress = await loadPlayerProgress();
      if (savedProgress) {
        this.playerService.importState(JSON.stringify(savedProgress));
        this.updateStateFromPlayer(savedProgress);
      } else {
        const playerName = telegramId ? `Jugador_${telegramId.slice(-4)}` : "Jugador";
        const newState = this.playerService.createNewPlayer(playerName, telegramId);
        const extendedState = createInitialExtendedState(newState, telegramId);
        await this.persistenceService.saveState(extendedState);
        this.updateStateFromPlayer(extendedState);
      }
      this.state.isLoading = false;
      return this.state;
    } catch (error) {
      console.error("[GameService] Error inicializando:", error);
      this.state.error = "Error cargando progreso. Int\xE9ntalo de nuevo.";
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
      archetypeTitle: playerState.trueName ? playerService.getState()?.archetypeState.scores[playerState.trueName]?.score || 0 > 0 ? playerState.trueName : null : null,
      acceptedName: playerState.acceptedName,
      currentAct: playerState.currentAct,
      kingdomsLiberated: playerState.kingdomsLiberated,
      feLevel: playerState.feLevel,
      currentStage: playerState.currentStage,
      completedStages: playerState.completedStages,
      stats: playerState.stats
    };
    const stageMap = calculateStageStatus(
      playerState.currentStage,
      playerState.completedStages
    );
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
      const result = this.playerService.recordDecision(
        decisionType,
        description,
        kingdom,
        context
      );
      const currentState = await loadPlayerProgress();
      if (currentState) {
        currentState.stats.decisionsMade += 1;
        await this.persistenceService.saveState(currentState);
        this.updateStateFromPlayer(currentState);
      }
      return this.state;
    } catch (error) {
      console.error("[GameService] Error registrando decisi\xF3n:", error);
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
        throw new Error("No hay estado del jugador");
      }
      if (battleWon) {
        if (!currentState.completedStages.includes(stageId)) {
          currentState.completedStages.push(stageId);
        }
        currentState.stats.battlesWon += 1;
        if (stageId === currentState.currentStage) {
          currentState.currentStage = stageId + 1;
        }
        const stage = getStageById(stageId);
        if (stage?.rewards?.feBonus) {
          currentState.feLevel = Math.min(100, currentState.feLevel + stage.rewards.feBonus);
        }
      } else {
        currentState.stats.battlesLost += 1;
      }
      await this.persistenceService.saveState(currentState);
      this.updateStateFromPlayer(currentState);
      return this.state;
    } catch (error) {
      console.error("[GameService] Error completando etapa:", error);
      throw error;
    }
  }
  /**
   * Revela el nombre verdadero del jugador
   */
  async revealTrueName() {
    const result = this.playerService.revealTrueName();
    const currentState = await loadPlayerProgress();
    if (currentState) {
      currentState.nameAccepted = null;
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
};
var globalGameService = null;
function getGameService() {
  if (!globalGameService) {
    globalGameService = new GameService();
  }
  return globalGameService;
}
async function initializeGame(telegramId) {
  globalGameService = new GameService();
  return globalGameService.initialize(telegramId);
}

// src/core/verses-config.ts
var VERSES_CONFIG = {
  // ===== VERSÍCULOS DE PROTECCIÓN (Armadura de Efesios) =====
  "EFESIOS_6_11": {
    id: "EFESIOS_6_11",
    name: "Armadura Completa",
    category: "PROTECCION",
    reference: {
      book: "Efesios",
      chapter: 6,
      verse: 11,
      text: "Vest\xEDos toda la armadura de Dios, para que pod\xE1is estar firmes contra las asechanzas del diablo."
    },
    effect: {
      baseDamage: 0,
      feScaling: 0,
      revealWeakness: false,
      divineIntervention: false,
      bonusDamageVs: []
    },
    unlockRequirement: { minStage: 1 },
    decisionTypeReward: "FAITH",
    cooldownTurns: 3
  },
  "EFESIOS_6_14": {
    id: "EFESIOS_6_14",
    name: "Cintur\xF3n de la Verdad",
    category: "PROTECCION",
    reference: {
      book: "Efesios",
      chapter: 6,
      verse: 14,
      text: "Estad, pues, firmes, ce\xF1idos vuestros lomos con la verdad."
    },
    effect: {
      baseDamage: 5,
      feScaling: 0.3,
      revealWeakness: false,
      divineIntervention: false,
      bonusDamageVs: ["MENTIRA_ENGA\xD1OSA"]
    },
    unlockRequirement: { minStage: 2 },
    decisionTypeReward: "WISDOM"
  },
  "EFESIOS_6_15": {
    id: "EFESIOS_6_15",
    name: "Calzado del Evangelio",
    category: "PROTECCION",
    reference: {
      book: "Efesios",
      chapter: 6,
      verse: 15,
      text: "Y calzados los pies con el apresto del evangelio de la paz."
    },
    effect: {
      baseDamage: 8,
      feScaling: 0.4,
      revealWeakness: false,
      divineIntervention: false,
      bonusDamageVs: ["TEMOR_COBARDE", "PEREZA_NEGLIGENTE"]
    },
    unlockRequirement: { minStage: 3 },
    decisionTypeReward: "COURAGE"
  },
  "EFESIOS_6_16": {
    id: "EFESIOS_6_16",
    name: "Escudo de la Fe",
    category: "PROTECCION",
    reference: {
      book: "Efesios",
      chapter: 6,
      verse: 16,
      text: "Sobre todo, tomad el escudo de la fe, con que pod\xE1is apagar todos los dardos de fuego del maligno."
    },
    effect: {
      baseDamage: 10,
      feScaling: 0.5,
      revealWeakness: false,
      divineIntervention: false,
      bonusDamageVs: ["DESPERACION_OSCURA", "TEMOR_COBARDE"]
    },
    unlockRequirement: { minStage: 5 },
    decisionTypeReward: "FAITH"
  },
  "EFESIOS_6_17": {
    id: "EFESIOS_6_17",
    name: "Yelmo de la Salvaci\xF3n",
    category: "PROTECCION",
    reference: {
      book: "Efesios",
      chapter: 6,
      verse: 17,
      text: "Y tomad el yelmo de la salvaci\xF3n, y la espada del Esp\xEDritu, que es la palabra de Dios."
    },
    effect: {
      baseDamage: 15,
      feScaling: 0.6,
      revealWeakness: true,
      divineIntervention: false,
      bonusDamageVs: ["MENTIRA_ENGA\xD1OSA", "DESPERACION_OSCURA"]
    },
    unlockRequirement: { minStage: 8 },
    decisionTypeReward: "TRANSFORMATION"
  },
  // ===== VERSÍCULOS DE ATAQUE =====
  "SALMO_144_1": {
    id: "SALMO_144_1",
    name: "Dios mi Roca",
    category: "ATAQUE",
    reference: {
      book: "Salmos",
      chapter: 144,
      verse: 1,
      text: "Bendito Jehov\xE1, mi roca, que adiestra mis manos para la batalla, y mis dedos para la guerra."
    },
    effect: {
      baseDamage: 20,
      feScaling: 0.7,
      revealWeakness: false,
      divineIntervention: false,
      bonusDamageVs: ["ORGULLO_SOBERBIO", "IRA_FURIOSA"]
    },
    unlockRequirement: { minStage: 4 },
    decisionTypeReward: "COURAGE"
  },
  "SALMO_23_4": {
    id: "SALMO_23_4",
    name: "Sin Temor al Mal",
    category: "ATAQUE",
    reference: {
      book: "Salmos",
      chapter: 23,
      verse: 4,
      text: "Aunque ande en valle de sombra de muerte, no temer\xE9 mal alguno, porque t\xFA estar\xE1s conmigo."
    },
    effect: {
      baseDamage: 25,
      feScaling: 0.8,
      revealWeakness: false,
      divineIntervention: false,
      bonusDamageVs: ["TEMOR_COBARDE", "DESPERACION_OSCURA"]
    },
    unlockRequirement: { minStage: 6 },
    decisionTypeReward: "FAITH"
  },
  "EXODO_14_14": {
    id: "EXODO_14_14",
    name: "Jehov\xE1 Pelear\xE1",
    category: "ATAQUE",
    reference: {
      book: "\xC9xodo",
      chapter: 14,
      verse: 14,
      text: "Jehov\xE1 pelear\xE1 por vosotros, y vosotros estar\xE9is tranquilos."
    },
    effect: {
      baseDamage: 30,
      feScaling: 0.9,
      revealWeakness: false,
      divineIntervention: false,
      bonusDamageVs: ["AVARICIA_CODICIOSA", "ESCLAVITUD"]
    },
    unlockRequirement: { minStage: 10 },
    decisionTypeReward: "OBEDIENCE"
  },
  "ISAAS_54_17": {
    id: "ISAAS_54_17",
    name: "Ninguna Arma Prosperar\xE1",
    category: "ATAQUE",
    reference: {
      book: "Isa\xEDas",
      chapter: 54,
      verse: 17,
      text: "Ninguna arma forjada contra ti prosperar\xE1, y condenar\xE1s toda lengua que se levante contra ti en juicio."
    },
    effect: {
      baseDamage: 35,
      feScaling: 1,
      revealWeakness: false,
      divineIntervention: false,
      bonusDamageVs: ["MENTIRA_ENGA\xD1OSA", "ENVIDIA_MALIGNA"]
    },
    unlockRequirement: { minStage: 12 },
    decisionTypeReward: "ENDURANCE"
  },
  "APOCALIPSIS_12_11": {
    id: "APOCALIPSIS_12_11",
    name: "Vencieron por la Sangre",
    category: "ATAQUE",
    reference: {
      book: "Apocalipsis",
      chapter: 12,
      verse: 11,
      text: "Y ellos le han vencido por medio de la sangre del Cordero y de la palabra que ellos testimoniaron."
    },
    effect: {
      baseDamage: 40,
      feScaling: 1.2,
      revealWeakness: false,
      divineIntervention: false,
      bonusDamageVs: ["DESPERACION_OSCURA", "LUJURIA_IMPURA"]
    },
    unlockRequirement: { minStage: 15 },
    decisionTypeReward: "TRANSFORMATION"
  },
  // ===== VERSÍCULOS DE SANACIÓN =====
  "SALMO_103_3": {
    id: "SALMO_103_3",
    name: "Sana Todas las Enfermedades",
    category: "SANACION",
    reference: {
      book: "Salmos",
      chapter: 103,
      verse: 3,
      text: "El es quien perdona todas tus iniquidades, el que sana todas tus dolencias."
    },
    effect: {
      baseDamage: 0,
      feScaling: 0,
      healAmount: 30,
      revealWeakness: false,
      divineIntervention: false,
      bonusDamageVs: []
    },
    unlockRequirement: { minStage: 3 },
    decisionTypeReward: "COMPASSION",
    cooldownTurns: 4
  },
  "JEREMIAS_30_17": {
    id: "JEREMIAS_30_17",
    name: "Subir\xE9 Sanidad",
    category: "SANACION",
    reference: {
      book: "Jerem\xEDas",
      chapter: 30,
      verse: 17,
      text: "Mas yo har\xE9 venir sanidad para ti, y sanar\xE9 tus heridas, dice Jehov\xE1."
    },
    effect: {
      baseDamage: 0,
      feScaling: 0,
      healAmount: 50,
      revealWeakness: false,
      divineIntervention: false,
      bonusDamageVs: []
    },
    unlockRequirement: { minStage: 9 },
    decisionTypeReward: "FAITH",
    cooldownTurns: 5
  },
  "PEDRO_2_24": {
    id: "PEDRO_2_24",
    name: "Por Sus Llagas Fuimos Curados",
    category: "SANACION",
    reference: {
      book: "1 Pedro",
      chapter: 2,
      verse: 24,
      text: "Quien llev\xF3 \xE9l mismo nuestros pecados en su cuerpo sobre el madero, para que nosotros, estando muertos a los pecados, vivamos a la justicia; y por cuya herida fuisteis sanados."
    },
    effect: {
      baseDamage: 0,
      feScaling: 0,
      healAmount: 80,
      revealWeakness: false,
      divineIntervention: false,
      bonusDamageVs: []
    },
    unlockRequirement: { minStage: 18 },
    decisionTypeReward: "SACRIFICE",
    cooldownTurns: 6
  },
  // ===== VERSÍCULOS DE SABIDURÍA (Revelan Debilidades) =====
  "PROVERBIOS_3_5": {
    id: "PROVERBIOS_3_5",
    name: "F\xEDate de Jehov\xE1",
    category: "SABIDURIA",
    reference: {
      book: "Proverbios",
      chapter: 3,
      verse: 5,
      text: "F\xEDate de Jehov\xE1 de todo tu coraz\xF3n, y no te apoyes en tu propia prudencia."
    },
    effect: {
      baseDamage: 5,
      feScaling: 0.2,
      revealWeakness: true,
      divineIntervention: false,
      bonusDamageVs: ["ORGULLO_SOBERBIO"]
    },
    unlockRequirement: { minStage: 2 },
    decisionTypeReward: "WISDOM"
  },
  "SANTIAGO_1_5": {
    id: "SANTIAGO_1_5",
    name: "Pedid Sabidur\xEDa",
    category: "SABIDURIA",
    reference: {
      book: "Santiago",
      chapter: 1,
      verse: 5,
      text: "Y si alguno de vosotros tiene falta de sabidur\xEDa, p\xEDdala a Dios, el cual da a todos abundantemente y sin reproche, y le ser\xE1 dada."
    },
    effect: {
      baseDamage: 10,
      feScaling: 0.4,
      revealWeakness: true,
      divineIntervention: false,
      bonusDamageVs: ["MENTIRA_ENGA\xD1OSA", "ENVIDIA_MALIGNA"]
    },
    unlockRequirement: { minStage: 7 },
    decisionTypeReward: "WISDOM"
  },
  "COLOSENSES_2_3": {
    id: "COLOSENSES_2_3",
    name: "Tesoro de Sabidur\xEDa",
    category: "SABIDURIA",
    reference: {
      book: "Colosenses",
      chapter: 2,
      verse: 3,
      text: "En quien est\xE1n escondidos todos los tesoros de la sabidur\xEDa y del conocimiento."
    },
    effect: {
      baseDamage: 15,
      feScaling: 0.5,
      revealWeakness: true,
      divineIntervention: false,
      bonusDamageVs: ["AVARICIA_CODICIOSA", "GULA_DESVORADA"]
    },
    unlockRequirement: { minStage: 14 },
    decisionTypeReward: "WISDOM"
  },
  // ===== VERSÍCULOS DE FE PODEROSA (Intervención Divina) =====
  "MATEO_17_20": {
    id: "MATEO_17_20",
    name: "Fe como Grano de Mostaza",
    category: "FE_PODEROSA",
    reference: {
      book: "Mateo",
      chapter: 17,
      verse: 20,
      text: "Porque de cierto os digo, que si tuviereis fe como un grano de mostaza, dir\xE9is a este monte: P\xE1sate de aqu\xED all\xE1, y se pasar\xE1; y nada os ser\xE1 imposible."
    },
    effect: {
      baseDamage: 50,
      feScaling: 1.5,
      revealWeakness: false,
      divineIntervention: true,
      bonusDamageVs: ["DESPERACION_OSCURA", "TEMOR_COBARDE"]
    },
    unlockRequirement: { minStage: 10, minFeLevel: 60 },
    decisionTypeReward: "FAITH",
    cooldownTurns: 7
  },
  "MARCO_9_23": {
    id: "MARCO_9_23",
    name: "Todo es Posible al que Cree",
    category: "FE_PODEROSA",
    reference: {
      book: "Marcos",
      chapter: 9,
      verse: 23,
      text: "Jes\xFAs le dijo: Si puedes creer, al que cree todo le es posible."
    },
    effect: {
      baseDamage: 60,
      feScaling: 1.8,
      revealWeakness: false,
      divineIntervention: true,
      bonusDamageVs: ["ORGULLO_SOBERBIO", "INCRELIDAD"]
    },
    unlockRequirement: { minStage: 16, minFeLevel: 75 },
    decisionTypeReward: "FAITH",
    cooldownTurns: 8
  },
  "FILIPENSES_4_13": {
    id: "FILIPENSES_4_13",
    name: "Todo lo Puedo en Cristo",
    category: "FE_PODEROSA",
    reference: {
      book: "Filipenses",
      chapter: 4,
      verse: 13,
      text: "Todo lo puedo en Cristo que me fortalece."
    },
    effect: {
      baseDamage: 75,
      feScaling: 2,
      revealWeakness: false,
      divineIntervention: true,
      bonusDamageVs: ["PEREZA_NEGLIGENTE", "DEBILIDAD"]
    },
    unlockRequirement: { minStage: 20, minFeLevel: 85 },
    decisionTypeReward: "TRANSFORMATION",
    cooldownTurns: 10
  },
  // ===== VERSÍCULOS DE LIBERACIÓN =====
  "SALMO_34_17": {
    id: "SALMO_34_17",
    name: "Libra de Angustias",
    category: "LIBERACION",
    reference: {
      book: "Salmos",
      chapter: 34,
      verse: 17,
      text: "Claman los justos, y Jehov\xE1 oye, y los libra de todas sus angustias."
    },
    effect: {
      baseDamage: 25,
      feScaling: 0.6,
      revealWeakness: false,
      divineIntervention: false,
      bonusDamageVs: ["DESPERACION_OSCURA", "TEMOR_COBARDE", "ENVIDIA_MALIGNA"]
    },
    unlockRequirement: { minStage: 5 },
    decisionTypeReward: "FAITH"
  },
  "GALATAS_5_1": {
    id: "GALATAS_5_1",
    name: "Libertad en Cristo",
    category: "LIBERACION",
    reference: {
      book: "G\xE1latas",
      chapter: 5,
      verse: 1,
      text: "Estad, pues, firmes en la libertad con que Cristo nos hizo libres, y no est\xE9is otra vez sujetos al yugo de esclavitud."
    },
    effect: {
      baseDamage: 30,
      feScaling: 0.8,
      revealWeakness: false,
      divineIntervention: false,
      bonusDamageVs: ["AVARICIA_CODICIOSA", "LUJURIA_IMPURA", "GULA_DESVORADA"]
    },
    unlockRequirement: { minStage: 11 },
    decisionTypeReward: "TRANSFORMATION"
  },
  "JUAN_8_36": {
    id: "JUAN_8_36",
    name: "El Hijo os Har\xE1 Libres",
    category: "LIBERACION",
    reference: {
      book: "Juan",
      chapter: 8,
      verse: 36,
      text: "As\xED que, si el Hijo os libertare, ser\xE9is verdaderamente libres."
    },
    effect: {
      baseDamage: 45,
      feScaling: 1,
      revealWeakness: false,
      divineIntervention: false,
      bonusDamageVs: ["MENTIRA_ENGA\xD1OSA", "ESCLAVITUD", "PECADO"]
    },
    unlockRequirement: { minStage: 17 },
    decisionTypeReward: "TRANSFORMATION"
  },
  // ===== VERSÍCULOS DE VALOR =====
  "JOSUE_1_9": {
    id: "JOSUE_1_9",
    name: "Esforzado y Valiente",
    category: "VALOR",
    reference: {
      book: "Josu\xE9",
      chapter: 1,
      verse: 9,
      text: "Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehov\xE1 tu Dios estar\xE1 contigo en dondequiera que vayas."
    },
    effect: {
      baseDamage: 20,
      feScaling: 0.5,
      revealWeakness: false,
      divineIntervention: false,
      bonusDamageVs: ["TEMOR_COBARDE", "PEREZA_NEGLIGENTE"]
    },
    unlockRequirement: { minStage: 1 },
    decisionTypeReward: "COURAGE"
  },
  "SALMO_27_1": {
    id: "SALMO_27_1",
    name: "Jehov\xE1 es mi Luz",
    category: "VALOR",
    reference: {
      book: "Salmos",
      chapter: 27,
      verse: 1,
      text: "Jehov\xE1 es mi luz y mi salvaci\xF3n; \xBFde qui\xE9n temer\xE9? Jehov\xE1 es la fortaleza de mi vida; \xBFde qui\xE9n he de atemorizarme?"
    },
    effect: {
      baseDamage: 28,
      feScaling: 0.7,
      revealWeakness: false,
      divineIntervention: false,
      bonusDamageVs: ["DESPERACION_OSCURA", "TEMOR_COBARDE", "IRA_FURIOSA"]
    },
    unlockRequirement: { minStage: 8 },
    decisionTypeReward: "COURAGE"
  },
  "TIMOTEO_1_7": {
    id: "TIMOTEO_1_7",
    name: "Esp\xEDritu de Poder",
    category: "VALOR",
    reference: {
      book: "2 Timoteo",
      chapter: 1,
      verse: 7,
      text: "Porque no nos ha dado Dios esp\xEDritu de cobard\xEDa, sino de poder, de amor y de dominio propio."
    },
    effect: {
      baseDamage: 35,
      feScaling: 0.9,
      revealWeakness: false,
      divineIntervention: false,
      bonusDamageVs: ["TEMOR_COBARDE", "PEREZA_NEGLIGENTE", "LUJURIA_IMPURA"]
    },
    unlockRequirement: { minStage: 13 },
    decisionTypeReward: "COURAGE"
  }
};
var ENEMY_BESTIARY = {
  "ORGULLO_SOBERBIO": {
    type: "ORGULLO_SOBERBIO",
    name: "Soberbio",
    description: "El esp\xEDritu del orgullo que ciega los ojos del coraz\xF3n",
    baseHp: 100,
    weaknesses: ["SABIDURIA", "PROTECCION"],
    resistances: ["ATAQUE"],
    specialAbility: "Cegamiento: Reduce efectividad de vers\xEDculos de ataque"
  },
  "AVARICIA_CODICIOSA": {
    type: "AVARICIA_CODICIOSA",
    name: "Codicioso",
    description: "El guardi\xE1n de las minas doradas que esclaviza corazones",
    baseHp: 120,
    weaknesses: ["LIBERACION", "SABIDURIA"],
    resistances: ["SANACION"],
    specialAbility: "Robo de Man\xE1: Drena recursos del jugador"
  },
  "LUJURIA_IMPURA": {
    type: "LUJURIA_IMPURA",
    name: "Impuro",
    description: "La tentaci\xF3n que marchita el alma con deseos carnales",
    baseHp: 90,
    weaknesses: ["PROTECCION", "LIBERACION"],
    resistances: ["VALOR"],
    specialAbility: "Distracci\xF3n: Puede fallar el siguiente ataque"
  },
  "IRA_FURIOSA": {
    type: "IRA_FURIOSA",
    name: "Furia Descontrolada",
    description: "El volc\xE1n de ira que consume todo a su paso",
    baseHp: 110,
    weaknesses: ["SABIDURIA", "SANACION"],
    resistances: ["PROTECCION"],
    specialAbility: "Contraataque Furioso: Da\xF1a al jugador tras recibir golpe"
  },
  "GULA_DESVORADA": {
    type: "GULA_DESVORADA",
    name: "Desvorador",
    description: "El banquete eterno que nunca sacia el hambre espiritual",
    baseHp: 130,
    weaknesses: ["LIBERACION", "SABIDURIA"],
    resistances: ["SANACION"],
    specialAbility: "Consumir: Roba curaci\xF3n del jugador"
  },
  "ENVIDIA_MALIGNA": {
    type: "ENVIDIA_MALIGNA",
    name: "Envidioso",
    description: "Los espejos oscuros que distorsionan la realidad",
    baseHp: 95,
    weaknesses: ["SABIDURIA", "LIBERACION"],
    resistances: ["ATAQUE"],
    specialAbility: "Imitaci\xF3n: Copia el \xFAltimo vers\xEDculo usado"
  },
  "PEREZA_NEGLIGENTE": {
    type: "PEREZA_NEGLIGENTE",
    name: "Negligente",
    description: "Las arenas movedizas de la inacci\xF3n espiritual",
    baseHp: 100,
    weaknesses: ["VALOR", "FE_PODEROSA"],
    resistances: ["SABIDURIA"],
    specialAbility: "Letargo: Reduce velocidad de acci\xF3n del jugador"
  },
  "DESPERACION_OSCURA": {
    type: "DESPERACION_OSCURA",
    name: "Desesperaci\xF3n",
    description: "La oscuridad que susurra que no hay esperanza",
    baseHp: 80,
    weaknesses: ["FE_PODEROSA", "VALOR", "SANACION"],
    resistances: ["SABIDURIA"],
    specialAbility: "Susurro Oscuro: Reduce FE del jugador"
  },
  "MENTIRA_ENGA\xD1OSA": {
    type: "MENTIRA_ENGA\xD1OSA",
    name: "Enga\xF1ador",
    description: "El padre de mentira que distorsiona la verdad",
    baseHp: 85,
    weaknesses: ["PROTECCION", "SABIDURIA"],
    resistances: ["LIBERACION"],
    specialAbility: "Ilusi\xF3n: Puede esquivar ataques"
  },
  "TEMOR_COBARDE": {
    type: "TEMOR_COBARDE",
    name: "Temor Paralizante",
    description: "El miedo que paraliza y impide avanzar",
    baseHp: 70,
    weaknesses: ["FE_PODEROSA", "VALOR", "PROTECCION"],
    resistances: ["SABIDURIA"],
    specialAbility: "Par\xE1lisis: Puede impedir acci\xF3n del jugador"
  },
  "ESCLAVITUD": {
    type: "ESCLAVITUD",
    name: "Esclavitud Espiritual",
    description: "Cadenas invisibles que atan el alma al pecado",
    baseHp: 140,
    weaknesses: ["LIBERACION", "FE_PODEROSA"],
    resistances: ["ATAQUE"],
    specialAbility: "Ataduras: Reduce efectividad de acciones"
  },
  "INCRELIDAD": {
    type: "INCRELIDAD",
    name: "Incredulidad",
    description: "La duda que debilita la fe y el poder espiritual",
    baseHp: 75,
    weaknesses: ["FE_PODEROSA", "SABIDURIA"],
    resistances: ["PROTECCION"],
    specialAbility: "Duda: Reduce FE del jugador gradualmente"
  },
  "DEBILIDAD": {
    type: "DEBILIDAD",
    name: "Debilidad Carnal",
    description: "La carne es d\xE9bil y vulnerable a la tentaci\xF3n",
    baseHp: 60,
    weaknesses: ["VALOR", "FE_PODEROSA"],
    resistances: ["SANACION"],
    specialAbility: "Flaqueza: Drena energ\xEDa del jugador"
  },
  "PECADO": {
    type: "PECADO",
    name: "Pecado Oculto",
    description: "El pecado escondido que corroe desde dentro",
    baseHp: 150,
    weaknesses: ["LIBERACION", "SABIDURIA", "PROTECCION"],
    resistances: ["ATAQUE"],
    specialAbility: "Corrupci\xF3n: Aplica da\xF1o continuo al jugador"
  }
};
function getAllVerses() {
  return Object.values(VERSES_CONFIG);
}
function getVerseById(verseId) {
  return VERSES_CONFIG[verseId] || null;
}
function getUnlockedVerses(currentStage, feLevel, kingdom) {
  return getAllVerses().filter((verse) => {
    const req = verse.unlockRequirement;
    if (currentStage < req.minStage) return false;
    if (req.minFeLevel && feLevel < req.minFeLevel) return false;
    if (req.kingdom && kingdom && req.kingdom !== kingdom) return false;
    return true;
  });
}
function calculateVerseDamage(verse, enemyType, feLevel) {
  const effect = verse.effect;
  let damage = effect.baseDamage;
  damage += feLevel * effect.feScaling;
  const enemy = ENEMY_BESTIARY[enemyType];
  if (enemy.weaknesses.includes(verse.category)) {
    damage *= 1.5;
  }
  if (enemy.resistances.includes(verse.category)) {
    damage *= 0.7;
  }
  if (effect.bonusDamageVs?.includes(enemyType)) {
    damage *= 1.3;
  }
  return Math.floor(damage);
}
function getVerseEffectiveness(verse, enemyType) {
  const enemy = ENEMY_BESTIARY[enemyType];
  if (enemy.weaknesses.includes(verse.category)) {
    return "SUPER_EFFECTIVE";
  }
  if (enemy.resistances.includes(verse.category)) {
    return "RESISTED";
  }
  if (verse.effect.bonusDamageVs?.includes(enemyType)) {
    return "SUPER_EFFECTIVE";
  }
  return "EFFECTIVE";
}

// src/services/combat-service.ts
function getEnemyForStage(stageId) {
  const stage = getStageById(stageId);
  if (!stage) {
    return { type: "ORGULLO_SOBERBIO", hpMultiplier: 1 };
  }
  const kingdomEnemyMap = {
    "ORGULLO": "ORGULLO_SOBERBIO",
    "AVARICIA": "AVARICIA_CODICIOSA",
    "LUJURIA": "LUJURIA_IMPURA",
    "IRA": "IRA_FURIOSA",
    "GULA": "GULA_DESVORADA",
    "ENVIDIA": "ENVIDIA_MALIGNA",
    "PEREZA": "PEREZA_NEGLIGENTE"
  };
  const kingdom = stage.kingdom;
  const enemyType = kingdomEnemyMap[kingdom] || "ORGULLO_SOBERBIO";
  let hpMultiplier = 1;
  if (stage.difficulty === "MEDIUM") hpMultiplier = 1.3;
  if (stage.difficulty === "BOSS") hpMultiplier = 1.8;
  return { type: enemyType, hpMultiplier };
}
var CombatService = class {
  constructor(playerService) {
    this.currentBattle = null;
    this.playerService = playerService;
  }
  /**
   * Inicia una nueva batalla para una etapa específica
   */
  async startBattle(stageId) {
    const playerState = await loadPlayerProgress();
    if (!playerState) {
      throw new Error("No hay estado del jugador cargado");
    }
    const enemyConfig = getEnemyForStage(stageId);
    const enemyBestiary = ENEMY_BESTIARY[enemyConfig.type];
    const maxEnemyHp = Math.floor(enemyBestiary.baseHp * enemyConfig.hpMultiplier);
    const unlockedVerses = getUnlockedVerses(
      playerState.currentStage,
      playerState.feLevel,
      void 0
      // kingdom se puede pasar si se quiere filtrar
    );
    const basePlayerHp = 100;
    const feBonus = Math.floor(playerState.feLevel * 0.5);
    const armorBonus = playerState.inventory.armorPieces.length * 20;
    const maxPlayerHp = basePlayerHp + feBonus + armorBonus;
    this.currentBattle = {
      isActive: true,
      stageId,
      enemy: {
        type: enemyConfig.type,
        name: enemyBestiary.name,
        currentHp: maxEnemyHp,
        maxHp: maxEnemyHp,
        weaknessRevealed: false
      },
      player: {
        currentHp: maxPlayerHp,
        maxHp: maxPlayerHp,
        feLevel: playerState.feLevel,
        isDefending: false,
        defenseTurnsRemaining: 0
      },
      turn: 1,
      combatLog: [],
      unlockedVerses,
      verseCooldowns: {}
    };
    this.addLogEntry("ENEMY", "Encuentro", `\xA1Un ${enemyBestiary.name} salvaje aparece!`, enemyBestiary.description);
    return this.currentBattle;
  }
  /**
   * Ejecuta una acción del jugador
   */
  async executeAction(actionType, verseId) {
    if (!this.currentBattle || !this.currentBattle.isActive) {
      throw new Error("No hay batalla activa");
    }
    const battle = this.currentBattle;
    let enemyAttacks = true;
    let prayerResult;
    if (battle.player.isDefending && battle.player.defenseTurnsRemaining <= 0) {
      battle.player.isDefending = false;
    }
    switch (actionType) {
      case "ATTACK":
        if (!verseId) {
          throw new Error("Se requiere verseId para atacar");
        }
        this.executeAttack(verseId);
        break;
      case "PRAY":
        prayerResult = this.executePrayer();
        if (prayerResult.type === "DIVINE_INTERVENTION") {
          enemyAttacks = false;
        }
        break;
      case "DEFEND":
        this.executeDefend();
        break;
      case "FLEE":
        return await this.attemptToFlee();
    }
    if (enemyAttacks && battle.enemy.currentHp > 0) {
      this.executeEnemyTurn();
    }
    if (battle.enemy.currentHp <= 0) {
      return await this.handleVictory();
    }
    if (battle.player.currentHp <= 0) {
      return await this.handleDefeat();
    }
    battle.turn++;
    for (const [verseId2, cooldown] of Object.entries(battle.verseCooldowns)) {
      if (cooldown > 0) {
        battle.verseCooldowns[verseId2] = cooldown - 1;
      }
    }
    return {
      battleState: battle,
      prayerResult,
      enemyAttacks
    };
  }
  /**
   * Ejecuta un ataque con versículo
   */
  executeAttack(verseId) {
    const battle = this.currentBattle;
    const verse = getVerseById(verseId);
    if (!verse) {
      this.addLogEntry("PLAYER", "Error", "Vers\xEDculo no encontrado");
      return;
    }
    if (battle.verseCooldowns[verseId] && battle.verseCooldowns[verseId] > 0) {
      this.addLogEntry("PLAYER", "Espera", `${verse.name} a\xFAn est\xE1 en recarga (${battle.verseCooldowns[verseId]} turnos)`);
      return;
    }
    const damage = calculateVerseDamage(verse, battle.enemy.type, battle.player.feLevel);
    const effectiveness = getVerseEffectiveness(verse, battle.enemy.type);
    battle.enemy.currentHp = Math.max(0, battle.enemy.currentHp - damage);
    let effectivenessText = "";
    if (effectiveness === "SUPER_EFFECTIVE") {
      effectivenessText = " \xA1S\xFAper efectivo!";
    } else if (effectiveness === "RESISTED") {
      effectivenessText = " (Resistido)";
    }
    this.addLogEntry(
      "PLAYER",
      "Ataque",
      `Usas "${verse.name}"${effectivenessText}`,
      verse.reference.text,
      verseId,
      damage
    );
    if (verse.effect.revealWeakness && !battle.enemy.weaknessRevealed) {
      battle.enemy.weaknessRevealed = true;
      this.addLogEntry("PLAYER", "Sabidur\xEDa", "\xA1Has revelado la debilidad del enemigo!", "", verseId);
    }
    if (verse.cooldownTurns && verse.cooldownTurns > 0) {
      battle.verseCooldowns[verseId] = verse.cooldownTurns;
    }
    if (verse.decisionTypeReward) {
      this.recordCombatDecision(verse.decisionTypeReward, `Us\xF3 ${verse.name} en combate`);
    }
  }
  /**
   * Ejecuta acción de orar con 3 resultados según FE
   */
  executePrayer() {
    const battle = this.currentBattle;
    const feLevel = battle.player.feLevel;
    let result;
    if (feLevel < 40) {
      const healAmount = 15 + Math.floor(feLevel * 0.3);
      battle.player.currentHp = Math.min(battle.player.maxHp, battle.player.currentHp + healAmount);
      result = {
        type: "HEAL_MINOR",
        description: "Oras en silencio... sientes una peque\xF1a sanidad.",
        effect: { healAmount },
        feThreshold: "LOW"
      };
      this.addLogEntry("PLAYER", "Oraci\xF3n", `Oras y recuperas ${healAmount} HP`, "", void 0, void 0, healAmount);
    } else if (feLevel < 75) {
      const alreadyRevealed = battle.enemy.weaknessRevealed;
      battle.enemy.weaknessRevealed = true;
      result = {
        type: "REVEAL_WEAKNESS",
        description: alreadyRevealed ? "Oras buscando entendimiento... ya conoc\xEDas la debilidad del enemigo." : "Oras y YHWH revela la debilidad de tu enemigo!",
        effect: { weaknessRevealed: true },
        feThreshold: "MEDIUM"
      };
      this.addLogEntry(
        "PLAYER",
        "Oraci\xF3n",
        alreadyRevealed ? "Oras buscando entendimiento..." : "\xA1YHWH revela la debilidad del enemigo!",
        ""
      );
    } else {
      const divineDamage = 50 + Math.floor(feLevel * 1.5);
      battle.enemy.currentHp = Math.max(0, battle.enemy.currentHp - divineDamage);
      result = {
        type: "DIVINE_INTERVENTION",
        description: "\xA1YHWH interviene directamente con poder divino!",
        effect: { damage: divineDamage, divineStrike: true },
        feThreshold: "HIGH"
      };
      this.addLogEntry(
        "PLAYER",
        "Intervenci\xF3n Divina",
        `\xA1El poder de YHWH golpea al enemigo con ${divineDamage} de da\xF1o!`,
        "Porque t\xFA eres mi l\xE1mpara, oh Jehov\xE1; Jehov\xE1 alumbrar\xE1 mis tinieblas. (2 Samuel 22:29)",
        void 0,
        divineDamage
      );
    }
    this.recordCombatDecision("FAITH", "Or\xF3 durante el combate");
    return result;
  }
  /**
   * Ejecuta acción de defender (Armadura de Efesios)
   */
  executeDefend() {
    const battle = this.currentBattle;
    battle.player.isDefending = true;
    battle.player.defenseTurnsRemaining = 2;
    this.addLogEntry(
      "PLAYER",
      "Defensa",
      "Te vistes con toda la Armadura de Efesios",
      "Vest\xEDos toda la armadura de Dios, para que pod\xE1is estar firmes contra las asechanzas del diablo. (Efesios 6:11)"
    );
    this.recordCombatDecision("FAITH", "Se defendi\xF3 con la Armadura de Efesios");
  }
  /**
   * Intenta huir del combate
   */
  async attemptToFlee() {
    const battle = this.currentBattle;
    const fleeChance = 0.3 + battle.player.feLevel / 200;
    const success = Math.random() < fleeChance;
    if (success) {
      this.addLogEntry("PLAYER", "Huida", "Logras escapar del enemigo...", "");
      battle.isActive = false;
      await this.handleDefeat(true);
      return {
        battleState: battle,
        enemyAttacks: false
      };
    } else {
      this.addLogEntry("PLAYER", "Huida Fallida", "No puedes escapar! El enemigo te bloquea el paso.", "");
      this.executeEnemyTurn(true);
      return {
        battleState: battle,
        enemyAttacks: false
        // Ya atacó en executeEnemyTurn
      };
    }
  }
  /**
   * Ejecuta el turno del enemigo
   */
  executeEnemyTurn(fleeAttemptBonus = false) {
    const battle = this.currentBattle;
    const enemy = ENEMY_BESTIARY[battle.enemy.type];
    let damage = Math.floor(enemy.baseHp * 0.15);
    if (battle.player.isDefending) {
      damage = Math.floor(damage * 0.4);
    }
    if (fleeAttemptBonus) {
      damage = Math.floor(damage * 1.5);
    }
    const variance = 0.8 + Math.random() * 0.4;
    damage = Math.floor(damage * variance);
    battle.player.currentHp = Math.max(0, battle.player.currentHp - damage);
    if (battle.player.isDefending) {
      battle.player.defenseTurnsRemaining--;
    }
    this.addLogEntry(
      "ENEMY",
      "Ataque",
      `${battle.enemy.name} te ataca`,
      enemy.specialAbility || "",
      void 0,
      damage
    );
  }
  /**
   * Maneja la victoria del jugador
   */
  async handleVictory() {
    const battle = this.currentBattle;
    battle.isActive = false;
    this.addLogEntry("PLAYER", "Victoria", "\xA1Has vencido al enemigo!", "El justo ser\xE1 como \xE1rbol plantado junto a corrientes de aguas. (Salmos 1:3)");
    const stage = getStageById(battle.stageId);
    const feGained = stage?.rewards?.feBonus || 5;
    const itemsUnlocked = [];
    if (stage?.rewards?.scroll) {
      itemsUnlocked.push(`Pergamino: ${stage.rewards.scroll}`);
    }
    if (stage?.rewards?.armorPiece) {
      itemsUnlocked.push(`Armadura: ${stage.rewards.armorPiece}`);
    }
    const playerState = await loadPlayerProgress();
    if (playerState) {
      playerState.feLevel = Math.min(100, playerState.feLevel + feGained);
      if (stage?.rewards?.scroll && !playerState.inventory.scrolls.includes(stage.rewards.scroll)) {
        playerState.inventory.scrolls.push(stage.rewards.scroll);
      }
      if (stage?.rewards?.armorPiece && !playerState.inventory.armorPieces.includes(stage.rewards.armorPiece)) {
        playerState.inventory.armorPieces.push(stage.rewards.armorPiece);
      }
      playerState.stats.battlesWon += 1;
      await savePlayerProgress(playerState, {});
    }
    return {
      battleState: battle,
      enemyAttacks: false
    };
  }
  /**
   * Maneja la derrota del jugador
   */
  async handleDefeat(fled = false) {
    const battle = this.currentBattle;
    battle.isActive = false;
    const message = fled ? "Has escapado... pero la batalla queda pendiente." : "Has sido derrotado... pero YHWH te da otra oportunidad.";
    this.addLogEntry("PLAYER", "Derrota", message, "Caer\xE1s siete veces, pero te levantar\xE1s. (Proverbios 24:16)");
    const playerState = await loadPlayerProgress();
    if (playerState) {
      playerState.stats.battlesLost += 1;
      await savePlayerProgress(playerState, {});
    }
    return {
      battleState: battle,
      enemyAttacks: false
    };
  }
  /**
   * Añade entrada al log de combate
   */
  addLogEntry(actor, action, description, verseText = "", verseId, damageDealt, healingDone) {
    if (!this.currentBattle) return;
    const entry = {
      turn: this.currentBattle.turn,
      actor,
      action,
      description: verseText ? `${description} "${verseText}"` : description,
      verseUsed: verseId,
      damageDealt,
      healingDone,
      timestamp: Date.now()
    };
    this.currentBattle.combatLog.push(entry);
  }
  /**
   * Registra decisión de arquetipo desde combate
   */
  recordCombatDecision(type, description) {
    try {
      this.playerService.recordDecision(type, description, "COMBATE", "Decisi\xF3n tomada durante batalla espiritual");
    } catch (error) {
      console.error("[CombatService] Error registrando decisi\xF3n:", error);
    }
  }
  /**
   * Obtiene el estado actual de la batalla
   */
  getBattleState() {
    return this.currentBattle;
  }
  /**
   * Verifica si hay una batalla activa
   */
  isBattleActive() {
    return this.currentBattle?.isActive ?? false;
  }
  /**
   * Reinicia la batalla actual (para reintentar)
   */
  async retryBattle() {
    if (!this.currentBattle) {
      throw new Error("No hay batalla para reintentar");
    }
    return this.startBattle(this.currentBattle.stageId);
  }
};
var globalCombatService = null;
function createCombatService(playerService) {
  globalCombatService = new CombatService(playerService);
  return globalCombatService;
}
function getCombatService() {
  if (!globalCombatService) {
    throw new Error("CombatService no inicializado. Usar createCombatService() primero.");
  }
  return globalCombatService;
}
export {
  CombatService,
  GameService,
  createCombatService,
  getCombatService,
  getGameService,
  initializeGame
};
