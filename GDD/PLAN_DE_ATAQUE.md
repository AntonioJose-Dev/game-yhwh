# Plan de Ataque — Implementación con Qwen Coder

## 🎯 Objetivo
Implementar las 4 funcionalidades de mayor impacto para SHUV siguiendo las sugerencias de mejora aceptadas.

---

## 🔴 FASE 1 — Alta Prioridad (Primero)

### 1. Sistema de Pistas de Arquetipo
**Archivo:** `GDD/10_NPCS.md` → Sección actualizada

#### Diseño Técnico
- Cada NPC tiene un array de `dialog_hints` que se activan según decisiones del jugador
- Las pistas son sutiles, nunca revelan el arquetipo directamente
- Sistema de trigger basado en `decision_log` del jugador

#### Estructura de Datos
```typescript
interface NPCHint {
  id: string;
  npc_id: string; // Ej: "noe", "debora"
  trigger_condition: {
    decision_type: "mercy" | "justice" | "wisdom" | "sacrifice";
    min_count: number;
    kingdom?: string;
  };
  dialog_line: string; // Ej: "Veo que has perdonado cuando podías vengarte... eso es sabio"
  archetype_hint: "sabiduria" | "justicia" | "fe" | "sacrificio";
  played: boolean;
}
```

#### Diálogos por Arquetipo
| Arquetipo | Pista Sutil (NPC) | Contexto |
|-----------|------------------|----------|
| **Sabiduría** | *"Has elegido entender antes de juzgar. Eso viene de lo Alto."* | Después de perdonar 3 enemigos |
| **Justicia** | *"Tu espada no tiembla ante la maldad. YHWH ve tu corazón recto."* | Después de derrotar 5 enemigos sin huir |
| **Fe** | *"Te arrodillas más de lo que luchas. Eso mueve montañas."* | Después de orar 10 veces en combate |
| **Sacrificio** | *"Das lo que no tienes. Como la viuda del templo."* | Después de dar Maná a 3 NPCs |

#### Implementación
- Modificar sistema de diálogos de NPCs para verificar `decision_log`
- Añadir método `checkAndPlayHint(npc_id, player)` en `NPCService`
- UI: Indicador sutil cuando un NPC tiene pista disponible (icono de luz parpadeante)

---

### 2. Libro de Versículos (Pokédex Bíblica)
**Archivo:** `GDD/07_COMBATE.md` → Sección ampliada

#### Diseño Técnico
- Menú accesible desde pausa o Ciudad de Refugio
- Muestra versículos desbloqueados, faltantes, y efectividad por enemigo
- Filtrado por Reino, tipo de enemigo, y stats requeridos

#### Estructura de Datos
```typescript
interface VerseEntry {
  id: string;
  reference: string; // Ej: "Efesios 6:17"
  text: string; // Texto completo del versículo
  damage_base: number;
  effective_against: string[]; // IDs de enemigos
  unlocked: boolean;
  times_used: number;
  kills_with_verse: number;
}

interface VerseBook {
  total_verses: number;
  unlocked_count: number;
  entries: VerseEntry[];
  filters: {
    kingdom?: string;
    enemy_type?: string;
    unlocked_only?: boolean;
  };
}
```

#### Ejemplo de Entrada
```json
{
  "id": "job_41",
  "reference": "Job 41:1-34",
  "text": "¿Puedes sacar al Leviatán con anzuelo?...",
  "damage_base": 25,
  "effective_against": ["leviatan", "bestia_marina", "orgullo"],
  "unlocked": true,
  "times_used": 12,
  "kills_with_verse": 5
}
```

#### Funcionalidades
- **Vista de Colección:** Grid con iconos de versículos (desbloqueados = iluminados, faltantes = silueta)
- **Detalle de Versículo:** Al hacer clic muestra texto, efectividad, y estadísticas de uso
- **Filtro Inteligente:** "Mostrar versículos efectivos contra [enemigo actual]"
- **Progreso:** "% completado por Reino"

#### Implementación
- Crear componente `VerseBookUI` en frontend
- Endpoint Supabase: `GET /verses?player_id=xxx&filters=yyy`
- Método `unlockVerse(verse_id, player_id)` tras derrotar enemigos específicos

---

## 🟡 FASE 2 — Media Prioridad (Después)

### 3. Consecuencias Visibles de Aceptar/Rechazar Nombre
**Archivo:** `GDD/08_PROGRESION.md` → Sección ampliada

