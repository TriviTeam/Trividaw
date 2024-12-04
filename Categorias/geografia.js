window.addEventListener("load", iniciar);

let preguntas = [
  "¿Cuál es el continente más grande del mundo?",
  "¿En qué océano se encuentra la Isla de Pascua?",
  "¿Cuál es el río más largo del mundo?",
  "¿Cuál es la capital de Japón?",
  "¿Qué océano está al este de África?",
  "¿Cuál es la capital de Canadá?",
  "¿En qué continente se encuentra el desierto de Sahara?",
  "¿Qué país tiene más habitantes en el mundo?",
  "¿Cuál es el río más largo de África?",
  "¿En qué continente se encuentra el Monte Everest?",
  "¿Qué país tiene la mayor superficie de selva tropical?",
  "¿En qué continente se encuentra el río Amazonas?",
  "¿Qué océano está al norte de América del Sur?",
  "¿En qué país se encuentra el Machu Picchu?",
  "¿Cuál es el país más pequeño del mundo?",
  "¿Qué país está formado por más de 7,000 islas?",
  "¿En qué continente se encuentra el desierto de Atacama?",
  "¿Qué país es conocido como la 'tierra del sol naciente'?",
  "¿En qué océano se encuentra la isla de Japón?",
  "¿En qué continente se encuentra el río Nilo?",
  "¿Cuál es la capital de Alemania?",
  "¿En qué océano se encuentra la isla de Madagascar?",
  "¿Qué país tiene la mayor extensión territorial en Europa?",
  "¿Qué río atraviesa la ciudad de Londres?",
  "¿En qué continente se encuentra el país de Egipto?",
  "¿Cuál es la montaña más alta de América del Norte?",
  "¿Qué océano está al este de Asia?",
  "¿Qué continente tiene la mayor diversidad biológica?",
  "¿Cuál es el país más grande de América del Sur?",
  "¿Cuál es el río más largo de América del Sur?",
  "¿En qué país se encuentra el monte Kilimanjaro?",
  "¿Qué océano está al sur de Australia?",
  "¿En qué continente se encuentra el desierto de Kalahari?",
  "¿Qué país tiene la mayor población en África?",
  "¿Cuál es la capital de Australia?",
  "¿Qué país tiene más islas en el mundo?",
  "¿En qué continente se encuentra el río Yangtsé?",
  "¿Cuál es el océano que está al oeste de África?",
  "¿Qué país es conocido como la 'tierra del fuego'?",
];

let respuestas = [
  ["Asia", "África", "Europa", "Oceanía"],
  ["Atlántico", "Pacífico", "Índico", "Ártico"],
  ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
  ["Tokio", "Beijing", "Seúl", "Bangkok"],
  ["Atlántico", "Pacífico", "Índico", "Ártico"],
  ["Ottawa", "Toronto", "Vancouver", "Montreal"],
  ["África", "Asia", "América", "Oceanía"],
  ["China", "India", "Estados Unidos", "Indonesia"],
  ["Nilo", "Congo", "Zambeze", "Amazonas"],
  ["Asia", "América", "Europa", "África"],
  ["Brasil", "República Democrática del Congo", "Indonesia", "Perú"],
  ["América del Sur", "Asia", "África", "Oceanía"],
  ["Pacífico", "Atlántico", "Índico", "Ártico"],
  ["Perú", "Chile", "México", "Argentina"],
  ["Vaticano", "Mónaco", "San Marino", "Nauru"],
  ["Filipinas", "Indonesia", "Japón", "Tailandia"],
  ["Sudamérica", "Asia", "América del Norte", "África"],
  ["Japón", "China", "Corea del Sur", "Vietnam"],
  ["Pacífico", "Atlántico", "Índico", "Ártico"],
  ["África", "Asia", "América", "Oceanía"],
  ["Berlín", "Hamburgo", "Múnich", "Colonia"],
  ["Índico", "Atlántico", "Pacífico", "Ártico"],
  ["Francia", "Alemania", "España", "Italia"],
  ["Támesis", "Ródano", "Elba", "Danubio"],
  ["África", "Asia", "América", "Oceanía"],
  ["Denali", "Everest", "Kilimanjaro", "Aconcagua"],
  ["Pacífico", "Atlántico", "Índico", "Ártico"],
  ["Asia", "América del Sur", "Oceanía", "África"],
  ["Brasil", "Argentina", "Colombia", "Chile"],
  ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
  ["Tanzania", "Kenia", "Uganda", "Zambia"],
  ["Pacífico", "Atlántico", "Índico", "Ártico"],
  ["África", "Asia", "Oceanía", "América"],
  ["Nigeria", "Egipto", "Sudáfrica", "Etiopía"],
  ["Sídney", "Melbourne", "Brisbane", "Canberra"],
  ["Suecia", "Filipinas", "Tailandia", "Indonesia"],
  ["Asia", "Europa", "África", "Asia"],
  ["Atlántico", "Índico", "Ártico", "Pacífico"],
  ["Chile", "Perú", "Uruguay", "Argentina"],
];

let correctas = [
  0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 2, 0, 0, 0, 0, 0, 0, 3, 0, 3, 3, 3,
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
    comoJugarTexto.innerHTML = `¡Hola, explorador del mundo! Estás a punto de adentrarte en un juego divertido donde podrás poner a prueba tus conocimientos sobre geografía. El objetivo es muy sencillo: te haremos algunas preguntas y tendrás que elegir la respuesta correcta entre cuatro opciones. Cada vez que elijas, la opción seleccionada se iluminará, y aquí viene lo más emocionante:

Si aciertas, la respuesta se iluminará en verde y ¡sumarás un punto! Si te equivocas, la respuesta se pondrá en rojo, pero no te preocupes, no perderás puntos, solo aprenderás algo nuevo para la próxima vez.

Tienes un tiempo limitado para responder todas las preguntas, ¡así que no te duermas! El juego termina cuando se acaba el tiempo o cuando hayas respondido todas las preguntas. Pero tranquilo, si eres rápido y certero, seguro que conseguirás una gran puntuación.

Lo mejor de todo es que todas las preguntas son sobre geografía, así que si te encanta conocer países, continentes, ríos, montañas y todo lo relacionado con nuestro planeta, ¡este es tu momento para brillar!

Así que ya sabes, elige la respuesta correcta, acumula puntos y diviértete mientras demuestras todo lo que sabes de geografía. ¿Estás listo para el reto? ¡Que empiece el juego!`;
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
