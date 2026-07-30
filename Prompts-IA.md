# Prompts IA

**Herramienta utilizada:** Claude Code
**Modelo utilizado:** Claude Sonnet 5

Este documento reúne los prompts más relevantes utilizados durante el desarrollo de MundialQuiz, junto con un resumen de lo que se generó/explicó en cada caso y el uso que se le dio. Las explicaciones de uso están escritas en primera persona por el alumno — reflejan por qué se pidió cada cosa y qué se entendió a partir de la respuesta.

> Nota: esta es una selección de los intercambios más importantes de una conversación mucho más larga (incluyó también revisiones de código pregunta por pregunta, ajustes visuales menores y pruebas de funcionamiento paso a paso que no se listan todas acá para no hacer el documento muy extenso).

---

## 1. Planteo inicial del proyecto

**Prompt:** *"No quiero que me lo resuelvas, sino que ayudes a hacerlo"* (a partir de pegar el enunciado del examen).

**Respuesta generada (resumen):** Se armó un plan de trabajo por etapas: estructura de carpetas, separación de archivos JS por responsabilidad (datos, validaciones, lógica del juego, interfaz, modal, localStorage, principal), y un orden sugerido de desarrollo.

**Uso que le di:** Esto me sirvió a modo de orientación; al principio no sabía por dónde empezar, y esto me ayudó a darme una guía. Además, le pedí a la herramienta que no hiciera el trabajo por mí, sino que me diera asistencia, para que todo el proyecto tenga mi criterio y no sea algo automatizado al 100%.

---

## 2. Diseño de la mecánica del juego (vidas, checkpoint, puntaje)

**Prompt:** Discusión iterativa sobre la condición de victoria/derrota, agregando reglas propias: bonus de puntos por responder rápido, un checkpoint que regenera una vida cada 10 preguntas respondidas, y que la victoria (agotar el banco completo) sea prácticamente inalcanzable a propósito.

**Respuesta generada (resumen):** Se definió en conjunto la lógica completa: 3 vidas iniciales, -1 por error, checkpoint cada 10 preguntas (recupera 1 vida si falta alguna, tope 3), puntaje base +10 con bonus +5 (≤5s) o +2 (6-10s), y victoria = agotar el banco sin llegar a 0 vidas.

**Uso que le di:** En esta instancia dudaba cómo podía crear las condiciones del juego, ya que lo que pedía el enunciado no encajaba mucho con la idea que tenía desde un principio. Claude ayudó con este problema, aunque terminé adaptando la idea con mi propio criterio, sin seguir sus recomendaciones al pie de la letra.

---

## 3. Diseño del ranking y criterio de desempate

**Prompt:** Iteración sobre cómo debía comportarse el ranking al reaparecer un mismo nombre (rechazar vs. actualizar solo si mejora), y definición del orden de desempate (puntaje → porcentaje de aciertos → correctas → tiempo → fecha).

**Respuesta generada (resumen):** Se explicó la limitación de LocalStorage (no hay forma de distinguir "misma persona" de "otra persona con el mismo nombre" sin login), y se cerró el criterio de actualizar el registro solo si el puntaje nuevo es mejor.

**Uso que le di:** Acá me surgió la duda de cómo hacer que un usuario que quiera jugar dos veces pudiera mejorar su récord, y Claude me dio una mano con eso. Además, cuando le planteé la duda, me preguntó sobre los criterios de desempate, algo que no había pensado y que terminé formulando en ese momento.

---

## 4. Corrección de sintaxis ES6 → ES5

**Prompt:** *"¿Por qué no puedo usar `class`?"* / revisiones de código que incluían `class`, `import`/`export`, template literals y destructuring.

**Respuesta generada (resumen):** Se explicó la diferencia entre una función constructora de ES5 (`function Pregunta(...) {...}`) y una `class` de ES6, por qué `import`/`export` requieren módulos (que rompen la carga por `file://`), y cómo reemplazar template literals por concatenación y destructuring por una variable temporal.

**Uso que le di:** En un principio no me había percatado de que había una norma que decía que solo se podía usar sintaxis ES5, y Claude me ayudó a hacer los reemplazos y adaptaciones donde la había utilizado.

---

## 5. Armado del banco de preguntas

**Prompt:** Pedido de generar preguntas de trivia sobre historia de los Mundiales (campeones, goleadores, sedes, récords), con la aclaración de que algunas preguntas después las modificó el alumno a mano con datos propios.

**Respuesta generada (resumen):** Banco de más de 80 preguntas con la estructura `{categoria, tema, pregunta, opciones, correcta}`, verificado sin duplicados ni errores de sintaxis mediante una prueba en navegador.

**Uso que le di:** Cuando llegué a este punto del proyecto, inicialmente pensé en buscar una base de datos con preguntas ya armadas, pero no encontré algo que me convenza, así que le di a Claude ejemplos de preguntas que me parecían interesantes y le dije que armara el banco de preguntas más grande y lógico que pudiera. Después de que lo creó, yo me encargué de actualizar unas cuantas preguntas que me parecían muy obvias o con información desactualizada.

---

## 6. Debugging de un bug de puntaje/vidas en producción

**Prompt:** *"Estaba jugando, respondí prácticamente todas las preguntas, empecé a apretar al azar y rápido, me quedé sin vidas y sin embargo podía seguir jugando... no se están sumando los bonus."*

**Respuesta generada (resumen):** Se diagnosticaron tres bugs relacionados: los botones de opciones no se deshabilitaban mientras se procesaba una respuesta (permitiendo contestar la misma pregunta varias veces), el timer por pregunta no se reiniciaba entre preguntas (matando el bonus de velocidad), y `gameOver` comparaba vidas `=== 0` en vez de `<= 0`.

**Uso que le di:** Este bug lo encontré jugando yo mismo, probé clickeando rápido y al azar para ver cómo respondía el juego, y me di cuenta de que el conteo de preguntas no cerraba con lo que había respondido en realidad, y que me había quedado sin vidas pero el juego seguía andando. Le describí a Claude la situación tal cual la viví (sin saber cuál era la causa), y entre los dos fuimos descartando posibilidades hasta encontrar que en realidad eran tres bugs relacionados entre sí, no uno solo.