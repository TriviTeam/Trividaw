window.addEventListener("load", iniciar);

let preguntas = [
  "¿Cuál es el componente principal del aire que respiramos?",
  "¿Qué gas contribuye al cambio climático?",
  "¿Cómo se llama el proceso de conversión de un sólido a gas sin pasar por el estado líquido?",
  "¿Qué planeta es conocido como el 'planeta rojo'?",
  "¿Qué tipo de energía se obtiene del sol?",
  "¿Quién propuso la teoría de la relatividad?",
  "¿Cuál es la unidad básica de la vida?",
  "¿Cuántos huesos tiene el cuerpo humano adulto?",
  "¿Qué proceso convierte la energía solar en energía química en las plantas?",
  "¿Cuál es el órgano encargado de filtrar los desechos del cuerpo humano?",
  "¿Qué sustancia es responsable de la coloración roja de la sangre?",
  "¿Qué tipo de energía se produce en las centrales nucleares?",
  "¿Qué capa de la atmósfera nos protege de la radiación ultravioleta del sol?",
  "¿Qué es el ADN?",
  "¿Cómo se llama el proceso de división celular que da lugar a dos células hijas idénticas?",
  "¿Qué órgano produce insulina en el cuerpo humano?",
  "¿Cuál es la molécula más abundante en la atmósfera terrestre?",
  "¿Qué parte de la célula se encarga de producir energía?",
  "¿Qué es la fotosíntesis?",
  "¿Cuál es la función de los glóbulos rojos en la sangre?",
  "¿Qué tipo de reacción ocurre cuando un metal reacciona con oxígeno?",
  "¿Qué elemento químico tiene el símbolo Na?",
  "¿Qué es la ley de la gravedad?",
  "¿Qué tipo de energía produce el sol?",
  "¿Qué parte de la planta se encarga de absorber el agua?",
  "¿Qué es un ecosistema?",
  "¿Cómo se llama el proceso por el cual los animales obtienen oxígeno?",
  "¿Cuántos cromosomas tiene una célula humana?",
  "¿Qué órgano del cuerpo humano produce la bilis?",
  "¿Cómo se llama el proceso por el cual el agua pasa de gas a líquido?",
  "¿Qué elemento químico tiene el símbolo Fe?",
  "¿Qué tipo de energía se produce en una planta hidroeléctrica?",
  "¿Qué tipo de energía produce un motor de combustión interna?",
  "¿Qué es un conductor eléctrico?",
  "¿Qué parte del cuerpo humano está protegida por el cráneo?",
  "¿Cómo se llama el proceso de transformación de la materia que ocurre en el interior de las estrellas?",
  "¿Qué tipo de célula es responsable de la contracción muscular?",
];