#### Diseño Técnico
- Sistema de flags persistentes: `accepted_name: boolean`
- Cambios visuales en tiempo real según decisión
- NPCs reaccionan diferente en diálogos

#### Efectos de Aceptar
```typescript
const ACCEPT_EFFECTS = {
  visual: {
    character_glow: true, // Shader de brillo dorado
    world_brightness: +0.2, // Iluminación global más cálida
    particle_effect: "light_sparkles" // Partículas sutiles alrededor del personaje
  },
  npc_behavior: {
    dialogue_tone: "respectful", // Diálogos más reverentes
    new_interactions: ["bendicion", "profecia"], // Nuevas opciones de diálogo
    disappeared: [] // Nadie desaparece
  },
  gameplay: {
    fe_bonus: "+10%", // Bonus pasivo a FE
    unlock_path: "divine_intervention" // Ruta narrativa especial
  }
};
```

#### Efectos de Rechazar
```typescript
const REJECT_EFFECTS = {
  visual: {
    character_glow: false,
    world_brightness: -0.15, // Mundo ligeramente más oscuro
    particle_effect: "shadow_drift" // Sombras sutiles
  },
  npc_behavior: {
    dialogue_tone: "concerned", // Diálogos preocupados
    new_interactions: ["advertencia", "llamado"], // NPCs intentan convencerte
    disappeared: ["noe", "samuel"] // Algunos NPCs desaparecen temporalmente
  },
  gameplay: {
    freedom_bonus: "total", // Libertad narrativa completa
    unlock_path: "rogue_spiritual" // Ruta alternativa
  }
};
```

#### Implementación
- Modificar shader del personaje para aceptar `uniform float glow_intensity`
- Sistema de iluminación global con `ambient_light_multiplier`
- NPCService verifica `player.accepted_name` antes de cargar diálogos
- Guardar decisión en Supabase: `players.accepted_name = boolean`

---

### 4. LOD y Optimización 3D para Telegram
**Archivo:** `GDD/13_LANZAMIENTO.md` → Sección técnica

#### Estrategia de Optimización

##### LOD (Level of Detail) Agresivo
```typescript
const LOD_CONFIG = {
  high: { distance: 0-10, polygons: 10000, texture: "2048x2048" },
  medium: { distance: 10-25, polygons: 3000, texture: "1024x1024" },
  low: { distance: 25-50, polygons: 800, texture: "512x512" },
  ultra_low: { distance: 50+, polygons: 200, texture: "256x256" }
};
```

##### Texturas Comprimidas (Basis Universal)
- Convertir todas las texturas a `.basis`
- Reducción: 70-80% vs PNG/JPG
- Calidad mantenido con compresión GPU-native

##### Modo 2.5D Opcional
- Toggle en settings: "Modo Rendimiento"
- Reemplaza modelos 3D complejos con sprites 2.5D (billboards)
- Ideal para dispositivos antiguos o conexión lenta

##### Cache Local con IndexedDB
```typescript
// Estructura de cache
const ASSET_CACHE = {
  models: "/indexeddb/shuv/models/",
  textures: "/indexeddb/shuv/textures/",
  audio: "/indexeddb/shuv/audio/"
};

// Estrategia
- Precargar assets críticos en primer login
- Lazy load para assets secundarios
- Invalidar cache solo cuando version > current_version
```

#### Implementación
- Integrar `three.js` con `LOD` class nativa
- Pipeline de conversión de texturas a Basis (script de build)
- Componente `PerformanceSettings` con toggle 2.5D
- Servicio `AssetCacheService` con IndexedDB wrapper

---

## 🟢 FASE 3 — Baja Prioridad (Al Final)

### 5. Muro de Testimonios
**Archivo:** `GDD/10_NPCS.md` → Nueva sección

#### Diseño Técnico
- Muro físico en Ciudad de Refugio (objeto 3D interactuable)
- Jugadores pueden dejar mensaje anónimo con su nombre revelado
- Sincronizado vía Supabase Realtime

#### Estructura de Datos
```typescript
interface Testimony {
  id: string;
  player_id: string; // Encriptado, no visible
  true_name: string; // El nombre revelado (ej: "León de Judá")
  message: string; // Máx 140 caracteres
  kingdom_source: string; // Reino donde lo recibió
  timestamp: Date;
  likes: number; // Otros jugadores pueden dar "Amén"
  language: string; // Para filtrar por idioma
}
```

#### Reglas
- Solo 1 testimonio por jugador
- Moderación automática: filtro de palabras prohibidas
- Opción de reportar testimonios inapropiados
- Límite de 50 testimonios visibles (rotación aleatoria)

