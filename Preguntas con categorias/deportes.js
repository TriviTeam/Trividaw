window.addEventListener("load", iniciar);

let preguntas = [
  "¿Quién ganó el Mundial de Fútbol en 2018?",
  "¿En qué deporte se compite por la 'Copa Stanley'?",
  "¿Cuál es el deportista más laureado de la historia de los Juegos Olímpicos?",
  "¿Quién es conocido como el 'Rey del Fútbol'?",
  "¿Qué país ganó la Copa del Mundo de Fútbol en 2014?",
  "¿Quién fue el primer tenista en alcanzar el puesto número 1 en el ranking mundial?",
  "¿En qué deporte se realiza el 'slam dunk'?",
  "¿Cuántos jugadores componen un equipo de baloncesto?",
  "¿Dónde se celebraron los Juegos Olímpicos de 1992?",
  "¿Quién es el máximo goleador en la historia de los mundiales de fútbol?",
  "¿Qué país ha ganado más medallas en los Juegos Olímpicos de Invierno?",
  "¿Cuál es el torneo de golf más antiguo del mundo?",
  "¿Qué deporte tiene eventos como los 'Grand Tours'?",
  "¿Quién es conocido como 'El Tiburón de Baltimore'?",
  "¿Qué boxeador es apodado 'Iron Mike'?",
  "¿Qué deporte se juega en un diamante y usa bases?",
  "¿En qué ciudad está el estadio de fútbol Maracaná?",
  "¿Quién es considerado el mejor jugador de baloncesto de todos los tiempos?",
  "¿Qué deporte se asocia con la haka de Nueva Zelanda?",
  "¿Qué equipo de la NFL ha ganado más Super Bowls?",
  "¿Cuál es el deporte nacional de Japón?",
  "¿En qué país nació el criquet?",
  "¿Cuántos puntos se necesitan para ganar un set en voleibol?",
  "¿Qué equipo de Fórmula 1 tiene más campeonatos de constructores?",
  "¿Qué país organizó el primer Mundial de Fútbol?",
  "¿En qué año se celebraron los primeros Juegos Olímpicos modernos?",
  "¿Cuál es el equipo con más títulos de la UEFA Champions League?",
  "¿Qué nadador ganó 8 medallas de oro en los Juegos Olímpicos de Pekín 2008?",
  "¿Qué país ha ganado más Copas del Mundo de Rugby?",
  "¿Quién fue apodado 'El Pibe de Oro' en el fútbol?",
  "¿Cuál es la distancia oficial de un maratón?",
  "¿Qué país organizó los Juegos Olímpicos de 1964?",
  "¿Qué equipo de la NBA ha ganado más campeonatos?",
  "¿Quién es conocido como 'La Roca' en la lucha libre?",
  "¿Cuál es el deporte nacional de Canadá?",
  "¿Quién fue el máximo goleador del Mundial de Fútbol de 2002?",
  "¿Cuál es el evento de atletismo más corto en los Juegos Olímpicos?",
  "¿En qué deporte se utiliza una red para atrapar peces como parte del juego?",
  "¿Quién fue el primer piloto de Fórmula 1 en ganar 7 campeonatos mundiales?",
  "¿Cuál es el deporte en el que se compite por la 'America's Cup'?",
];

let respuestas = [
  ["Francia", "Brasil", "Alemania", "España"],
  ["Fútbol", "Béisbol", "Hockey sobre hielo", "Baloncesto"],
  ["Michael Phelps", "Usain Bolt", "Simone Biles", "Carl Lewis"],
  ["Lionel Messi", "Pelé", "Cristiano Ronaldo", "Diego Maradona"],
  ["Alemania", "Brasil", "Argentina", "Francia"],
  ["Roger Federer", "Rafael Nadal", "Pete Sampras", "Novak Djokovic"],
  ["Fútbol", "Baloncesto", "Voleibol", "Rugby"],
  ["5", "6", "7", "4"],
  ["Barcelona", "Londres", "Atlanta", "Sídney"],
  ["Pelé", "Miroslav Klose", "Ronaldo", "Just Fontaine"],
  ["Estados Unidos", "Rusia", "Noruega", "Canadá"],
  ["The Masters", "The Open Championship", "US Open", "PGA Championship"],
  ["Ciclismo", "Esquí", "Natación", "Carreras de caballos"],
  ["Michael Phelps", "Ian Thorpe", "Ryan Lochte", "Matt Biondi"],
  ["Mike Tyson", "Muhammad Ali", "Floyd Mayweather", "Manny Pacquiao"],
  ["Béisbol", "Críquet", "Softbol", "Fútbol Americano"],
  ["Buenos Aires", "Sao Paulo", "Río de Janeiro", "Lima"],
  ["LeBron James", "Michael Jordan", "Kobe Bryant", "Shaquille O'Neal"],
  ["Rugby", "Fútbol Americano", "Críquet", "Hockey sobre césped"],
  [
    "New England Patriots",
    "Pittsburgh Steelers",
    "Dallas Cowboys",
    "San Francisco 49ers",
  ],
  ["Sumo", "Karate", "Judo", "Béisbol"],
  ["Inglaterra", "Australia", "India", "Sudáfrica"],
  ["15", "21", "25", "30"],
  ["Ferrari", "Mercedes", "McLaren", "Red Bull"],
  ["Uruguay", "Italia", "Brasil", "Francia"],
  ["1896", "1900", "1920", "1948"],
  ["Real Madrid", "Barcelona", "Liverpool", "Bayern Múnich"],
  ["Michael Phelps", "Mark Spitz", "Ian Thorpe", "Ryan Lochte"],
  ["Nueva Zelanda", "Australia", "Inglaterra", "Sudáfrica"],
  ["Diego Maradona", "Pelé", "Lionel Messi", "Johan Cruyff"],
  ["42.195 km", "40 km", "45 km", "50 km"],
  ["Japón", "Estados Unidos", "Canadá", "Suecia"],
  [
    "Los Angeles Lakers",
    "Boston Celtics",
    "Golden State Warriors",
    "Chicago Bulls",
  ],
  ["Dwayne Johnson", "John Cena", "Stone Cold", "Hulk Hogan"],
  ["Hockey sobre hielo", "Lacrosse", "Curling", "Béisbol"],
  ["Ronaldo", "Miroslav Klose", "Zinedine Zidane", "Ronaldinho"],
  [
    "100 metros planos",
    "200 metros planos",
    "400 metros planos",
    "110 metros con vallas",
  ],
  ["Pesca deportiva", "Críquet", "Lacrosse", "Hockey sobre césped"],
  ["Michael Schumacher", "Ayrton Senna", "Lewis Hamilton", "Sebastian Vettel"],
  ["Vela", "Natación", "Remo", "Surf"],
];

