# Sistema de Arquetipos SHUV — Implementación Completa

## 📦 Estructura del Módulo

```
src/
├── types/
│   └── archetypes.ts          # Tipos TypeScript centrales
├── core/
│   ├── archetype-configs.ts   # Configuración de los 20 arquetipos
│   └── archetype-engine.ts    # Motor de cálculo de arquetipos
├── services/
│   ├── npc-hint-system.ts     # Sistema de pistas sutiles de NPCs
│   └── player-service.ts      # Servicio de gestión del jugador
├── examples/
│   └── archetype-demo.ts      # Ejemplos de uso y demo
└── index.ts                   # Punto de entrada principal
```

---

## ✅ Características Implementadas

### 1. **Estado Central del Jugador**
- `PlayerState` con puntuación por cada uno de los 20 arquetipos
- Registro completo de decisiones (`decisionLog`)
- Estado de revelación del nombre verdadero
- Persistencia automática en localStorage

### 2. **Sistema de Decisiones**
- 14 tipos de decisiones diferentes (MERCY, JUSTICE, FAITH, etc.)
- Cada decisión afecta múltiples arquetipos simultáneamente
- Puntuación diferenciada: decisiones primarias (+3) vs secundarias (+1)
- Contexto opcional (reino, situación) para tracking detallado

### 3. **Sistema de Pistas de NPCs**
- 30+ pistas sutiles organizadas por categoría
- Triggers basados en conteo de decisiones (ej: 5 decisiones de FE activan pista de Noé)
- Diálogos que nunca revelan el arquetipo directamente
- Funciones para verificar, marcar como vistas y filtrar pistas

### 4. **Cálculo Automático del Arquetipo Dominante**
- Algoritmo que calcula dominante y secundario en tiempo real
- Métrica de confianza basada en la diferencia entre primero y segundo
- Estadísticas detalladas (top 3, promedio, más/menos activo)

### 5. **Revelación del Nombre Verdadero**
- Función `revealTrueName()` para final del Acto II
- Retorna nombre, título, descripción y referencia bíblica
- Sistema de aceptar/rechazar con consecuencias persistentes
- Validación para evitar revelación múltiple

### 6. **Persistencia del Estado**
- Auto-guardado en localStorage después de cada acción
- Export/import para sincronización con backend (Supabase)
- Reset completo de progreso disponible

### 7. **Código Modular**
- Separación clara: tipos → configuración → motor → servicios
- Funciones puras donde es posible
- Fácil de testear unitariamente
- Sin dependencias externas

### 8. **Integración con Flujo del Juego**
- Métodos para avanzar actos (`advanceToAct`)
- Registro de reinos liberados (`liberateKingdom`)
- Singleton global (`getPlayerService()`) para acceso desde cualquier componente

---

## 🚀 Cómo Usar

### Importar el Módulo

```typescript
import {
  PlayerService,
  initializePlayerService,
  DecisionType,
  ARCHETYPE_CONFIGS
} from './src/index';
```

### Crear un Nuevo Jugador

```typescript
const player = initializePlayerService();
const state = player.createNewPlayer('Juan', 'telegram_123');
```

### Registrar una Decisión

```typescript
// Después de que el jugador perdone a un enemigo
player.recordDecision(
  DecisionType.MERCY,
  'Perdonó al enemigo derrotado',
  'Reino del Orgullo',
  'Combate vs Capitán'
);
```

### Obtener Pistas para un NPC

```typescript
// Antes de mostrar diálogo con Noé
const hints = player.getAvailableHintsForNPC('noe');
if (hints.length > 0) {
  showDialog(`Noé dice: "${hints[0].dialogLine}"`);
  player.markHintViewed(hints[0].hintId);
}
```

### Revelar el Nombre (Final Acto II)

```typescript
const revelation = player.revealTrueName();
console.log(`Tu nombre es: ${revelation.trueName}`);
console.log(`Título: ${revelation.title}`);

// Jugador decide
player.acceptOrRejectName(true); // o false para rechazar
```

---

## 📊 Los 20 Arquetipos

### Masculinos (12)
| Nombre | Título | Decisiones Primarias |
|--------|--------|---------------------|
| PEDRO | El Valiente Impulsivo | COURAGE, JUSTICE, LOYALTY |
| DAVID | El Adorador Guerrero | FAITH, COURAGE, WISDOM |
| MOISES | El Líder Liberador | LEADERSHIP, OBEDIENCE, SACRIFICE |
| JOSE | El Perdonador | MERCY, COMPASSION, ENDURANCE |
| JOB | El Resistente | ENDURANCE, FAITH, OBEDIENCE |
| SALOMON | El Sabio | WISDOM, STRATEGY, OBEDIENCE |
| JOSUE | El Conquistador | COURAGE, JUSTICE, LEADERSHIP |
| ELIAS | El Profeta Solitario | FAITH, OBEDIENCE, ENDURANCE |
| DANIEL | El Fiel en el Exilio | FAITH, OBEDIENCE, WISDOM |
| PABLO | El Transformado | TRANSFORMATION, WISDOM, LEADERSHIP |
| JUAN | El Amado | COMPASSION, MERCY, LOYALTY |
| ABRAHAM | El que Obedece sin Ver | OBEDIENCE, FAITH, SACRIFICE |

