# SHUV - MVP para Telegram Mini App

## ✅ Implementación Completada

### Archivos Creados/Modificados

#### **Nuevos Archivos**
1. `/workspace/src/persistence/telegram-storage.ts` - Persistencia con Telegram CloudStorage + fallback localStorage
2. `/workspace/src/types/ui-types.ts` - Tipos para UI, etapas y navegación
3. `/workspace/src/core/kingdoms-config.ts` - Configuración de los 7 Reinos y 21 etapas
4. `/workspace/src/services/game-service.ts` - Servicio principal que coordina todo el juego
5. `/workspace/src/ui/index.html` - UI completa mobile-first para Telegram Mini App
6. `/workspace/src/ui/app.ts` - Punto de entrada que exporta todas las APIs
7. `/workspace/package.json` - Configuración del proyecto
8. `/workspace/tsconfig.json` - Configuración de TypeScript

#### **Archivos Existentes Modificados**
- `/workspace/src/core/archetype-configs.ts` - Corregido tipo DECISION y añadido DECISION_TYPES
- `/workspace/src/core/archetype-engine.ts` - Corregidos tipos de retorno
- `/workspace/src/services/player-service.ts` - Corregido tipo de importState

---

## 📁 Estructura del Proyecto

```
/workspace
├── src/
│   ├── core/
│   │   ├── archetype-configs.ts      # Configuración de 20 arquetipos
│   │   ├── archetype-engine.ts       # Motor de cálculo de arquetipos
│   │   └── kingdoms-config.ts        # 7 Reinos con 21 etapas
│   ├── types/
│   │   ├── archetypes.ts             # Tipos centrales del sistema
│   │   └── ui-types.ts               # Tipos para UI y navegación
│   ├── services/
│   │   ├── player-service.ts         # Gestión del estado del jugador
│   │   ├── npc-hint-system.ts        # Sistema de pistas de NPCs
│   │   └── game-service.ts           # Servicio principal del juego
│   ├── persistence/
│   │   └── telegram-storage.ts       # Persistencia Telegram CloudStorage
│   └── ui/
│       ├── index.html                # UI completa (mapa, perfil, versículos)
│       ├── app.ts                    # Exportaciones para la UI
│       ├── index.js                  # JS compilado
│       ├── core/                     # JS compilado
│       ├── services/                 # JS compilado
│       ├── types/                    # JS compilado
│       └── persistence/              # JS compilado
├── package.json
└── tsconfig.json
```

---

## 🎮 Características Implementadas

### 1. **Persistencia con Telegram CloudStorage**
- Guarda/carga automática del progreso
- Fallback a localStorage si Telegram no está disponible
- Estado extendido con: FE, etapa actual, etapas completadas, inventario, estadísticas

### 2. **Mapa de Etapas Visual**
- 7 Reinos espirituales (Orgullo, Avaricia, Lujuria, Ira, Gula, Envidia, Pereza)
- 21 etapas totales (3 por reino)
- Nodos visuales con estados: LOCKED, AVAILABLE, CURRENT, COMPLETED
- Animación pulse para etapas disponibles/actuales
- Modal de información de etapa

### 3. **Navegación Completa**
- **Mapa** 🗺️ - Vista principal de progreso
- **Perfil** 👤 - Estadísticas del jugador, arquetipo, FE
- **Versículos** 📖 - Libro de versículos bíblicos (placeholder)

### 4. **Sistema de Arquetipos Integrado**
- 20 arquetipos bíblicos (12 masculinos, 8 femeninos)
- Puntuación por tipo de decisión
- NPCs dan pistas sutiles basadas en decisiones
- Cálculo automático del arquetipo dominante
- Preparado para revelación del nombre verdadero

### 5. **Estado de FE (Fe Espiritual)**
- Barra visual en header
- Nivel inicial: 50/100
- Recompensas por completar etapas
- Máximo: 100

### 6. **Tema Visual Dinámico**
- DEFAULT - Tema espiritual estándar
- LIGHT_REVEALED - Si acepta su nombre verdadero
- DARK_REJECTED - Si rechaza su nombre verdadero

---

## 🚀 Cómo Usar

### Desarrollo Local
```bash
cd /workspace
npm install
npm run build
npm run serve
```

Abrir `http://localhost:3000` en el navegador.

