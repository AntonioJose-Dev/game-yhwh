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
export {
  GameService,
  getGameService,
  initializeGame
};
