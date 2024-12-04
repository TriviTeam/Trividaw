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
  "¿Cuál fue el periodo histórico entre la caída del Imperio Romano y el Renacimiento?",
  "¿En qué año comenzó la Segunda Guerra Mundial?",
  "¿Qué país lanzó la primera bomba atómica?",
  "¿Quién fue conocido como el 'padre de la democracia ateniense'?",
  "¿Qué evento marcó el inicio de la Revolución Francesa?",
  "¿Qué país fue el primero en abolir la esclavitud?",
  "¿Qué civilización construyó Machu Picchu?",
  "¿Quién escribió *El contrato social*?",
  "¿En qué siglo ocurrió la Reforma Protestante?",
  "¿Quién fue el primer presidente de los Estados Unidos?",
  "¿Quién fue el líder de la Revolución Rusa de 1917?",
  "¿Qué guerra se libró entre 1914 y 1918?",
  "¿Qué imperio fue derrotado por los griegos en la Batalla de Maratón?",
  "¿En qué año se produjo la Revolución Mexicana?",
  "¿Quién fue el primer faraón de Egipto?",
  "¿En qué siglo ocurrió la Guerra de las Dos Rosas?",
  "¿Qué civilización construyó las pirámides de Egipto?",
  "¿Qué tratado puso fin a la Primera Guerra Mundial?",
  "¿Quién fue el líder de los nazis durante la Segunda Guerra Mundial?",
  "¿Qué país se independizó de España en 1810 tras la Guerra de Independencia de América?",
  "¿Qué civilización antigua construyó las ruinas de Petra?",
  "¿En qué siglo comenzó la Edad Media?",
  "¿Quién fundó el Imperio Mongol?",
  "¿Qué año marcó el inicio de la Edad Contemporánea?",
  "¿En qué conflicto se enfrentaron Estados Unidos y Vietnam?",
  "¿Quién fue el dictador de la URSS durante la Segunda Guerra Mundial?",
  "¿Qué año se firmó la Carta Magna en Inglaterra?",
  "¿En qué periodo histórico se realizó la Revolución Industrial?",
  "¿Quién fue el último emperador de China?",
  "¿Qué guerra se libró entre los países de la OTAN y la URSS en 1947-1991?"
];

let respuestas = [
  ["476", "1453", "1492", "1914"],
  ["Nerón", "Rómulo Augústulo", "César Augusto", "Constantino"],
  ["1776", "1492", "1812", "1620"],
  ["Batalla de Cannae", "Batalla de Zama", "Batalla de Alesia", "Batalla de Gaugamela"],
  ["Napoleón Bonaparte", "Maximilien Robespierre", "Luis XVI", "Jorge III"],
  ["1918", "1945", "1939", "1914"],
  ["Ulysses S. Grant", "Robert E. Lee", "George Washington", "Andrew Jackson"],
  ["Tratado de París", "Tratado de Versalles", "Tratado de Tordesillas", "Tratado de Utrecht"],
  ["1700", "1800", "1900", "1600"],
  ["El Imperio Bizantino", "El Imperio Romano", "El Imperio Otomano", "El Imperio Franco"],
  ["Edad Media", "Renacimiento", "Edad Contemporánea", "Ilustración"],
  ["1939", "1914", "1945", "1920"],
  ["Estados Unidos", "Alemania", "Japón", "Rusia"],
  ["Pericles", "Sócrates", "Aristóteles", "Dracón"],
  ["La Toma de la Bastilla", "La Guerra de los Siete Años", "La Declaración de Independencia", "El Golpe de Estado de Napoleón"],
  ["Gran Bretaña", "Estados Unidos", "Francia", "Haití"],
  ["Incas", "Mayas", "Aztecas", "Olmecas"],
  ["Jean-Jacques Rousseau", "Voltaire", "John Locke", "Montesquieu"],
  ["Siglo XV", "Siglo XVI", "Siglo XVII", "Siglo XVIII"],
  ["George Washington", "Thomas Jefferson", "John Adams", "Abraham Lincoln"],
  ["Lenin", "Trotsky", "Stalin", "Kerensky"],
  ["Primera Guerra Mundial", "Segunda Guerra Mundial", "Guerra de Vietnam", "Guerra Civil Española"],
  ["Imperio Persa", "Imperio Romano", "Imperio Griego", "Imperio Egipcio"],
  ["1910", "1900", "1920", "1930"],
  ["Narmer", "Tutankamón", "Ramsés II", "Cleopatra"],
  ["Siglo XV", "Siglo XVI", "Siglo XVII", "Siglo XIII"],
  ["Egipto", "Mesopotamia", "Roma", "China"],
  ["Tratado de Versalles", "Tratado de París", "Tratado de Utrecht", "Tratado de Berlín"],
  ["Adolf Hitler", "Benito Mussolini", "Joseph Stalin", "Franklin D. Roosevelt"],
  ["Argentina", "México", "Colombia", "Chile"],
  ["Roma", "Petra", "Palmyra", "Carthago"],
  ["Siglo IV", "Siglo III", "Siglo V",  "Siglo II"],
  ["Genghis Khan", "Kublai Khan", "César", "Atila"],
  ["1871", "1789", "1914", "1939"],
  ["Guerra Civil Española", "Guerra de Vietnam", "Guerra de los Seis Días", "Guerra de Irak"],
  ["Stalin", "Lenin", "Trotsky", "Jruschov"],
  ["1492", "1215", "1789", "1848"],
  ["Siglo XX", "Siglo XVIII", "Siglo XXI", "Siglo XIX"],
  ["Emperador Meiji", "Emperador Taisho", "Último emperador Qing", "Emperador Hirohito"],
  ["Guerra del Pacífico", "Guerra Fría", "Guerra de Vietnam", "Guerra Civil China"]
];

let correctas = [
  0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 1, 1, 0, 1, 1, 2, 1
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
    comoJugarTexto.innerHTML = `¡Hola, historiador en potencia! Estás a punto de embarcarte en un juego divertido en el que pondrás a prueba tus conocimientos sobre la historia del mundo. El objetivo es muy sencillo: te haremos algunas preguntas y tendrás que elegir la respuesta correcta entre cuatro opciones. Cada vez que elijas, la opción seleccionada se iluminará, y aquí viene lo más emocionante:

Si aciertas, la respuesta se iluminará en verde y ¡sumarás un punto! Si te equivocas, la respuesta se pondrá en rojo, pero no te preocupes, no perderás puntos, solo aprenderás algo nuevo para la próxima vez.

Tienes un tiempo limitado para responder todas las preguntas, ¡así que no te duermas! El juego termina cuando se acaba el tiempo o cuando hayas respondido todas las preguntas. Pero tranquilo, si eres rápido y certero, seguro que conseguirás una gran puntuación.

Lo mejor de todo es que todas las preguntas son sobre historia, así que si eres un apasionado de las civilizaciones, batallas, grandes personajes y momentos históricos, ¡este es tu momento para brillar!

Así que ya sabes, elige la respuesta correcta, acumula puntos y diviértete mientras demuestras todo lo que sabes de historia. ¿Estás listo para el reto? ¡Que empiece el juego!`;
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
