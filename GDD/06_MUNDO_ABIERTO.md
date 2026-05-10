# Mundo Abierto — Estructura y Exploración

## Concepto

Un solo mundo continuo en 3D (Three.js) dividido en 7 zonas.
No hay muros invisibles — hay **barreras espirituales**.
Sin la pieza de armadura correcta, no puedes entrar. Como en Zelda.

---

## Mapa del Mundo

| Zona | Reino | Barrera de Entrada | Ambiente Visual |
|------|-------|--------------------|-----------------|
| Centro | Ciudad de Refugio | Libre desde el inicio | Luz dorada, mercado, NPCs |
| Norte | Reino de la Mentira | Cinto de la Verdad | Niebla densa, espejos rotos |
| Sur | Reino del Miedo | Yelmo de la Salvación | Oscuridad total, sombras vivas |
| Este | Reino de la Acusación | Coraza de Justicia | Lluvia constante, tribunal en ruinas |
| Oeste | Reino de la Duda | Escudo de la Fe | Desierto vacío, voces en el viento |
| Arriba | Reino del Silencio | Espada del Espíritu | Montaña helada, YHWH parece ausente |
| Abajo | Reino de las Tinieblas | Armadura completa | Trono del Adversario |

---

## Ciudad de Refugio — El Centro

- Punto de inicio de todos los jugadores
- NPCs con diálogos, comerciantes, misiones
- **Pozo de YHWH** — lugar donde se escucha la voz
- **Mural vivo** — se completa conforme liberas Reinos
- Siempre accesible, el jugador puede volver en cualquier momento

---

## Exploración — Estilo Pokémon + Zelda

1. Caminas por el mundo en 3D
2. Ves enemigos moviéndose en el mapa
3. Te acercas → entras en pantalla de combate por turnos
4. Ganas → vuelves al mundo, algo cambia
5. YHWH habla en el mundo, no en un menú

---

## Stack Técnico

| Capa | Tecnología |
|------|------------|
| Motor 3D | Three.js |
| Física / movimiento | Cannon.js |
| Combate por turnos | Lógica JS pura |
| UI / HUD | HTML + CSS sobre canvas |
| Backend | Supabase |
| Modelos 3D | glTF / .glb |
| Plataforma | Telegram Mini App |
