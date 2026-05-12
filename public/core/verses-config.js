/**
 * SHUV - Configuración de Versículos Bíblicos para Combate
 * Define versículos como ataques con efectividad por tipo de enemigo
 */
/**
 * Colección completa de versículos organizados
 */
export const VERSES_CONFIG = {
    // ===== VERSÍCULOS DE PROTECCIÓN (Armadura de Efesios) =====
    'EFESIOS_6_11': {
        id: 'EFESIOS_6_11',
        name: 'Armadura Completa',
        category: 'PROTECCION',
        reference: {
            book: 'Efesios',
            chapter: 6,
            verse: 11,
            text: 'Vestíos toda la armadura de Dios, para que podáis estar firmes contra las asechanzas del diablo.'
        },
        effect: {
            baseDamage: 0,
            feScaling: 0,
            revealWeakness: false,
            divineIntervention: false,
            bonusDamageVs: []
        },
        unlockRequirement: { minStage: 1 },
        decisionTypeReward: 'FAITH',
        cooldownTurns: 3
    },
    'EFESIOS_6_14': {
        id: 'EFESIOS_6_14',
        name: 'Cinturón de la Verdad',
        category: 'PROTECCION',
        reference: {
            book: 'Efesios',
            chapter: 6,
            verse: 14,
            text: 'Estad, pues, firmes, ceñidos vuestros lomos con la verdad.'
        },
        effect: {
            baseDamage: 5,
            feScaling: 0.3,
            revealWeakness: false,
            divineIntervention: false,
            bonusDamageVs: ['MENTIRA_ENGAÑOSA']
        },
        unlockRequirement: { minStage: 2 },
        decisionTypeReward: 'WISDOM'
    },
    'EFESIOS_6_15': {
        id: 'EFESIOS_6_15',
        name: 'Calzado del Evangelio',
        category: 'PROTECCION',
        reference: {
            book: 'Efesios',
            chapter: 6,
            verse: 15,
            text: 'Y calzados los pies con el apresto del evangelio de la paz.'
        },
        effect: {
            baseDamage: 8,
            feScaling: 0.4,
            revealWeakness: false,
            divineIntervention: false,
            bonusDamageVs: ['TEMOR_COBARDE', 'PEREZA_NEGLIGENTE']
        },
        unlockRequirement: { minStage: 3 },
        decisionTypeReward: 'COURAGE'
    },
    'EFESIOS_6_16': {
        id: 'EFESIOS_6_16',
        name: 'Escudo de la Fe',
        category: 'PROTECCION',
        reference: {
            book: 'Efesios',
            chapter: 6,
            verse: 16,
            text: 'Sobre todo, tomad el escudo de la fe, con que podáis apagar todos los dardos de fuego del maligno.'
        },
        effect: {
            baseDamage: 10,
            feScaling: 0.5,
            revealWeakness: false,
            divineIntervention: false,
            bonusDamageVs: ['DESPERACION_OSCURA', 'TEMOR_COBARDE']
        },
        unlockRequirement: { minStage: 5 },
        decisionTypeReward: 'FAITH'
    },
    'EFESIOS_6_17': {
        id: 'EFESIOS_6_17',
        name: 'Yelmo de la Salvación',
        category: 'PROTECCION',
        reference: {
            book: 'Efesios',
            chapter: 6,
            verse: 17,
            text: 'Y tomad el yelmo de la salvación, y la espada del Espíritu, que es la palabra de Dios.'
        },
        effect: {
            baseDamage: 15,
            feScaling: 0.6,
            revealWeakness: true,
            divineIntervention: false,
            bonusDamageVs: ['MENTIRA_ENGAÑOSA', 'DESPERACION_OSCURA']
        },
        unlockRequirement: { minStage: 8 },
        decisionTypeReward: 'TRANSFORMATION'
    },
    // ===== VERSÍCULOS DE ATAQUE =====
    'SALMO_144_1': {
        id: 'SALMO_144_1',
        name: 'Dios mi Roca',
        category: 'ATAQUE',
        reference: {
            book: 'Salmos',
            chapter: 144,
            verse: 1,
            text: 'Bendito Jehová, mi roca, que adiestra mis manos para la batalla, y mis dedos para la guerra.'
        },
        effect: {
            baseDamage: 20,
            feScaling: 0.7,
            revealWeakness: false,
            divineIntervention: false,
            bonusDamageVs: ['ORGULLO_SOBERBIO', 'IRA_FURIOSA']
        },
        unlockRequirement: { minStage: 4 },
        decisionTypeReward: 'COURAGE'
    },
    'SALMO_23_4': {
        id: 'SALMO_23_4',
        name: 'Sin Temor al Mal',
        category: 'ATAQUE',
        reference: {
            book: 'Salmos',
            chapter: 23,
            verse: 4,
            text: 'Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo.'
        },
        effect: {
            baseDamage: 25,
            feScaling: 0.8,
            revealWeakness: false,
            divineIntervention: false,
            bonusDamageVs: ['TEMOR_COBARDE', 'DESPERACION_OSCURA']
        },
        unlockRequirement: { minStage: 6 },
        decisionTypeReward: 'FAITH'
    },
    'EXODO_14_14': {
        id: 'EXODO_14_14',
        name: 'Jehová Peleará',
        category: 'ATAQUE',
        reference: {
            book: 'Éxodo',
            chapter: 14,
            verse: 14,
            text: 'Jehová peleará por vosotros, y vosotros estaréis tranquilos.'
        },
        effect: {
            baseDamage: 30,
            feScaling: 0.9,
            revealWeakness: false,
            divineIntervention: false,
            bonusDamageVs: ['AVARICIA_CODICIOSA', 'ESCLAVITUD']
        },
        unlockRequirement: { minStage: 10 },
        decisionTypeReward: 'OBEDIENCE'
    },
    'ISAAS_54_17': {
        id: 'ISAAS_54_17',
        name: 'Ninguna Arma Prosperará',
        category: 'ATAQUE',
        reference: {
            book: 'Isaías',
            chapter: 54,
            verse: 17,
            text: 'Ninguna arma forjada contra ti prosperará, y condenarás toda lengua que se levante contra ti en juicio.'
        },
        effect: {
            baseDamage: 35,
            feScaling: 1.0,
            revealWeakness: false,
            divineIntervention: false,
            bonusDamageVs: ['MENTIRA_ENGAÑOSA', 'ENVIDIA_MALIGNA']
        },
        unlockRequirement: { minStage: 12 },
        decisionTypeReward: 'ENDURANCE'
    },
    'APOCALIPSIS_12_11': {
        id: 'APOCALIPSIS_12_11',
        name: 'Vencieron por la Sangre',
        category: 'ATAQUE',
        reference: {
            book: 'Apocalipsis',
            chapter: 12,
            verse: 11,
            text: 'Y ellos le han vencido por medio de la sangre del Cordero y de la palabra que ellos testimoniaron.'
        },
        effect: {
            baseDamage: 40,
            feScaling: 1.2,
            revealWeakness: false,
            divineIntervention: false,
            bonusDamageVs: ['DESPERACION_OSCURA', 'LUJURIA_IMPURA']
        },
        unlockRequirement: { minStage: 15 },
        decisionTypeReward: 'TRANSFORMATION'
    },
    // ===== VERSÍCULOS DE SANACIÓN =====
    'SALMO_103_3': {
        id: 'SALMO_103_3',
        name: 'Sana Todas las Enfermedades',
        category: 'SANACION',
        reference: {
            book: 'Salmos',
            chapter: 103,
            verse: 3,
            text: 'El es quien perdona todas tus iniquidades, el que sana todas tus dolencias.'
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
        decisionTypeReward: 'COMPASSION',
        cooldownTurns: 4
    },
    'JEREMIAS_30_17': {
        id: 'JEREMIAS_30_17',
        name: 'Subiré Sanidad',
        category: 'SANACION',
        reference: {
            book: 'Jeremías',
            chapter: 30,
            verse: 17,
            text: 'Mas yo haré venir sanidad para ti, y sanaré tus heridas, dice Jehová.'
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
        decisionTypeReward: 'FAITH',
        cooldownTurns: 5
    },
    'PEDRO_2_24': {
        id: 'PEDRO_2_24',
        name: 'Por Sus Llagas Fuimos Curados',
        category: 'SANACION',
        reference: {
            book: '1 Pedro',
            chapter: 2,
            verse: 24,
            text: 'Quien llevó él mismo nuestros pecados en su cuerpo sobre el madero, para que nosotros, estando muertos a los pecados, vivamos a la justicia; y por cuya herida fuisteis sanados.'
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
        decisionTypeReward: 'SACRIFICE',
        cooldownTurns: 6
    },
    // ===== VERSÍCULOS DE SABIDURÍA (Revelan Debilidades) =====
    'PROVERBIOS_3_5': {
        id: 'PROVERBIOS_3_5',
        name: 'Fíate de Jehová',
        category: 'SABIDURIA',
        reference: {
            book: 'Proverbios',
            chapter: 3,
            verse: 5,
            text: 'Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia.'
        },
        effect: {
            baseDamage: 5,
            feScaling: 0.2,
            revealWeakness: true,
            divineIntervention: false,
            bonusDamageVs: ['ORGULLO_SOBERBIO']
        },
        unlockRequirement: { minStage: 2 },
        decisionTypeReward: 'WISDOM'
    },
    'SANTIAGO_1_5': {
        id: 'SANTIAGO_1_5',
        name: 'Pedid Sabiduría',
        category: 'SABIDURIA',
        reference: {
            book: 'Santiago',
            chapter: 1,
            verse: 5,
            text: 'Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada.'
        },
        effect: {
            baseDamage: 10,
            feScaling: 0.4,
            revealWeakness: true,
            divineIntervention: false,
            bonusDamageVs: ['MENTIRA_ENGAÑOSA', 'ENVIDIA_MALIGNA']
        },
        unlockRequirement: { minStage: 7 },
        decisionTypeReward: 'WISDOM'
    },
    'COLOSENSES_2_3': {
        id: 'COLOSENSES_2_3',
        name: 'Tesoro de Sabiduría',
        category: 'SABIDURIA',
        reference: {
            book: 'Colosenses',
            chapter: 2,
            verse: 3,
            text: 'En quien están escondidos todos los tesoros de la sabiduría y del conocimiento.'
        },
        effect: {
            baseDamage: 15,
            feScaling: 0.5,
            revealWeakness: true,
            divineIntervention: false,
            bonusDamageVs: ['AVARICIA_CODICIOSA', 'GULA_DESVORADA']
        },
        unlockRequirement: { minStage: 14 },
        decisionTypeReward: 'WISDOM'
    },
    // ===== VERSÍCULOS DE FE PODEROSA (Intervención Divina) =====
    'MATEO_17_20': {
        id: 'MATEO_17_20',
        name: 'Fe como Grano de Mostaza',
        category: 'FE_PODEROSA',
        reference: {
            book: 'Mateo',
            chapter: 17,
            verse: 20,
            text: 'Porque de cierto os digo, que si tuviereis fe como un grano de mostaza, diréis a este monte: Pásate de aquí allá, y se pasará; y nada os será imposible.'
        },
        effect: {
            baseDamage: 50,
            feScaling: 1.5,
            revealWeakness: false,
            divineIntervention: true,
            bonusDamageVs: ['DESPERACION_OSCURA', 'TEMOR_COBARDE']
        },
        unlockRequirement: { minStage: 10, minFeLevel: 60 },
        decisionTypeReward: 'FAITH',
        cooldownTurns: 7
    },
    'MARCO_9_23': {
        id: 'MARCO_9_23',
        name: 'Todo es Posible al que Cree',
        category: 'FE_PODEROSA',
        reference: {
            book: 'Marcos',
            chapter: 9,
            verse: 23,
            text: 'Jesús le dijo: Si puedes creer, al que cree todo le es posible.'
        },
        effect: {
            baseDamage: 60,
            feScaling: 1.8,
            revealWeakness: false,
            divineIntervention: true,
            bonusDamageVs: ['ORGULLO_SOBERBIO', 'INCRELIDAD']
        },
        unlockRequirement: { minStage: 16, minFeLevel: 75 },
        decisionTypeReward: 'FAITH',
        cooldownTurns: 8
    },
    'FILIPENSES_4_13': {
        id: 'FILIPENSES_4_13',
        name: 'Todo lo Puedo en Cristo',
        category: 'FE_PODEROSA',
        reference: {
            book: 'Filipenses',
            chapter: 4,
            verse: 13,
            text: 'Todo lo puedo en Cristo que me fortalece.'
        },
        effect: {
            baseDamage: 75,
            feScaling: 2.0,
            revealWeakness: false,
            divineIntervention: true,
            bonusDamageVs: ['PEREZA_NEGLIGENTE', 'DEBILIDAD']
        },
        unlockRequirement: { minStage: 20, minFeLevel: 85 },
        decisionTypeReward: 'TRANSFORMATION',
        cooldownTurns: 10
    },
    // ===== VERSÍCULOS DE LIBERACIÓN =====
    'SALMO_34_17': {
        id: 'SALMO_34_17',
        name: 'Libra de Angustias',
        category: 'LIBERACION',
        reference: {
            book: 'Salmos',
            chapter: 34,
            verse: 17,
            text: 'Claman los justos, y Jehová oye, y los libra de todas sus angustias.'
        },
        effect: {
            baseDamage: 25,
            feScaling: 0.6,
            revealWeakness: false,
            divineIntervention: false,
            bonusDamageVs: ['DESPERACION_OSCURA', 'TEMOR_COBARDE', 'ENVIDIA_MALIGNA']
        },
        unlockRequirement: { minStage: 5 },
        decisionTypeReward: 'FAITH'
    },
    'GALATAS_5_1': {
        id: 'GALATAS_5_1',
        name: 'Libertad en Cristo',
        category: 'LIBERACION',
        reference: {
            book: 'Gálatas',
            chapter: 5,
            verse: 1,
            text: 'Estad, pues, firmes en la libertad con que Cristo nos hizo libres, y no estéis otra vez sujetos al yugo de esclavitud.'
        },
        effect: {
            baseDamage: 30,
            feScaling: 0.8,
            revealWeakness: false,
            divineIntervention: false,
            bonusDamageVs: ['AVARICIA_CODICIOSA', 'LUJURIA_IMPURA', 'GULA_DESVORADA']
        },
        unlockRequirement: { minStage: 11 },
        decisionTypeReward: 'TRANSFORMATION'
    },
    'JUAN_8_36': {
        id: 'JUAN_8_36',
        name: 'El Hijo os Hará Libres',
        category: 'LIBERACION',
        reference: {
            book: 'Juan',
            chapter: 8,
            verse: 36,
            text: 'Así que, si el Hijo os libertare, seréis verdaderamente libres.'
        },
        effect: {
            baseDamage: 45,
            feScaling: 1.0,
            revealWeakness: false,
            divineIntervention: false,
            bonusDamageVs: ['MENTIRA_ENGAÑOSA', 'ESCLAVITUD', 'PECADO']
        },
        unlockRequirement: { minStage: 17 },
        decisionTypeReward: 'TRANSFORMATION'
    },
    // ===== VERSÍCULOS DE VALOR =====
    'JOSUE_1_9': {
        id: 'JOSUE_1_9',
        name: 'Esforzado y Valiente',
        category: 'VALOR',
        reference: {
            book: 'Josué',
            chapter: 1,
            verse: 9,
            text: 'Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.'
        },
        effect: {
            baseDamage: 20,
            feScaling: 0.5,
            revealWeakness: false,
            divineIntervention: false,
            bonusDamageVs: ['TEMOR_COBARDE', 'PEREZA_NEGLIGENTE']
        },
        unlockRequirement: { minStage: 1 },
        decisionTypeReward: 'COURAGE'
    },
    'SALMO_27_1': {
        id: 'SALMO_27_1',
        name: 'Jehová es mi Luz',
        category: 'VALOR',
        reference: {
            book: 'Salmos',
            chapter: 27,
            verse: 1,
            text: 'Jehová es mi luz y mi salvación; ¿de quién temeré? Jehová es la fortaleza de mi vida; ¿de quién he de atemorizarme?'
        },
        effect: {
            baseDamage: 28,
            feScaling: 0.7,
            revealWeakness: false,
            divineIntervention: false,
            bonusDamageVs: ['DESPERACION_OSCURA', 'TEMOR_COBARDE', 'IRA_FURIOSA']
        },
        unlockRequirement: { minStage: 8 },
        decisionTypeReward: 'COURAGE'
    },
    'TIMOTEO_1_7': {
        id: 'TIMOTEO_1_7',
        name: 'Espíritu de Poder',
        category: 'VALOR',
        reference: {
            book: '2 Timoteo',
            chapter: 1,
            verse: 7,
            text: 'Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio.'
        },
        effect: {
            baseDamage: 35,
            feScaling: 0.9,
            revealWeakness: false,
            divineIntervention: false,
            bonusDamageVs: ['TEMOR_COBARDE', 'PEREZA_NEGLIGENTE', 'LUJURIA_IMPURA']
        },
        unlockRequirement: { minStage: 13 },
        decisionTypeReward: 'COURAGE'
    }
};
/**
 * Bestiario completo de enemigos espirituales
 */
export const ENEMY_BESTIARY = {
    'ORGULLO_SOBERBIO': {
        type: 'ORGULLO_SOBERBIO',
        name: 'Soberbio',
        description: 'El espíritu del orgullo que ciega los ojos del corazón',
        baseHp: 100,
        weaknesses: ['SABIDURIA', 'PROTECCION'],
        resistances: ['ATAQUE'],
        specialAbility: 'Cegamiento: Reduce efectividad de versículos de ataque'
    },
    'AVARICIA_CODICIOSA': {
        type: 'AVARICIA_CODICIOSA',
        name: 'Codicioso',
        description: 'El guardián de las minas doradas que esclaviza corazones',
        baseHp: 120,
        weaknesses: ['LIBERACION', 'SABIDURIA'],
        resistances: ['SANACION'],
        specialAbility: 'Robo de Maná: Drena recursos del jugador'
    },
    'LUJURIA_IMPURA': {
        type: 'LUJURIA_IMPURA',
        name: 'Impuro',
        description: 'La tentación que marchita el alma con deseos carnales',
        baseHp: 90,
        weaknesses: ['PROTECCION', 'LIBERACION'],
        resistances: ['VALOR'],
        specialAbility: 'Distracción: Puede fallar el siguiente ataque'
    },
    'IRA_FURIOSA': {
        type: 'IRA_FURIOSA',
        name: 'Furia Descontrolada',
        description: 'El volcán de ira que consume todo a su paso',
        baseHp: 110,
        weaknesses: ['SABIDURIA', 'SANACION'],
        resistances: ['PROTECCION'],
        specialAbility: 'Contraataque Furioso: Daña al jugador tras recibir golpe'
    },
    'GULA_DESVORADA': {
        type: 'GULA_DESVORADA',
        name: 'Desvorador',
        description: 'El banquete eterno que nunca sacia el hambre espiritual',
        baseHp: 130,
        weaknesses: ['LIBERACION', 'SABIDURIA'],
        resistances: ['SANACION'],
        specialAbility: 'Consumir: Roba curación del jugador'
    },
    'ENVIDIA_MALIGNA': {
        type: 'ENVIDIA_MALIGNA',
        name: 'Envidioso',
        description: 'Los espejos oscuros que distorsionan la realidad',
        baseHp: 95,
        weaknesses: ['SABIDURIA', 'LIBERACION'],
        resistances: ['ATAQUE'],
        specialAbility: 'Imitación: Copia el último versículo usado'
    },
    'PEREZA_NEGLIGENTE': {
        type: 'PEREZA_NEGLIGENTE',
        name: 'Negligente',
        description: 'Las arenas movedizas de la inacción espiritual',
        baseHp: 100,
        weaknesses: ['VALOR', 'FE_PODEROSA'],
        resistances: ['SABIDURIA'],
        specialAbility: 'Letargo: Reduce velocidad de acción del jugador'
    },
    'DESPERACION_OSCURA': {
        type: 'DESPERACION_OSCURA',
        name: 'Desesperación',
        description: 'La oscuridad que susurra que no hay esperanza',
        baseHp: 80,
        weaknesses: ['FE_PODEROSA', 'VALOR', 'SANACION'],
        resistances: ['SABIDURIA'],
        specialAbility: 'Susurro Oscuro: Reduce FE del jugador'
    },
    'MENTIRA_ENGAÑOSA': {
        type: 'MENTIRA_ENGAÑOSA',
        name: 'Engañador',
        description: 'El padre de mentira que distorsiona la verdad',
        baseHp: 85,
        weaknesses: ['PROTECCION', 'SABIDURIA'],
        resistances: ['LIBERACION'],
        specialAbility: 'Ilusión: Puede esquivar ataques'
    },
    'TEMOR_COBARDE': {
        type: 'TEMOR_COBARDE',
        name: 'Temor Paralizante',
        description: 'El miedo que paraliza y impide avanzar',
        baseHp: 70,
        weaknesses: ['FE_PODEROSA', 'VALOR', 'PROTECCION'],
        resistances: ['SABIDURIA'],
        specialAbility: 'Parálisis: Puede impedir acción del jugador'
    },
    'ESCLAVITUD': {
        type: 'ESCLAVITUD',
        name: 'Esclavitud Espiritual',
        description: 'Cadenas invisibles que atan el alma al pecado',
        baseHp: 140,
        weaknesses: ['LIBERACION', 'FE_PODEROSA'],
        resistances: ['ATAQUE'],
        specialAbility: 'Ataduras: Reduce efectividad de acciones'
    },
    'INCRELIDAD': {
        type: 'INCRELIDAD',
        name: 'Incredulidad',
        description: 'La duda que debilita la fe y el poder espiritual',
        baseHp: 75,
        weaknesses: ['FE_PODEROSA', 'SABIDURIA'],
        resistances: ['PROTECCION'],
        specialAbility: 'Duda: Reduce FE del jugador gradualmente'
    },
    'DEBILIDAD': {
        type: 'DEBILIDAD',
        name: 'Debilidad Carnal',
        description: 'La carne es débil y vulnerable a la tentación',
        baseHp: 60,
        weaknesses: ['VALOR', 'FE_PODEROSA'],
        resistances: ['SANACION'],
        specialAbility: 'Flaqueza: Drena energía del jugador'
    },
    'PECADO': {
        type: 'PECADO',
        name: 'Pecado Oculto',
        description: 'El pecado escondido que corroe desde dentro',
        baseHp: 150,
        weaknesses: ['LIBERACION', 'SABIDURIA', 'PROTECCION'],
        resistances: ['ATAQUE'],
        specialAbility: 'Corrupción: Aplica daño continuo al jugador'
    }
};
/**
 * Obtiene todos los versículos disponibles
 */
export function getAllVerses() {
    return Object.values(VERSES_CONFIG);
}
/**
 * Obtiene un versículo por ID
 */
export function getVerseById(verseId) {
    return VERSES_CONFIG[verseId] || null;
}
/**
 * Obtiene versículos desbloqueados para un jugador según su progreso
 */
export function getUnlockedVerses(currentStage, feLevel, kingdom) {
    return getAllVerses().filter(verse => {
        const req = verse.unlockRequirement;
        if (currentStage < req.minStage)
            return false;
        if (req.minFeLevel && feLevel < req.minFeLevel)
            return false;
        if (req.kingdom && kingdom && req.kingdom !== kingdom)
            return false;
        return true;
    });
}
/**
 * Calcula el daño efectivo de un versículo contra un enemigo
 */
export function calculateVerseDamage(verse, enemyType, feLevel) {
    const effect = verse.effect;
    let damage = effect.baseDamage;
    // Aplicar scaling de FE
    damage += feLevel * effect.feScaling;
    // Aplicar bonus por debilidad del enemigo
    const enemy = ENEMY_BESTIARY[enemyType];
    if (enemy.weaknesses.includes(verse.category)) {
        damage *= 1.5; // 50% más efectivo
    }
    // Aplicar resistencia del enemigo
    if (enemy.resistances.includes(verse.category)) {
        damage *= 0.7; // 30% menos efectivo
    }
    // Bonus específico por tipo de enemigo
    if (effect.bonusDamageVs?.includes(enemyType)) {
        damage *= 1.3; // 30% extra
    }
    return Math.floor(damage);
}
/**
 * Obtiene información de efectividad de un versículo contra un enemigo
 */
export function getVerseEffectiveness(verse, enemyType) {
    const enemy = ENEMY_BESTIARY[enemyType];
    if (enemy.weaknesses.includes(verse.category)) {
        return 'SUPER_EFFECTIVE';
    }
    if (enemy.resistances.includes(verse.category)) {
        return 'RESISTED';
    }
    if (verse.effect.bonusDamageVs?.includes(enemyType)) {
        return 'SUPER_EFFECTIVE';
    }
    return 'EFFECTIVE';
}
//# sourceMappingURL=verses-config.js.map