let correctas = [
  0, 2, 0, 1, 0, 2, 1, 0, 0, 1, 2, 1, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 1, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0,
];

// Variables globales
let preguntaActual = 0;
let puntuacion = 0;
let tiempoRestante = 90;
let temporizador;
let yaRespondida = false; // Para evitar que el usuario responda nuevamente

// Elementos HTML
let contenedorJuego = document.getElementById("contenedor-juego");
function iniciar() {
  crearJuego();
  let icono = document.getElementById("sound-icon");
  icono.addEventListener("click", function () {
    if (icono.src.includes("volume.png")) {
      icono.src = "img/mute.png";
    } else {
      icono.src = "img/volume.png";
    }
  });

  let reloj = document.getElementById("clock-icon");
  let modelo = document.getElementById("modelofecha");
  let modeloTexto = document.getElementById("modelo-texto");

  reloj.addEventListener("click", function () {
    let fecha = new Date();
    let formatoFecha = fecha.toLocaleDateString();
    let formatoHora = fecha.toLocaleTimeString();
    modeloTexto.textContent = `Fecha: ${formatoFecha} - Hora: ${formatoHora}`;
    modelo.style.display = "flex";
  });

  let pregunta = document.getElementById("question-icon");
  let modelocomojugar = document.getElementById("modelocomojugar");
  let comoJugarTexto = document.getElementById("texto-comojugar");

  pregunta.addEventListener("click", function () {
    comoJugarTexto.innerHTML = `Hola, amante de los deportes. Estás a punto de jugar un juego súper divertido donde podrás poner a prueba tus conocimientos deportivos. El objetivo es muy sencillo te vamos a hacer algunas preguntas y tendrás que elegir la respuesta correcta entre cuatro opciones. Cada vez que elijas, la opción que selecciones se iluminará, y aquí viene lo divertido

Si aciertas, la respuesta se iluminará en verde y ¡sumarás un punto! Si te equivocas, la respuesta se pondrá en rojo, pero no te preocupes, no perderás puntos, solo aprenderás para la próxima.

Tienes un tiempo limitado para responder todas las preguntas, ¡así que no te duermas! El juego termina cuando se acaba el tiempo o cuando hayas respondido todas las preguntas. Pero tranquilo, si respondes rápido y con acierto, seguro que obtienes una gran puntuación.

Y lo mejor de todo es que todas las preguntas son sobre deportes, así que si eres un fanático de los juegos, campeonatos y deportes en general, este es tu momento para brillar.

Así que ya sabes, haz clic en la respuesta correcta, acumula puntos y diviértete mientras pones a prueba tus conocimientos deportivos. ¿Estás listo para el desafío? ¡Que empiece el juego!`;
    modelocomojugar.style.display = "flex";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modelo) {
      modelo.style.display = "none";
    }
    if (event.target === modelocomojugar) {
      modelocomojugar.style.display = "none";
    }
  });

  let iconoAudio = document.getElementById("sound-icon");
  let audio = document.getElementById("music");
  let audioStarted = false;

  // muted audio by default
  audio.muted = true;

  iconoAudio.addEventListener("click", function () {
    if (!audioStarted) {
      audio.play().catch((error) => {
        console.error("Audio play error:", error);
      });
      audioStarted = true;
    }

    if (audio.muted) {
      audio.muted = false; // desmutea
      iconoAudio.src = "img/volume.png"; // cambia el icono a sonido
    } else {
      audio.muted = true; // Mutea el audio
      iconoAudio.src = "img/mute.png"; // cambia el icono a mute
    }
  });
}

