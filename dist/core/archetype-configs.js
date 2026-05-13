/**
 * SHUV - Configuración de los 20 Arquetipos Bíblicos
 * Define las características y comportamientos de cada arquetipo
 */
// Valores de DecisionType como objeto para uso en runtime
export const DECISION_TYPES = {
    MERCY: 'MERCY',
    JUSTICE: 'JUSTICE',
    WISDOM: 'WISDOM',
    SACRIFICE: 'SACRIFICE',
    FAITH: 'FAITH',
    LEADERSHIP: 'LEADERSHIP',
    ENDURANCE: 'ENDURANCE',
    OBEDIENCE: 'OBEDIENCE',
    COURAGE: 'COURAGE',
    LOYALTY: 'LOYALTY',
    TRANSFORMATION: 'TRANSFORMATION',
    STRATEGY: 'STRATEGY',
    COMPASSION: 'COMPASSION'
};
export const ARCHETYPE_CONFIGS = {
    // === ARQUETIPOS MASCULINOS (12) ===
    PEDRO: {
        name: 'PEDRO',
        title: 'El Valiente Impulsivo',
        gender: 'MASCULINE',
        primaryDecisionTypes: ['COURAGE', 'JUSTICE', 'LOYALTY'],
        secondaryDecisionTypes: ['TRANSFORMATION', 'COMPASSION'],
        description: 'Atacas primero, proteges a otros, caes y te levantas. Tu valentía es tu fuerza y tu debilidad.',
        biblicalReference: 'Mateo 14:28-29 - "Señor, si eres tú, mándame ir a ti sobre las aguas."'
    },
    DAVID: {
        name: 'DAVID',
        title: 'El Adorador Guerrero',
        gender: 'MASCULINE',
        primaryDecisionTypes: ['FAITH', 'COURAGE', 'WISDOM'],
        secondaryDecisionTypes: ['COMPASSION', 'JUSTICE'],
        description: 'Buscas a YHWH en la oscuridad, usas Fe + Fuerza. Cantas salmos mientras luchas.',
        biblicalReference: 'Salmos 144:1 - "Bendito YHWH, mi roca, que adiestra mis manos para la batalla."'
    },
    MOISES: {
        name: 'MOISES',
        title: 'El Líder Liberador',
        gender: 'MASCULINE',
        primaryDecisionTypes: ['LEADERSHIP', 'OBEDIENCE', 'SACRIFICE'],
        secondaryDecisionTypes: ['ENDURANCE', 'FAITH'],
        description: 'Guías NPCs, tomas decisiones por el grupo, sacrificio propio. Liberas cautivos.',
        biblicalReference: 'Éxodo 3:10 - "Ven, te enviaré a Faraón para que saques de Egipto a mi pueblo."'
    },
    JOSE: {
        name: 'JOSE',
        title: 'El Perdonador',
        gender: 'MASCULINE',
        primaryDecisionTypes: ['MERCY', 'COMPASSION', 'ENDURANCE'],
        secondaryDecisionTypes: ['WISDOM', 'FAITH'],
        description: 'Eres misericordioso con enemigos, sufres sin vengarte. Perdonas traiciones.',
        biblicalReference: 'Génesis 50:20 - "Vosotros pensasteis mal contra mí, mas YHWH lo encaminó a bien."'
    },
    JOB: {
        name: 'JOB',
        title: 'El Resistente',
        gender: 'MASCULINE',
        primaryDecisionTypes: ['ENDURANCE', 'FAITH', 'OBEDIENCE'],
        secondaryDecisionTypes: ['WISDOM', 'SACRIFICE'],
        description: 'Aguantas sufrimiento extremo sin abandonar la fe. No maldices tu suerte.',
        biblicalReference: 'Job 19:25 - "Yo sé que mi Redentor vive, y al fin se levantará sobre el polvo."'
    },
    SALOMON: {
        name: 'SALOMON',
        title: 'El Sabio',
        gender: 'MASCULINE',
        primaryDecisionTypes: ['WISDOM', 'STRATEGY', 'OBEDIENCE'],
        secondaryDecisionTypes: ['LEADERSHIP', 'FAITH'],
        description: 'Investigas antes de actuar, recoges pergaminos, buscas conocimiento. Juzgas con discernimiento.',
        biblicalReference: 'Proverbios 2:6 - "Porque YHWH da la sabiduría, y de su boca viene el conocimiento."'
    },
    JOSUE: {
        name: 'JOSUE',
        title: 'El Conquistador',
        gender: 'MASCULINE',
        primaryDecisionTypes: ['COURAGE', 'JUSTICE', 'LEADERSHIP'],
        secondaryDecisionTypes: ['OBEDIENCE', 'FAITH'],
        description: 'Combate puro, sin miedo, avanzas cuando todos retroceden. Tomas territorios.',
        biblicalReference: 'Josué 1:9 - "Mira que te mando que te esfuerces y seas valiente."'
    },
    ELIAS: {
        name: 'ELIAS',
        title: 'El Profeta Solitario',
        gender: 'MASCULINE',
        primaryDecisionTypes: ['FAITH', 'OBEDIENCE', 'ENDURANCE'],
        secondaryDecisionTypes: ['WISDOM', 'JUSTICE'],
        description: 'Juegas solo, rechazas alianzas, escuchas la voz de YHWH. Hablas verdad al poder.',
        biblicalReference: '1 Reyes 19:12 - "Y después del fuego un silbo apacible y delicado."'
    },
    DANIEL: {
        name: 'DANIEL',
        title: 'El Fiel en el Exilio',
        gender: 'MASCULINE',
        primaryDecisionTypes: ['FAITH', 'OBEDIENCE', 'WISDOM'],
        secondaryDecisionTypes: ['ENDURANCE', 'STRATEGY'],
        description: 'Mantienes pureza en territorio enemigo, no te contaminas. Oras aunque esté prohibido.',
        biblicalReference: 'Daniel 1:8 - "Y Daniel propuso en su corazón no contaminarse."'
    },
    PABLO: {
        name: 'PABLO',
        title: 'El Transformado',
        gender: 'MASCULINE',
        primaryDecisionTypes: ['TRANSFORMATION', 'WISDOM', 'LEADERSHIP'],
        secondaryDecisionTypes: ['COURAGE', 'ENDURANCE'],
        description: 'Empiezas con decisiones oscuras y luego cambias radicalmente. De perseguidor a predicador.',
        biblicalReference: 'Hechos 9:15-16 - "Este es instrumento escogido para llevar mi nombre."'
    },
    JUAN: {
        name: 'JUAN',
        title: 'El Amado',
        gender: 'MASCULINE',
        primaryDecisionTypes: ['COMPASSION', 'MERCY', 'LOYALTY'],
        secondaryDecisionTypes: ['FAITH', 'WISDOM'],
        description: 'Amor como arma principal, proteges a los débiles siempre. El discípulo que Jesús amaba.',
        biblicalReference: '1 Juan 4:19 - "Nosotros le amamos a él, porque él nos amó primero."'
    },
    ABRAHAM: {
        name: 'ABRAHAM',
        title: 'El que Obedece sin Ver',
        gender: 'MASCULINE',
        primaryDecisionTypes: ['OBEDIENCE', 'FAITH', 'SACRIFICE'],
        secondaryDecisionTypes: ['ENDURANCE', 'LEADERSHIP'],
        description: 'Tomas decisiones de fe sin pruebas, confías sin entender. Padre de multitudes.',
        biblicalReference: 'Hebreos 11:8 - "Por la fe Abraham, siendo llamado, obedeció."'
    },
    // === ARQUETIPOS FEMENINOS (8) ===
    DEBORA: {
        name: 'DEBORA',
        title: 'La Jueza Guerrera',
        gender: 'FEMININE',
        primaryDecisionTypes: ['LEADERSHIP', 'JUSTICE', 'STRATEGY'],
        secondaryDecisionTypes: ['COURAGE', 'FAITH'],
        description: 'Lideras en combate, tomas autoridad cuando nadie más puede. Jueza y profetisa.',
        biblicalReference: 'Jueces 4:4-5 - "Gobernaba en aquel tiempo a Israel una profetisa llamada Débora."'
    },
    ESTER: {
        name: 'ESTER',
        title: 'La Estratega Valiente',
        gender: 'FEMININE',
        primaryDecisionTypes: ['STRATEGY', 'COURAGE', 'SACRIFICE'],
        secondaryDecisionTypes: ['WISDOM', 'LOYALTY'],
        description: 'Actúas con sabiduría política, sacrificas tu seguridad por tu pueblo. Reina valiente.',
        biblicalReference: 'Ester 4:16 - "Si perezco, que perezca." Entró a ver al rey sin ser llamada.'
    },
    RUT: {
        name: 'RUT',
        title: 'La Leal Inquebrantable',
        gender: 'FEMININE',
        primaryDecisionTypes: ['LOYALTY', 'COMPASSION', 'ENDURANCE'],
        secondaryDecisionTypes: ['FAITH', 'SACRIFICE'],
        description: 'Nunca abandonas a un aliado NPC, fidelidad absoluta. "A donde tú vayas, iré yo".',
        biblicalReference: 'Rut 1:16 - "Tu pueblo será mi pueblo, y tu Dios mi Dios."'
    },
    MARIA: {
        name: 'MARIA',
        title: 'La Portadora de lo Sagrado',
        gender: 'FEMININE',
        primaryDecisionTypes: ['FAITH', 'OBEDIENCE', 'COMPASSION'],
        secondaryDecisionTypes: ['ENDURANCE', 'SACRIFICE'],
        description: 'Proteges objetos sagrados, receptiva a YHWH, humilde en poder. Madre del Mesías.',
        biblicalReference: 'Lucas 1:38 - "He aquí la sierva del Señor; hágase conmigo conforme a tu palabra."'
    },
    RAQUEL: {
        name: 'RAQUEL',
        title: 'La que Espera',
        gender: 'FEMININE',
        primaryDecisionTypes: ['ENDURANCE', 'FAITH', 'LOYALTY'],
        secondaryDecisionTypes: ['COMPASSION', 'WISDOM'],
        description: 'Perseveras en misiones largas sin recompensa inmediata. Esperas años por amor.',
        biblicalReference: 'Génesis 29:20 - "Y sirvió Jacob por Raquel siete años, y le parecieron pocos días."'
    },
    ANA: {
        name: 'ANA',
        title: 'La que Ora en Silencio',
        gender: 'FEMININE',
        primaryDecisionTypes: ['FAITH', 'ENDURANCE', 'OBEDIENCE'],
        secondaryDecisionTypes: ['WISDOM', 'SACRIFICE'],
        description: 'Usas la oración como mecánica principal antes de cada batalla. Lloras ante YHWH.',
        biblicalReference: '1 Samuel 1:10 - "Ella con amargura de alma oró a YHWH y lloró abundantemente."'
    },
    MARIA_MAGDALA: {
        name: 'MARIA_MAGDALA',
        title: 'La Restaurada',
        gender: 'FEMININE',
        primaryDecisionTypes: ['TRANSFORMATION', 'LOYALTY', 'COMPASSION'],
        secondaryDecisionTypes: ['FAITH', 'COURAGE'],
        description: 'Empiezas con el perfil más oscuro y alcanzas la mayor transformación. Primera en ver la resurrección.',
        biblicalReference: 'Marcos 16:9 - "Jesús se apareció primero a María Magdalena, de quien había echado siete demonios."'
    },
    JAEL: {
        name: 'JAEL',
        title: 'La que Actúa en el Momento Justo',
        gender: 'FEMININE',
        primaryDecisionTypes: ['STRATEGY', 'COURAGE', 'JUSTICE'],
        secondaryDecisionTypes: ['WISDOM', 'FAITH'],
        description: 'Esperas, observas y golpeas en el momento exacto — paciencia táctica. Mata a Sísara.',
        biblicalReference: 'Jueces 5:24-27 - "Entre las mujeres sea bendita Jael." Clavó la estaca en la sien.'
    }
};
/**
 * Obtiene la configuración de un arquetipo por su nombre
 */
export function getArchetypeConfig(name) {
    return ARCHETYPE_CONFIGS[name];
}
/**
 * Obtiene todos los arquetipos de un género específico
 */
export function getArchetypesByGender(gender) {
    return Object.values(ARCHETYPE_CONFIGS).filter(config => config.gender === gender);
}
/**
 * Obtiene arquetipos que coinciden con un tipo de decisión primario
 */
export function getArchetypesByDecisionType(decisionType) {
    return Object.values(ARCHETYPE_CONFIGS).filter(config => config.primaryDecisionTypes.includes(decisionType));
}
/**
 * Lista de todos los nombres de arquetipos
 */
export const ALL_ARCHETYPE_NAMES = Object.keys(ARCHETYPE_CONFIGS);
//# sourceMappingURL=archetype-configs.js.map
