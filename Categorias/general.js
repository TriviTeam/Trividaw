window.addEventListener("load", iniciar);

let preguntas = [
  "¿En qué año se produjo la caída del Imperio Romano de Occidente?",
  "¿Quién fue el último emperador romano?",
  "¿En qué año se firmó la Declaración de Independencia de Estados Unidos?",
  "¿En qué batalla se enfrentaron los romanos contra los cartagineses en la Segunda Guerra Púnica?",
  "¿Quién fue el líder de la Revolución Francesa?",
  "¿En qué año terminó la Primera Guerra Mundial?",
  "¿Quién fue el general que comandó las tropas de la Confederación en la Guerra Civil de los Estados Unidos?",
  "¿Qué tratado puso fin a la Guerra de Independencia de Estados Unidos?",
  "¿En qué año comenzó la Revolución Industrial?",
  "¿Qué imperio se enfrentó a los musulmanes en las Cruzadas?",
  "¿Quién ganó el Mundial de Fútbol en 2018?",
  "¿En qué deporte se compite por la 'Copa Stanley'?",
  "¿Cuál es el deportista más laureado de la historia de los Juegos Olímpicos?",
  "¿En qué deporte se utiliza una raqueta para golpear una pelota amarilla?",
  "¿Quién es conocido como el 'Rey del Fútbol'?",
  "¿Qué país ganó la Copa del Mundo de Fútbol en 2014?",
  "¿Quién fue el primer tenista en alcanzar el puesto número 1 en el ranking mundial?",
  "¿En qué deporte se realiza el 'slam dunk'?",
  "¿Cuántos jugadores componen un equipo de baloncesto?",
  "¿En qué país nacieron los Juegos Olímpicos modernos?",
  "¿Cuál es la capital de Italia?",
  "¿Cuál es el río más largo del mundo?",
  "¿En qué continente se encuentra el desierto del Sahara?",
  "¿Cuántos países conforman la Unión Europea?",
  "¿Cuál es el país más grande del mundo?",
  "¿Qué océano está al oeste de América del Norte?",
  "¿Cuál es la ciudad más grande de Australia?",
  "¿En qué país se encuentra la ciudad de Machu Picchu?",
  "¿En qué continente se encuentra Egipto?",
  "¿Cuál es el país más pequeño del mundo?",
];

let respuestas = [
  ["476", "1453", "1492", "1914"],
  ["Nerón", "Rómulo Augústulo", "César Augusto", "letantino"],
  ["1776", "1492", "1812", "1620"],
  [
    "Batalla de Cannae",
    "Batalla de Zama",
    "Batalla de Alesia",
    "Batalla de Gaugamela",
  ],
  ["Napoleón Bonaparte", "Maximilien Robespierre", "Luis XVI", "Jorge III"],
  ["1918", "1945", "1939", "1914"],
  ["Ulysses S. Grant", "Robert E. Lee", "George Washington", "Andrew Jackson"],
  [
    "Tratado de París",
    "Tratado de Versalles",
    "Tratado de Tordesillas",
    "Tratado de Utrecht",
  ],
  ["1700", "1800", "1900", "1600"],
  [
    "El Imperio Bizantino",
    "El Imperio Romano",
    "El Imperio Otomano",
    "El Imperio Franco",
  ],
  ["Francia", "Brasil", "Alemania", "España"],
  ["Fútbol", "Béisbol", "Hockey sobre hielo", "Baloncesto"],
  ["Michael Phelps", "Usain Bolt", "Simone Biles", "Carl Lewis"],
  ["Tenis", "Bádminton", "Fútbol", "Golf"],
  ["Lionel Messi", "Pelé", "Cristiano Ronaldo", "Diego Maradona"],
  ["Alemania", "Brasil", "Argentina", "Francia"],
  ["Roger Federer", "Rafael Nadal", "Pete Sampras", "Novak Djokovic"],
  ["Fútbol", "Baloncesto", "Voleibol", "Rugby"],
  ["5", "6", "7", "4"],
  ["Francia", "Grecia", "Italia", "Inglaterra"],
  ["Roma", "Milán", "Venecia", "Florencia"],
  ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
  ["Asia", "África", "América", "Oceanía"],
  ["27", "30", "25", "22"],
  ["Rusia", "Canadá", "China", "Estados Unidos"],
  ["Atlántico", "Índico", "Pacífico", "Ártico"],
  ["Sídney", "Melbourne", "Brisbane", "Perth"],
  ["Brasil", "México", "Perú", "Chile"],
  ["Asia", "África", "Europa", "Oceanía"],
  ["Vaticano", "Mónaco", "Nauru", "San Marino"],
];

let correctas = [
  0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 2, 0, 0, 1, 0, 2, 1, 0, 1, 0, 0, 1, 0, 0, 2,
  0, 2, 1, 0,
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
    comoJugarTexto.innerHTML = `¡Hola, explorador de la sabiduría! Estás a punto de entrar en un juego lleno de preguntas de todo tipo, desde deportes hasta arte, ciencia, historia y mucho más. El objetivo es muy simple: te haremos preguntas y tendrás que elegir la respuesta correcta entre cuatro opciones. Cada vez que hagas tu elección, la opción seleccionada se iluminará, y aquí es donde empieza la diversión:

Si aciertas, la respuesta se iluminará en verde y ¡sumarás un punto! Si te equivocas, la respuesta se pondrá en rojo, pero no te preocupes, no perderás puntos, solo aprenderás algo nuevo y tendrás la oportunidad de seguir mejorando.

Tienes un tiempo limitado para responder todas las preguntas, ¡así que no te duermas! El juego termina cuando se acaba el tiempo o cuando hayas respondido todas las preguntas. Si eres rápido y certero, ¡seguro que conseguirás una puntuación fantástica!

Lo mejor de todo es que este juego tiene preguntas de todas las categorías, ¡así que prepárate para poner a prueba tus conocimientos generales! Desde deportes, historia, ciencia, arte y entretenimiento, ¡hay un poquito de todo!

Así que ya sabes, elige la respuesta correcta, acumula puntos y diviértete mientras demuestras todo lo que sabes sobre una gran variedad de temas. ¿Estás listo para el reto? ¡Que empiece el juego!`;
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