let respuestas = [
  ["Nitrógeno", "Oxígeno", "Carbono", "Hidrógeno"],
  ["Dióxido de carbono", "Oxígeno", "Nitrógeno", "Metano"],
  ["Sublimación", "Evaporación", "Condensación", "Solidificación"],
  ["Marte", "Venus", "Júpiter", "Saturno"],
  ["Energía solar", "Energía eólica", "Energía nuclear", "Energía geotérmica"],
  ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
  ["Célula", "Órgano", "Sistema", "Tejido"],
  ["206", "256", "316", "356"],
  ["Fotosíntesis", "Respiración celular", "Transpiración", "Fermentación"],
  ["Riñón", "Hígado", "Corazón", "Estómago"],
  ["Hemoglobina", "Clorofila", "Colágeno", "Melanina"],
  [
    "Energía térmica",
    "Energía cinética",
    "Energía eléctrica",
    "Energía nuclear",
  ],
  ["Capa de ozono", "Troposfera", "Estratósfera", "Termósfera"],
  ["Ácido desoxirribonucleico", "Ácido ribonucleico", "Proteína", "Glucosa"],
  ["Mitosis", "Meiosis", "Fagocitosis", "Difusión"],
  ["Páncreas", "Hígado", "Riñón", "Estómago"],
  ["Nitrógeno", "Oxígeno", "Hidrógeno", "Helio"],
  ["Mitocondria", "Núcleo", "Membrana celular", "Citoesqueleto"],
  [
    "El proceso por el cual las plantas producen oxígeno",
    "El proceso de respiración celular",
    "El proceso por el cual las plantas producen glucosa",
    "El proceso de división celular",
  ],
  [
    "Transportar oxígeno",
    "Defender el cuerpo de infecciones",
    "Producir anticuerpos",
    "Transportar nutrientes",
  ],
  [
    "Reacción de oxidación",
    "Reacción de combustión",
    "Reacción ácido-base",
    "Reacción de neutralización",
  ],
  ["Nitrógeno", "Sodio", "Neón", "Niquel"],
  [
    "La fuerza que atrae los objetos hacia el centro de la Tierra",
    "La fuerza que repele los objetos",
    "La fuerza que empuja los objetos",
    "La fuerza centrífuga",
  ],
  ["Energía química", "Energía térmica", "Energía luminosa", "Energía nuclear"],
  ["Raíz", "Tallo", "Hojas", "Flores"],
  [
    "Un conjunto de organismos y su entorno que interactúan",
    "Un proceso químico que ocurre en las células",
    "Un tipo de energía natural",
    "Una reacción de oxidación en la naturaleza",
  ],
  ["Respiración", "Excreción", "Transpiración", "Digestión"],
  ["46", "23", "92", "47"],
  ["Hígado", "Páncreas", "Riñón", "Estómago"],
  ["Evaporación", "Condensación", "Sublimación", "Fusión"],
  ["Hierro", "Plata", "Cobre", "Aluminio"],
  ["Energía solar", "Energía hidráulica", "Energía térmica", "Energía eólica"],
  [
    "Energía eléctrica",
    "Energía térmica",
    "Energía química",
    "Energía mecánica",
  ],
  [
    "Un material que permite el paso de corriente eléctrica",
    "Un material que no permite el paso de corriente eléctrica",
    "Un material que se calienta",
    "Un material que genera electricidad",
  ],
  ["Cerebro", "Corazón", "Estómago", "Hígado"],
  [
    "Fusión nuclear",
    "Fisura de materiales",
    "Condensación de energía",
    "Electrólisis",
  ],
  [
    "Células musculares",
    "Células nerviosas",
    "Células epiteliales",
    "Células sanguíneas",
  ],
];

let correctas = [
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1, 0, 2, 0, 0, 1, 0, 2, 0, 0,
  0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0,
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
    comoJugarTexto.innerHTML = `¡Hola, joven científico! Estás a punto de embarcarte en un juego donde podrás poner a prueba todo lo que sabes sobre el fascinante mundo de la ciencia. El objetivo es muy sencillo: te haremos algunas preguntas y tendrás que elegir la respuesta correcta entre cuatro opciones. Cada vez que elijas, la opción seleccionada se iluminará, y aquí viene lo mejor:

Si aciertas, la respuesta se iluminará en verde y ¡sumarás un punto! Si te equivocas, la respuesta se pondrá en rojo, pero no te preocupes, no perderás puntos, solo tendrás una oportunidad para aprender algo nuevo.

Tienes un tiempo limitado para responder todas las preguntas, ¡así que no te duermas! El juego termina cuando se acaba el tiempo o cuando hayas respondido todas las preguntas. Pero tranquilo, si eres rápido y certero, seguro que conseguirás una gran puntuación.

Lo mejor de todo es que todas las preguntas son sobre ciencia, ¡así que si te apasionan los experimentos, los descubrimientos, el universo y todo lo relacionado con el conocimiento científico, este es tu momento para brillar!

Así que ya sabes, elige la respuesta correcta, acumula puntos y diviértete mientras pones a prueba tus conocimientos científicos. ¿Estás listo para el reto? ¡Que empiece el juego!`;
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
