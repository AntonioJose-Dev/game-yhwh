/**
 * SHUV - Configuración de los 7 Reinos y sus Etapas
 * Define el mapa de progreso del jugador a través de los reinos espirituales
 */

import { KingdomConfig, Stage } from '../types/ui-types';

/**
 * Configuración completa de los 7 Reinos
 * Cada reino representa una batalla espiritual diferente
 */
export const KINGDOMS_CONFIG: Record<string, KingdomConfig> = {
  ORGULLO: {
    id: 'ORGULLO',
    name: 'Reino del Orgullo',
    description: 'La fortaleza del ego donde la soberanía ciega los ojos',
    stages: [
      {
        id: 1,
        name: 'El Despertar',
        description: 'Primeros pasos hacia la humildad',
        kingdom: 'ORGULLO',
        difficulty: 'EASY',
        status: 'AVAILABLE',
        position: { x: 50, y: 90 },
        rewards: { feBonus: 5 }
      },
      {
        id: 2,
        name: 'Espejo Roto',
        description: 'Confronta tu propio reflejo',
        kingdom: 'ORGULLO',
        difficulty: 'MEDIUM',
        status: 'LOCKED',
        position: { x: 30, y: 75 },
        rewards: { feBonus: 10, scroll: 'humildad' }
      },
      {
        id: 3,
        name: 'Caída del Soberbio',
        description: 'Batalla contra el príncipe del orgullo',
        kingdom: 'ORGULLO',
        difficulty: 'BOSS',
        status: 'LOCKED',
        position: { x: 50, y: 50 },
        rewards: { feBonus: 25, armorPiece: 'humildad' }
      }
    ]
  },
  AVARICIA: {
    id: 'AVARICIA',
    name: 'Reino de la Avaricia',
    description: 'Las minas doradas donde el corazón se esclaviza',
    stages: [
      {
        id: 4,
        name: 'Entrada a las Minas',
        description: 'El brillo cegador del oro',
        kingdom: 'AVARICIA',
        difficulty: 'EASY',
        status: 'LOCKED',
        position: { x: 70, y: 90 },
        rewards: { feBonus: 5 }
      },
      {
        id: 5,
        name: 'El Mercader',
        description: 'Decide qué vale realmente la pena',
        kingdom: 'AVARICIA',
        difficulty: 'MEDIUM',
        status: 'LOCKED',
        position: { x: 80, y: 70 },
        rewards: { feBonus: 10 }
      },
      {
        id: 6,
        name: 'Tesoros del Cielo',
        description: 'Batalla contra el guardián de la codicia',
        kingdom: 'AVARICIA',
        difficulty: 'BOSS',
        status: 'LOCKED',
        position: { x: 70, y: 50 },
        rewards: { feBonus: 25, scroll: 'generosidad' }
      }
    ]
  },
  LUJuria: {
    id: 'LUJURIA',
    name: 'Reino de la Lujuria',
    description: 'Los jardines del deseo que marchitan el alma',
    stages: [
      {
        id: 7,
        name: 'Sendero de Rosas',
        description: 'Belleza que engaña',
        kingdom: 'LUJURIA',
        difficulty: 'EASY',
        status: 'LOCKED',
        position: { x: 20, y: 85 },
        rewards: { feBonus: 5 }
      },
      {
        id: 8,
        name: 'Fuente Cristalina',
        description: 'Agua que no sacia la sed',
        kingdom: 'LUJURIA',
        difficulty: 'MEDIUM',
        status: 'LOCKED',
        position: { x: 15, y: 65 },
        rewards: { feBonus: 10 }
      },
      {
        id: 9,
        name: 'Pureza Restaurada',
        description: 'Victoria sobre la carne',
        kingdom: 'LUJURIA',
        difficulty: 'BOSS',
        status: 'LOCKED',
        position: { x: 20, y: 45 },
        rewards: { feBonus: 25, armorPiece: 'pureza' }
      }
    ]
  },
  IRA: {
    id: 'IRA',
    name: 'Reino de la Ira',
    description: 'El volcán donde hierve la furia descontrolada',
    stages: [
      {
        id: 10,
        name: 'Cenizas Calientes',
        description: 'Primeras chispas de enojo',
        kingdom: 'IRA',
        difficulty: 'EASY',
        status: 'LOCKED',
        position: { x: 85, y: 80 },
        rewards: { feBonus: 5 }
      },
      {
        id: 11,
        name: 'Río de Fuego',
        description: 'La ira consume todo a su paso',
        kingdom: 'IRA',
        difficulty: 'MEDIUM',
        status: 'LOCKED',
        position: { x: 90, y: 60 },
        rewards: { feBonus: 10 }
      },
      {
        id: 12,
        name: 'Mansedumbre Triunfante',
        description: 'Domar la bestia interior',
        kingdom: 'IRA',
        difficulty: 'BOSS',
        status: 'LOCKED',
        position: { x: 85, y: 40 },
        rewards: { feBonus: 25, scroll: 'mansedumbre' }
      }
    ]
  },
  GULA: {
    id: 'GULA',
    name: 'Reino de la Gula',
    description: 'El banquete eterno que nunca sacia',
    stages: [
      {
        id: 13,
        name: 'Mesas Abundantes',
        description: 'El exceso disfrazado de bendición',
        kingdom: 'GULA',
        difficulty: 'EASY',
        status: 'LOCKED',
        position: { x: 10, y: 75 },
        rewards: { feBonus: 5 }
      },
      {
        id: 14,
        name: 'Ayuno Sagrado',
        description: 'Aprender a decir "basta"',
        kingdom: 'GULA',
        difficulty: 'MEDIUM',
        status: 'LOCKED',
        position: { x: 5, y: 55 },
        rewards: { feBonus: 10 }
      },
      {
        id: 15,
        name: 'Pan del Cielo',
        description: 'El verdadero alimento del alma',
        kingdom: 'GULA',
        difficulty: 'BOSS',
        status: 'LOCKED',
        position: { x: 10, y: 35 },
        rewards: { feBonus: 25, armorPiece: 'templanza' }
      }
    ]
  },
  ENVIDIA: {
    id: 'ENVIDIA',
    name: 'Reino de la Envidia',
    description: 'Los espejos oscuros que distorsionan la realidad',
    stages: [
      {
        id: 16,
        name: 'Reflejo Ajeno',
        description: 'Compararse destruye el gozo',
        kingdom: 'ENVIDIA',
        difficulty: 'EASY',
        status: 'LOCKED',
        position: { x: 60, y: 70 },
        rewards: { feBonus: 5 }
      },
      {
        id: 17,
        name: 'Celebración del Otro',
        description: 'Goza cuando otros triunfan',
        kingdom: 'ENVIDIA',
        difficulty: 'MEDIUM',
        status: 'LOCKED',
        position: { x: 55, y: 50 },
        rewards: { feBonus: 10 }
      },
      {
        id: 18,
        name: 'Contentamiento',
        description: 'Tu propósito es único',
        kingdom: 'ENVIDIA',
        difficulty: 'BOSS',
        status: 'LOCKED',
        position: { x: 60, y: 30 },
        rewards: { feBonus: 25, scroll: 'contentamiento' }
      }
    ]
  },
  PEREZA: {
    id: 'PEREZA',
    name: 'Reino de la Pereza',
    description: 'Las arenas movedizas de la inacción',
    stages: [
      {
        id: 19,
        name: 'Sueño Pesado',
        description: 'El llamado al descanso excesivo',
        kingdom: 'PEREZA',
        difficulty: 'EASY',
        status: 'LOCKED',
        position: { x: 40, y: 60 },
        rewards: { feBonus: 5 }
      },
      {
        id: 20,
        name: 'Despertar del Guerrero',
        description: 'Levántate y toma tu espada',
        kingdom: 'PEREZA',
        difficulty: 'MEDIUM',
        status: 'LOCKED',
        position: { x: 35, y: 40 },
        rewards: { feBonus: 10 }
      },
      {
        id: 21,
        name: 'Corona del Vencedor',
        description: 'Batalla final contra la negligencia',
        kingdom: 'PEREZA',
        difficulty: 'BOSS',
        status: 'LOCKED',
        position: { x: 40, y: 20 },
        rewards: { feBonus: 30, armorPiece: 'diligencia' }
      }
    ]
  }
};

