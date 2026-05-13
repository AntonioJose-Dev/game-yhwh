# 🚀 Guía de Despliegue de SHUV

## ✅ Verificación Pre-Deploy

### 1. Build Compila Sin Errores
```bash
npm run build
# Debe completar con exit code 0
```

### 2. Archivos Finales para Subir
Todo el contenido del directorio `/public/` debe subirse:

```
public/
├── index.html              # HTML principal con meta tags completos
├── manifest.json           # Configuración PWA
├── sw.js                   # Service Worker para offline
├── index.js                # Punto de entrada JS compilado
├── index.js.map            # Source maps (opcional en prod)
├── assets/                 # Iconos e imágenes (crear placeholders)
│   ├── icon-192.png        # Icono PWA 192x192
│   ├── icon-512.png        # Icono PWA 512x512
│   └── og-image.png        # Imagen para redes sociales (1200x630)
├── sounds/                 # Efectos de sonido (opcional)
├── core/                   # Módulos del núcleo
│   ├── archetype-configs.js
│   ├── archetype-engine.js
│   ├── kingdoms-config.js
│   └── verses-config.js
├── services/               # Servicios del juego
│   ├── player-service.js
│   ├── combat-service.js
│   ├── verses-service.js
│   ├── game-service.js
│   ├── npc-hint-system.js
│   ├── revelation-service.js
│   ├── ending-service.js
│   ├── audio-service.js
│   ├── combat-visuals.js
│   ├── verses-ui.js
│   ├── revelation-ui.js
│   ├── ending-ui.js
│   └── share-service.js
└── persistence/            # Persistencia
    └── telegram-storage.js
```

---

## 📋 Checklist de Configuración en Vercel/Netlify

### Vercel (Recomendado)

#### Paso 1: Crear Proyecto
```bash
# Instalar Vercel CLI si no lo tienes
npm i -g vercel

# Login
vercel login

# Deploy
cd /workspace
vercel --prod
```

#### Paso 2: Configuración en Dashboard de Vercel
- [ ] **Project Name**: `shuv-telegram-mini-app`
- [ ] **Framework Preset**: `Other` (es estático)
- [ ] **Build Command**: `npm run build`
- [ ] **Output Directory**: `public`
- [ ] **Install Command**: `npm install`

#### Paso 3: Variables de Entorno (si aplica)
- No se requieren variables para CloudStorage de Telegram
- Opcional: `TELEGRAM_BOT_TOKEN` para futuras integraciones

#### Paso 4: Dominio Personalizado (Opcional)
- [ ] Configurar dominio propio en Vercel Dashboard
- [ ] Actualizar DNS según instrucciones de Vercel

#### Paso 5: Verificar Deploy
- [ ] Abrir URL de producción en navegador
- [ ] Verificar que carga sin errores en consola
- [ ] Probar en móvil con Telegram

### Netlify (Alternativa)