#### Implementación
- Componente `TestimonyWallUI` con scroll vertical
- Endpoint Supabase: `POST /testimonies`, `GET /testimonies?limit=50`
- Filtro de lenguaje automático (API de moderación)

---

### 6. Presets Bíblicos en Editor de Personaje
**Archivo:** `GDD/05_PERSONAJE.md` → Sección ampliada

#### Diseños de Presets
| Preset | Figura Bíblica | Características Visuales |
|--------|---------------|-------------------------|
| **El Pastor** | David | Joven, cabello rizado, piel bronceada, ojos verdes |
| **La Guerrera** | Débora | Mujer madura, cabello trenzado, mirada firme |
| **El Sabio** | Salomón | Hombre mayor, barba blanca, túnica rica |
| **El Profeta** | Elías | Delgado, cabello largo desordenado, capa raída |
| **La Reina** | Ester | Elegante, joyas sutiles, postura regia |
| **El Pescador** | Pedro | Robusto, manos callosas, sonrisa cálida |

#### Implementación
- Botón "Usar Preset" en editor de personaje
- Aplica sliders preconfigurados (altura, complexión, rasgos)
- Luego permite personalización fina manual
- Guardar preset como base en `player.character_preset`

---

## 📅 Cronograma Estimado

| Fase | Funcionalidad | Días | Dependencias |
|------|--------------|------|--------------|
| **Fase 1** | Pistas de Arquetipo | 3-4 días | Sistema de diálogos existente |
| **Fase 1** | Libro de Versículos | 5-6 días | Base de datos de versículos |
| **Fase 2** | Consecuencias Visuales | 4-5 días | Shaders, sistema de iluminación |
| **Fase 2** | Optimización 3D | 7-10 días | Pipeline de assets |
| **Fase 3** | Muro de Testimonios | 2-3 días | Supabase Realtime |
| **Fase 3** | Presets Bíblicos | 1-2 días | Editor de personaje |

**Total estimado:** 22-30 días de desarrollo

---

## 🛠️ Stack Tecnológico

| Área | Tecnología |
|------|-----------|
| Frontend 3D | Three.js + React Three Fiber |
| Backend | Supabase (PostgreSQL + Realtime) |
| Cache | IndexedDB + Dexie.js |
| Texturas | Basis Universal + Sharp (conversión) |
| Telegram Mini App | Telegram Web Apps SDK |
| Build | Vite + TypeScript |

---

## ✅ Criterios de Aceptación

### Sistema de Pistas
- [ ] NPCs comentan decisiones después de 3+ acciones del mismo tipo
- [ ] Diálogos nunca revelan arquetipo directamente
- [ ] Indicador visual cuando pista está disponible
- [ ] Cada arquetipo tiene al menos 5 pistas únicas

### Libro de Versículos
- [ ] Muestra todos los versículos del juego (desbloqueados y faltantes)
- [ ] Filtrado por enemigo y Reino funciona
- [ ] Estadísticas de uso por versículo son precisas
- [ ] UI responsive en móvil y desktop

### Consecuencias Visuales
- [ ] Brillo del personaje visible inmediatamente tras decisión
- [ ] Cambio de iluminación global perceptible
- [ ] NPCs cambian diálogos según decisión
- [ ] Algunos NPCs desaparecen si rechaza (y reaparecen si acepta después)

### Optimización 3D
- [ ] LOD cambia suavemente sin popping visible
- [ ] Texturas Basis cargan 70% más rápido
- [ ] Modo 2.5D reduce FPS drop en dispositivos antiguos
- [ ] Cache IndexedDB persiste entre sesiones

### Muro de Testimonios
- [ ] Jugadores pueden dejar 1 testimonio
- [ ] Mensajes aparecen en tiempo real para otros jugadores
- [ ] Filtro de lenguaje funciona
- [ ] Sistema de "Amén" (likes) operativo

### Presets Bíblicos
- [ ] 6 presets disponibles en editor
- [ ] Aplicar preset no bloquea personalización posterior
- [ ] Sliders reflejan valores del preset al seleccionarlo

---

## 🚀 Próximos Pasos Inmediatos

1. **Crear estructura de carpetas** para nuevas funcionalidades
2. **Definir schema de Supabase** para versículos, decisiones, testimonios
3. **Escribir scripts de conversión** de texturas a Basis
4. **Diseñar UI mockups** para Libro de Versículos y Muro de Testimonios
5. **Comenzar implementación** con Sistema de Pistas (menor complejidad, alto impacto)