/**
 * Obtiene todas las etapas en orden secuencial
 */
export function getAllStages(): Stage[] {
  const allStages: Stage[] = [];
  
  for (const kingdom of Object.values(KINGDOMS_CONFIG)) {
    allStages.push(...kingdom.stages);
  }
  
  return allStages.sort((a, b) => a.id - b.id);
}

/**
 * Obtiene una etapa específica por ID
 */
export function getStageById(stageId: number): Stage | null {
  for (const kingdom of Object.values(KINGDOMS_CONFIG)) {
    const stage = kingdom.stages.find(s => s.id === stageId);
    if (stage) return stage;
  }
  return null;
}

/**
 * Obtiene el reino que contiene una etapa
 */
export function getKingdomForStage(stageId: number): KingdomConfig | null {
  for (const kingdom of Object.values(KINGDOMS_CONFIG)) {
    const stage = kingdom.stages.find(s => s.id === stageId);
    if (stage) return kingdom;
  }
  return null;
}

/**
 * Calcula el estado de las etapas basado en el progreso del jugador
 */
export function calculateStageStatus(
  currentStage: number,
  completedStages: number[]
): Map<number, Stage> {
  const stageMap = new Map<number, Stage>();
  const allStages = getAllStages();
  
  for (const stage of allStages) {
    let status: Stage['status'] = 'LOCKED';
    
    if (completedStages.includes(stage.id)) {
      status = 'COMPLETED';
    } else if (stage.id === currentStage) {
      status = 'CURRENT';
    } else if (stage.id === currentStage + 1 || 
               (currentStage > 0 && stage.id <= currentStage)) {
      status = 'AVAILABLE';
    }
    
    // La primera etapa siempre está disponible si no hay progreso
    if (stage.id === 1 && completedStages.length === 0 && currentStage === 0) {
      status = 'AVAILABLE';
    }
    
    stageMap.set(stage.id, { ...stage, status });
  }
  
  return stageMap;
}

/**
 * Verifica si un reino está completamente liberado
 */
export function isKingdomLiberated(
  kingdomId: string,
  completedStages: number[]
): boolean {
  const kingdom = KINGDOMS_CONFIG[kingdomId];
  if (!kingdom) return false;
  
  return kingdom.stages.every(stage => 
    completedStages.includes(stage.id)
  );
}

/**
 * Obtiene el próximo reino disponible
 */
export function getNextAvailableKingdom(
  completedStages: number[]
): KingdomConfig | null {
  const kingdoms = Object.values(KINGDOMS_CONFIG);
  
  for (const kingdom of kingdoms) {
    if (!isKingdomLiberated(kingdom.id, completedStages)) {
      // Verificar si al menos la primera etapa está disponible
      const firstStage = kingdom.stages[0];
      if (firstStage && 
          (completedStages.includes(firstStage.id - 1) || firstStage.id === 1)) {
        return kingdom;
      }
    }
  }
  
  return null;
}