#### Paso 1: Conectar Repositorio
- Ir a [Netlify](https://netlify.com)
- "Add new site" → "Import an existing project"
- Conectar GitHub y seleccionar repo

#### Paso 2: Configuración de Build
- **Base directory**: (vacío)
- **Build command**: `npm run build`
- **Publish directory**: `public`

#### Paso 3: Deploy Manual (sin Git)
```bash
npm install -g netlify-cli
cd /workspace
netlify deploy --prod --dir=public
```

---

## 🤖 Checklist para @BotFather en Telegram

### Paso 1: Acceder a BotFather
- Abrir Telegram y buscar `@BotFather`
- Iniciar conversación con `/start`

### Paso 2: Crear Nuevo Bot (si no existe)
```
/newbot
Nombre: SHUV - Tu Nombre Verdadero
Username: shuv_game_bot (debe terminar en _bot)
```

### Paso 3: Configurar Mini App
```
/newapp
Seleccionar tu bot
URL: https://tu-dominio.vercel.app
Nombre corto: SHUV
Descripción: Descubre tu nombre verdadero
Photo: (subir imagen 640x360 opcional)
```

### Paso 4: Configurar Botón de Menú
```
/setmenubutton
Seleccionar tu bot
URL: https://tu-dominio.vercel.app
Texto: Jugar SHUV
```

### Paso 5: Configurar Inline Button (Opcional)
```
/setinlinebutton
Seleccionar tu bot
Texto: Jugar SHUV
URL: https://tu-dominio.vercel.app
```

### Paso 6: Verificar Configuración
- [ ] Bot responde a `/start`
- [ ] Botón "Jugar" abre la Mini App
- [ ] La app carga dentro de Telegram
- [ ] CloudStorage funciona (probar guardando progreso)

### Paso 7: Obtener Token del Bot
```
/api/getBotToken
Copiar token para futuras integraciones backend
```

---

## 🔍 Verificación de Meta Tags, Manifest y Service Worker

### Meta Tags en `<head>`
Verificar que `index.html` incluya:

```html
<!-- Título y Descripción -->
<meta name="title" content="SHUV - Tu Nombre Verdadero">
<meta name="description" content="...">

<!-- Telegram -->
<meta name="telegram:channel" content="@shuv_game">

<!-- Open Graph -->
<meta property="og:title" content="SHUV - Tu Nombre Verdadero">
<meta property="og:description" content="...">
<meta property="og:image" content="https://dominio/assets/og-image.png">
<meta property="og:url" content="https://dominio">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="SHUV - Tu Nombre Verdadero">
<meta name="twitter:image" content="https://dominio/assets/og-image.png">

<!-- PWA -->
<meta name="theme-color" content="#6366f1">
<meta name="apple-mobile-web-app-capable" content="yes">
<link rel="manifest" href="/manifest.json">
<link rel="icon" type="image/png" sizes="192x192" href="/assets/icon-192.png">
<link rel="apple-touch-icon" href="/assets/icon-192.png">
```

### manifest.json
Verificar campos requeridos:
- [ ] `name`: Nombre completo del juego
- [ ] `short_name`: Nombre corto para home screen
- [ ] `start_url`: `/index.html`
- [ ] `display`: `standalone`
- [ ] `background_color`: Color de fondo
- [ ] `theme_color`: Color del tema (#6366f1)
- [ ] `icons`: Array con iconos 192x192 y 512x512

### Service Worker (sw.js)
Verificar funcionalidad:
- [ ] Se registra correctamente (`navigator.serviceWorker.register`)
- [ ] Cachea assets principales en `install`
- [ ] Limpia cachés antiguas en `activate`
- [ ] Intercepta fetch requests en `fetch`
- [ ] Funciona offline después de primera carga

**Test de Service Worker:**
```javascript
// En consola del navegador
navigator.serviceWorker.getRegistrations().then(regs => {
  console.log('SW registrados:', regs);
});

// Verificar caché
caches.keys().then(names => console.log('Cachés:', names));
```

---

## ⚠️ Riesgos Finales Antes de Publicar

### Críticos (Bloqueantes)
- [ ] **HTTPS obligatorio**: Telegram Mini Apps requieren HTTPS (Vercel/Netlify lo proveen automático)
- [ ] **CloudStorage no disponible**: Verificar que `Telegram.WebApp.CloudStorage` esté accesible
- [ ] **CORS errors**: Asegurar que todos los recursos carguen desde el mismo dominio o tengan CORS habilitado

### Altos (Pueden romper experiencia)
- [ ] **Iconos faltantes**: PWA no funcionará sin iconos reales (crear placeholders temporales)
- [ ] **Service Worker falla**: Si hay errores en sw.js, la app no cargará offline
- [ ] **Meta tags incorrectos**: Compartir en redes mostrará preview roto

### Medios (Degradan experiencia)
- [ ] **Sin música/sounds**: El juego es jugable pero menos inmersivo
- [ ] **Optimización móvil**: Verificar que botones sean táctiles (>48px)
- [ ] **Tiempo de carga**: Assets muy grandes pueden tardar en 3G

### Bajos (Mejorables post-lanzamiento)
- [ ] **Analytics**: No hay tracking de usuarios (añadir post-lanzamiento)
- [ ] **Error reporting**: No hay sistema de reporte de bugs
- [ ] **A/B testing**: No se pueden testear variaciones de UI

---

## 🧪 Testing Pre-Lanzamiento

### Checklist de Pruebas

#### Funcionalidad Básica
- [ ] El juego carga en < 3 segundos en 4G
- [ ] El jugador puede iniciar sesión con Telegram
- [ ] El progreso se guarda automáticamente
- [ ] El progreso se restaura al recargar

#### Sistemas de Juego
- [ ] Mapa de etapas muestra correctamente
- [ ] Combate inicia y termina sin errores
- [ ] Versículos se desbloquean al progresar
- [ ] Revelación del nombre ocurre en Acto II
- [ ] Ambos finales (aceptar/rechazar) funcionan

#### Persistencia
- [ ] CloudStorage guarda estado correctamente
- [ ] Estado persiste entre sesiones
- [ ] New Game+ respeta datos anteriores

#### UI/UX
- [ ] Navegación entre pantallas es fluida
- [ ] Botones son táctiles y responsivos
- [ ] Textos son legibles en móvil
- [ ] Animaciones corren a 60fps

#### Redes Sociales
- [ ] Compartir en Telegram genera preview correcto
- [ ] Compartir en WhatsApp/Twitter funciona
- [ ] OG image se muestra correctamente

#### PWA
- [ ] Se puede instalar en pantalla de inicio
- [ ] Funciona offline (al menos menú principal)
- [ ] Splash screen aparece al abrir

---

## 🎯 Pasos Finales para Publicar

### Día del Lanzamiento

1. **Mañana Temprano**
   ```bash
   # Build final
   npm run build
   
   # Deploy a producción
   vercel --prod
   
   # Verificar URL de producción
   # https://shuv-telegram-mini-app.vercel.app
   ```

2. **Configurar Bot**
   - Abrir @BotFather
   - Ejecutar comandos de configuración
   - Probar flujo completo

3. **Testing Final**
   - Probar en 3 dispositivos diferentes
   - Probar en iOS y Android
   - Verificar CloudStorage en cada uno

4. **Lanzamiento**
   - Anunciar en canales de Telegram
   - Compartir en redes sociales
   - Monitorear logs de Vercel

5. **Post-Lanzamiento (Primeras 24h)**
   - Revisar analytics básicos
   - Responder feedback de usuarios
   - Hotfix si hay bugs críticos

---

## 📞 Soporte y Contacto

### Recursos Oficiales
- **Telegram Bot API**: https://core.telegram.org/bots/api
- **Telegram Web App**: https://core.telegram.org/bots/webapps
- **Vercel Docs**: https://vercel.com/docs
- **PWA Guide**: https://web.dev/progressive-web-apps/

### Canales de Comunicación
- Telegram del juego: `@shuv_game`
- Email de soporte: soporte@shuv.game (configurar cuando exista)

---

## ✨ ¡Listo para Lanzar!

Si todos los checkboxes están marcados, SHUV está listo para llegar a usuarios reales.

**¡Que YHWH bendiga este proyecto!** 🙏