### Femeninos (8)
| Nombre | Título | Decisiones Primarias |
|--------|--------|---------------------|
| DEBORA | La Jueza Guerrera | LEADERSHIP, JUSTICE, STRATEGY |
| ESTER | La Estratega Valiente | STRATEGY, COURAGE, SACRIFICE |
| RUT | La Leal Inquebrantable | LOYALTY, COMPASSION, ENDURANCE |
| MARIA | La Portadora de lo Sagrado | FAITH, OBEDIENCE, COMPASSION |
| RAQUEL | La que Espera | ENDURANCE, FAITH, LOYALTY |
| ANA | La que Ora en Silencio | FAITH, ENDURANCE, OBEDIENCE |
| MARIA_MAGDALA | La Restaurada | TRANSFORMATION, LOYALTY, COMPASSION |
| JAEL | La que Actúa en el Momento Justo | STRATEGY, COURAGE, JUSTICE |

---

## 🔧 API Completa

### PlayerService

| Método | Descripción |
|--------|-------------|
| `createNewPlayer(name, telegramId?)` | Crea nuevo jugador |
| `recordDecision(type, desc, kingdom?, context?)` | Registra decisión |
| `getAvailableHintsForNPC(npcId)` | Obtiene pistas para NPC |
| `revealTrueName()` | Revela arquetipo dominante |
| `acceptOrRejectName(accept)` | Acepta/rechaza nombre |
| `getStatistics()` | Estadísticas de progreso |
| `getState()` | Estado completo actual |
| `getDominantArchetype()` | Arquetipo dominante actual |
| `advanceToAct(act)` | Avanza al acto especificado |
| `liberateKingdom(kingdomId)` | Registra reino liberado |
| `exportState()` | Exporta estado como JSON |
| `importState(json)` | Importa estado desde JSON |
| `resetProgress()` | Resetea todo el progreso |

### Funciones del Motor

| Función | Descripción |
|---------|-------------|
| `initializeArchetypeState()` | Inicializa estado vacío |
| `calculateDecisionImpact(decisionType)` | Calcula impacto de decisión |
| `updateArchetypeState(state, decision)` | Actualiza estado con decisión |
| `calculateDominantArchetype(scores)` | Calcula dominante/secundario |
| `createDecisionRecord(...)` | Crea registro de decisión |
| `revealTrueName(state)` | Prepara revelación |
| `getArchetypeStatistics(state)` | Estadísticas detalladas |

### Sistema de Pistas

| Función | Descripción |
|---------|-------------|
| `checkNPCHints(npcId, log, hints)` | Verifica pistas disponibles |
| `markHintAsPlayed(hints, hintId)` | Marca pista como vista |
| `getAllAvailableHints(log, hints)` | Todas las pistas disponibles |
| `getHintsByCategory(category, hints)` | Filtra por categoría |
| `resetAllHints(hints)` | Resetea todas las pistas |

---

## 🎮 Integración en el Juego

### En Combate

```typescript
// Cuando el jugador derrota un enemigo
function onEnemyDefeated(enemy, choice: 'kill' | 'spare' | 'interrogate') {
  const decisionMap = {
    kill: DecisionType.JUSTICE,
    spare: DecisionType.MERCY,
    interrogate: DecisionType.WISDOM
  };
  
  player.recordDecision(
    decisionMap[choice],
    `${choice === 'spare' ? 'Perdonó' : 'Ejecutó'} al enemigo`,
    currentKingdom,
    `Combate vs ${enemy.name}`
  );
}
```

### En Diálogo con NPCs

```typescript
// Antes de mostrar opciones de diálogo
function showNPCDialog(npcId: string) {
  const hints = player.getAvailableHintsForNPC(npcId);
  
  if (hints.length > 0) {
    // Mostrar pista sutil antes del diálogo normal
    displayFloatingText(hints[0].dialogLine);
    player.markHintViewed(hints[0].hintId);
  }
  
  // Continuar con diálogo normal...
}
```

### Al Final del Acto II

```typescript
// Cutscene de revelación
async function revealNameCutscene() {
  const revelation = player.revealTrueName();
  
  // Mostrar animación de YHWH hablando
  await playAnimation('yhwh_speaks');
  
  // Mostrar texto dramático
  showDialogBox(
    `Una voz retumba desde el cielo:\n\n` +
    `"¡${revelation.trueName}! ${revelation.title}."\n\n` +
    `${revelation.description}\n\n` +
    `— ${revelation.biblicalReference}"`
  );
  
  // Dar opción al jugador
  const accepted = await showChoice('¿Aceptas tu nombre?', ['Aceptar', 'Rechazar']);
  player.acceptOrRejectName(accepted);
  
  // Aplicar consecuencias visuales/narrativas
  applyNameConsequences(accepted);
}
```

---

## 📁 Próximos Pasos Sugeridos

1. **Integrar con frontend React/Three.js** — Crear componentes UI para mostrar pistas y estadísticas
2. **Conectar con Supabase** — Reemplazar localStorage con persistencia en la nube
3. **Añadir más pistas** — Expandir `NPC_HINTS_DATABASE` con 50+ líneas únicas
4. **Sistema de logros** — Desbloquear logros cuando un arquetipo alcanza cierto score
5. **UI del Libro de Versículos** — Implementar la Pokédex bíblica (siguiente feature prioritaria)

---

*"No temas, porque yo te redimí; te puse nombre, mío eres tú."* — Isaías 43:1