### En Telegram
1. Subir `src/ui/` a un hosting estático (Vercel, Netlify, GitHub Pages)
2. Crear bot en Telegram via @BotFather
3. Configurar Web App URL apuntando al hosting
4. Los usuarios acceden vía el botón del bot

---

## 📊 Datos Guardados por Usuario

```typescript
interface ExtendedPlayerState {
  // Datos base del jugador
  id: string;
  telegramId?: string;
  humanName: string;
  trueName: ArchetypeName | null;
  acceptedName: boolean | null;
  
  // Sistema de arquetipos
  archetypeState: ArchetypeState;
  decisionLog: DecisionRecord[];
  
  // Progreso de etapas
  currentStage: number;
  completedStages: number[];
  currentAct: 1 | 2 | 3;
  kingdomsLiberated: string[];
  
  // Estado espiritual
  feLevel: number; // 0-100
  
  // Inventario
  inventory: {
    scrolls: string[];
    armorPieces: string[];
    oil: number;
    mana: number;
  };
  
  // Estadísticas
  stats: {
    battlesWon: number;
    battlesLost: number;
    decisionsMade: number;
    playTimeSeconds: number;
  };
}
```

---

## 🔧 Qué Falta Conectar

### **Sistema de Combate** (Prioridad Alta)
El modal de combate actualmente muestra un placeholder. Para implementarlo:

1. **Crear `/workspace/src/services/combat-service.ts`**:
   - Usar versículos como ataques
   - Sistema de turnos
   - Cálculo de daño basado en FE
   - Armadura de Efesios como defensa

2. **Integrar con Libro de Versículos**:
   - Desbloquear versículos al progresar
   - Cada versículo = tipo de ataque diferente
   - Efectividad vs diferentes enemigos

3. **UI de Combate**:
   - Nueva pantalla `/workspace/src/ui/battle.html` o componente dinámico
   - Botones de acción: Atacar, Orar, Defender, Huir
   - Barra de HP del enemigo
   - Log de combate

### **Libro de Versículos Completo** (Prioridad Media)
Actualmente hay 1 versículo hardcoded. Para completarlo:

1. **Crear `/workspace/src/core/verses-config.ts`**:
   - 50+ versículos organizados por categoría
   - Referencia bíblica completa
   - Tipo de daño/effecto
   - Requisito de desbloqueo

2. **UI Mejorada**:
   - Filtrar por categoría
   - Mostrar cuáles están desbloqueados
   - Preview de efectos en combate

### **Editor de Personaje** (Prioridad Baja)
- Pantalla inicial antes del Acto 1
- Presets bíblicos (David, Ester, etc.)
- Personalización de nombre humano

### **Muro de Testimonios** (Prioridad Baja)
- Requiere backend (Supabase)
- Los jugadores dejan su nombre revelado
- Mensajes anónimos inspiradores

---

## 🎯 Próximos Pasos Recomendados

1. **Probar en Telegram**:
   - Deploy a Vercel/Netlify
   - Configurar bot de Telegram
   - Testear persistencia real

2. **Implementar Combate Básico**:
   - 3 tipos de ataques (versículos)
   - 1 enemigo por etapa
   - Sistema simple de victoria/derrota

3. **Pulir UI**:
   - Transiciones entre pantallas
   - Sonidos básicos
   - Feedback visual de decisiones

4. **Content**:
   - Escribir diálogos de NPCs
   - Balancear puntuaciones de arquetipos
   - Añadir más versículos

---

## 📝 Notas Técnicas

- **Mobile-first**: Todo el CSS está optimizado para pantallas táctiles
- **Sin dependencias externas**: Solo TypeScript nativo
- **Módulos ES6**: Compatible con navegadores modernos
- **Telegram WebApp SDK**: Integrado para CloudStorage y datos de usuario

---

## ✨ Estado Actual

✅ **Funcional**: El jugador puede:
- Iniciar sesión con Telegram
- Ver mapa de etapas
- Navegar entre pantallas
- Ver su perfil y estadísticas
- Progreso se guarda automáticamente

⏳ **Pendiente**:
- Sistema de combate jugable
- Libro de versículos interactivo
- Revelación del nombre verdadero (final del Acto II)
- Consecuencias visuales de aceptar/rechazar nombre
