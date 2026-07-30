# MundialQuiz

Juego de trivia sobre la historia de los Mundiales de fútbol, desarrollado como Proyecto Final de la materia Desarrollo y Arquitecturas Web (UAI, 2026). Construido con HTML5, CSS3 y JavaScript ES5 puro, sin frameworks ni librerías externas.

Repositorio: https://github.com/AlvaroCastellarin/Final_DAW_2026

## Funcionalidades

- Trivia con un banco de más de 80 preguntas sobre historia de los Mundiales (campeones, goleadores, sedes, récords).
- Sistema de vidas: 3 vidas iniciales, se pierde una por respuesta incorrecta.
- Checkpoint cada 10 preguntas respondidas: si falta alguna vida, se recupera 1 (tope 3).
- Puntaje con bonus por velocidad de respuesta (10 puntos base, +5 si se responde en 5s o menos, +2 si se responde entre 6 y 10s).
- Condición de victoria: agotar todo el banco de preguntas sin quedarse sin vidas.
- Ranking histórico persistente (top 10) usando LocalStorage, actualizado por nombre de jugador (sin duplicados).
- Pantalla de instrucciones con el detalle de todas las reglas.
- Formulario de contacto con validaciones en JavaScript, que abre el cliente de mail predeterminado del sistema.
- Sonidos ambientados (silbato, hinchada, gol, error, pitazo final).
- Diseño responsive con Flexbox (desktop, tablet y celular).

## Tecnologías

- HTML5
- CSS3 (Flexbox, sin Grid ni Float)
- JavaScript ES5
- LocalStorage para persistencia de datos

## Cómo jugar

1. Ingresá un nombre de al menos 3 caracteres y presioná "Jugar".
2. Respondé las preguntas de trivia lo más rápido y preciso posible.
3. La partida termina si te quedás sin vidas, o si respondés correctamente todas las preguntas del banco.
4. Al finalizar, tu resultado se guarda en el ranking histórico.

El detalle completo de las reglas (vidas, puntaje, bonus, checkpoint, ranking) está disponible en la pantalla de instrucciones (`instrucciones.html`) dentro del juego.

## Cómo ejecutarlo

No requiere instalación ni build. Solo abrir el siguente link:
https://alvarocastellarin.github.io/MundialQuiz/

## Estructura del proyecto

```
Final_DAW_2026/
├── index.html              Pantalla principal, juego y ranking
├── contacto.html            Formulario de contacto
├── instrucciones.html       Reglas del juego
├── css/
│   ├── reset.css
│   └── styles.css
├── js/
│   ├── datos_preguntas.js   Banco de preguntas
│   ├── validaciones.js      Validaciones de inputs y reglas del juego
│   ├── juego.js             Lógica pura del juego (sin DOM)
│   ├── modal.js             Apertura/cierre de modales
│   ├── local_storage.js     Persistencia del ranking
│   ├── interfaz.js          Manipulación del DOM
│   ├── principal.js         Orquestación de eventos (pantalla principal y juego)
│   └── contacto.js          Lógica del formulario de contacto
├── img/
└── sounds/
```

## Uso de Inteligencia Artificial

Para el desarrollo de este proyecto se utilizó Claude Code, con el modelo Claude Sonnet 5, como herramienta de asistencia y apoyo al aprendizaje.
## Autor

Alvaro Castellarin