function crearJuego() {
  mezclarPreguntas(); // Mezcla las preguntas antes de iniciar el juego

  // Encabezado con la pregunta y el temporizador
  let encabezado = document.createElement("div");
  encabezado.classList.add("encabezado");

  let preguntaElement = document.createElement("h1");
  preguntaElement.classList.add("pregunta");

  let temporizadorElement = document.createElement("div");
  temporizadorElement.classList.add("temporizador");

  encabezado.appendChild(preguntaElement);
  encabezado.appendChild(temporizadorElement);

  // Contenedor de respuestas
  let contenedorRespuestas = document.createElement("div");
  contenedorRespuestas.classList.add("contenedor-respuestas");

  for (let i = 0; i < 4; i++) {
    let cajaRespuesta = document.createElement("div");
    cajaRespuesta.classList.add("caja-respuesta");
    cajaRespuesta.dataset.correcta = "false"; // Default como incorrecta
    contenedorRespuestas.appendChild(cajaRespuesta);
  }

  // Puntuación
  let puntuacionElement = document.createElement("div");
  puntuacionElement.classList.add("puntuacion");
  puntuacionElement.innerHTML = `Puntuación: <span id="puntuacion">0</span>`;

  contenedorJuego.appendChild(encabezado);
  contenedorJuego.appendChild(contenedorRespuestas);
  contenedorJuego.appendChild(puntuacionElement);

  cargarPregunta();
  iniciarTemporizador();
}

// Función para mezclar las preguntas
function mezclarPreguntas() {
  for (let i = preguntas.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // Generar índice aleatorio
    [preguntas[i], preguntas[j]] = [preguntas[j], preguntas[i]]; // Intercambiar preguntas
    [respuestas[i], respuestas[j]] = [respuestas[j], respuestas[i]]; // Intercambiar respuestas (destructuring que vimos!!)
    [correctas[i], correctas[j]] = [correctas[j], correctas[i]]; // Intercambiar correctas
  }
}

function cargarPregunta() {
  if (preguntaActual >= preguntas.length) {
    finalizarJuego();
  } else {
    let preguntaElement = document.querySelector(".pregunta");
    let contenedorRespuestas = document.querySelector(".contenedor-respuestas");

    preguntaElement.textContent = preguntas[preguntaActual];

    // Asigna las respuestas en su orden original
    let cajasRespuestas =
      contenedorRespuestas.querySelectorAll(".caja-respuesta");

    cajasRespuestas.forEach((caja, index) => {
      caja.textContent = respuestas[preguntaActual][index];

      // Compara si la respuesta es la correcta
      if (
        respuestas[preguntaActual][index] ===
        respuestas[preguntaActual][correctas[preguntaActual]]
      ) {
        caja.setAttribute("data-correcta", "true"); // Asignamos 'true' si la respuesta es correcta
      } else {
        caja.setAttribute("data-correcta", "false"); // Asignamos 'false' si es incorrecta
      }

      caja.classList.remove("correcta", "incorrecta");
      caja.onclick = manejarRespuesta;
    });

    yaRespondida = false;
  }
}

function manejarRespuesta(e) {
  if (!yaRespondida) {
    // Solo ejecuta el bloque si no ha sido respondida
    let esCorrecta = e.target.dataset.correcta === "true";
    if (esCorrecta) {
      e.target.classList.add("correcta");
      puntuacion++;
    } else {
      e.target.classList.add("incorrecta");
    }

    document.getElementById("puntuacion").textContent = puntuacion;

    yaRespondida = true; // Marca la pregunta como respondida

    setTimeout(() => {
      preguntaActual++;
      cargarPregunta(); // Carga la siguiente pregunta
    }, 1000);
  }
}

function iniciarTemporizador() {
  temporizador = setInterval(() => {
    tiempoRestante--;

    let minutos = Math.floor(tiempoRestante / 60);
    let segundos = tiempoRestante % 60;

    // Añadimos un '0' delante si los minutos o segundos son menores de 10 (literalmente copiado del otro script de wordle)
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    if (segundos < 10) {
      segundos = "0" + segundos;
    }

    let temporizadorElement = document.querySelector(".temporizador");
    temporizadorElement.textContent = `Tiempo restante: ${minutos}:${segundos}`;

    // Si el tiempo se ha agotado, se detiene el temporizador y se finaliza el juego
    if (tiempoRestante <= 0) {
      clearInterval(temporizador);
      finalizarJuego();
    }
  }, 1000);
}

function finalizarJuego() {
  clearInterval(temporizador);
  preguntaActual = 0;

  let temporizadorElement = document.querySelector(".temporizador");
  let preguntaElement = document.querySelector(".pregunta");
  let contenedorRespuestas = document.querySelector(".contenedor-respuestas");

  temporizadorElement.textContent = "";
  preguntaElement.textContent = `¡Juego terminado! Tu puntuación final es: ${puntuacion}`;
  contenedorRespuestas.innerHTML = ""; // Elimina las respuestas
}
