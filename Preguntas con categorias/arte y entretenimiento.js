window.addEventListener("load", iniciar);

let preguntas = [
  "¿Quién pintó la Mona Lisa?",
  "¿Cómo se llama el libro más vendido del mundo después de la Biblia?",
  "¿Qué grupo musical es conocido como 'Los Cuatro de Liverpool'?",
  "¿Quién escribió Don Quijote de la Mancha?",
  "¿Cuál es la película más taquillera de la historia?",
  "¿Quién es el autor de La Odisea?",
  "¿Cómo se llama el lugar donde se realizan obras de teatro?",
  "¿En qué ciudad está el Museo del Louvre?",
  "¿Qué cantante es conocido como 'El Rey del Rock and Roll'?",
  "¿Qué autor escribió la saga de Harry Potter?",
  "¿Qué instrumento tiene teclas blancas y negras?",
  "¿Cómo se llama el género de música típico de Andalucía?",
  "¿Qué personaje lleva siempre un sombrero de copa y bastón en las películas de Chaplin?",
  "¿Qué obra de teatro fue escrita por William Shakespeare?",
  "¿Cuál es el libro más antiguo de la literatura española?",
  "¿Quién pintó 'La noche estrellada'?",
  "¿Qué famoso museo se encuentra en Nueva York?",
  "¿Qué película animada de Disney tiene como protagonista a un león llamado Simba?",
  "¿Cómo se llama la pintura donde aparece un reloj derretido?",
  "¿Qué cantante español es conocido por canciones como 'Bailar Pegados'?",
  "¿Cómo se llama la catedral que aparece en la novela El jorobado de Notre Dame?",
  "¿Quién dirigió la película Titanic?",
  "¿Qué género de música nació en Nueva Orleans a finales del siglo XIX?",
  "¿Cómo se llama la saga cinematográfica donde aparece Darth Vader?",
  "¿Quién es el creador de Los Simpson?",
  "¿Qué pintor mexicano es famoso por sus autorretratos?",
  "¿Qué novela comienza con 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme...'",
  "¿Qué instrumento es fundamental en el flamenco?",
  "¿Cómo se llama la técnica de pintar sobre yeso húmedo?",
  "¿Qué saga de películas protagoniza Frodo Bolsón?",
  "¿Qué cantante compuso 'Imagine'?",
  "¿Qué premio de cine se entrega en una gala anual en Hollywood?",
  "¿Qué autora escribió Orgullo y Prejuicio?",
  "¿Cómo se llama el espectáculo circense que combina arte y acrobacias?",
  "¿Qué pintor español es conocido por obras como 'Las Meninas'?",
  "¿Qué película de Pixar cuenta la historia de una familia de superhéroes?",
  "¿Cómo se llama la primera película de animación de Walt Disney?",
  "¿Qué color se usa principalmente en la obra El Grito de Edvard Munch?",
  "¿Qué personaje es conocido por sus orejas redondas y su voz aguda en Disney?",
  "¿Qué escultor italiano hizo la estatua de David?"
];

let respuestas = [
  ["Leonardo da Vinci", "Miguel Ángel", "Vincent van Gogh", "Pablo Picasso"],
  ["El Quijote", "El Señor de los Anillos", "El Principito", "La Biblia"],
  ["The Rolling Stones", "The Beatles", "Queen", "Pink Floyd"],
  ["Miguel de Cervantes", "Lope de Vega", "Gabriel García Márquez", "Federico García Lorca"],
  ["Vengadores: Endgame", "Titanic", "El Rey León", "Avatar"],
  ["Sófocles", "Homero", "Virgilio", "Aristóteles"],
  ["Teatro", "Cine", "Galería", "Estudio"],
  ["Roma", "Madrid", "París", "Londres"],
  ["Frank Sinatra", "Elvis Presley", "Michael Jackson", "Johnny Cash"],
  ["Suzanne Collins", "George R.R. Martin", "J.K. Rowling", "Stephen King"],
  ["Piano", "Guitarra", "Violín", "Batería"],
  ["Flamenco", "Bolero", "Tango", "Sevillanas"],
  ["Charlot", "El Tramp", "El Comediante", "El Vagabundo"],
  ["Romeo y Julieta", "Hamlet", "Macbeth", "Todas son correctas"],
  ["El Cantar de Mio Cid", "La Celestina", "Don Quijote", "Lazarillo de Tormes"],
  ["Vincent van Gogh", "Claude Monet", "Edvard Munch", "Paul Cézanne"],
  ["Museo de Arte Moderno", "El Met", "Guggenheim", "Smithsonian"],
  ["El Rey León", "Pocahontas", "Aladdin", "Tarzán"],
  ["La Persistencia de la Memoria", "La Última Cena", "La Creación de Adán", "La Venus de Milo"],
  ["Sergio Dalma", "Alejandro Sanz", "Luis Miguel", "Julio Iglesias"],
  ["Notre Dame", "Sagrada Familia", "Catedral de Milán", "Catedral de Burgos"],
  ["James Cameron", "Steven Spielberg", "Quentin Tarantino", "Christopher Nolan"],
  ["Jazz", "Blues", "Rock", "Country"],
  ["Star Wars", "Star Trek", "Guardians of the Galaxy", "Dune"],
  ["Matt Groening", "Seth MacFarlane", "Trey Parker", "Mike Judge"],
  ["Frida Kahlo", "Diego Rivera", "David Alfaro Siqueiros", "Rufino Tamayo"],
  ["El Lazarillo de Tormes", "La Celestina", "Don Quijote", "El Cid"],
  ["Guitarra", "Cajón", "Castañuelas", "Violín"],
  ["Fresco", "Óleo", "Acuarela", "Grabado"],
  ["Harry Potter", "El Señor de los Anillos", "Crónicas de Narnia", "Percy Jackson"],
  ["John Lennon", "Paul McCartney", "Freddie Mercury", "Elton John"],
  ["Globos de Oro", "BAFTA", "Emmy", "Premios Óscar"],
  ["Charlotte Brontë", "Jane Austen", "Mary Shelley", "Virginia Woolf"],
  ["Carnaval","Cirque du Soleil", "Cabaret", "Teatro musical"],
  ["Diego Velázquez", "Francisco Goya", "Pablo Picasso", "Salvador Dalí"],
  ["Toy Story", "Coco","Los Increíbles", "Cars"],
  ["Fantasía", "Blancanieves y los Siete Enanitos", "Dumbo", "Bambi"],
  ["Naranja", "Azul", "Verde", "Rojo"],
  ["Donald Duck", "Mickey Mouse", "Goofy", "Pluto"],
  ["Donatello", "Bernini", "Da Vinci", "Miguel Ángel"]
];

let correctas = [
  0, 2, 1, 0, 3, 1, 0, 2, 1, 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 3, 1, 1, 0, 2, 1, 0, 1, 3
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
    comoJugarTexto.innerHTML = `¡Hola, amante del arte y la diversión! Estás a punto de sumergirte en un juego donde podrás poner a prueba tus conocimientos sobre todo lo relacionado con el mundo del arte, la música, el cine y mucho más. El objetivo es muy sencillo: te haremos algunas preguntas y tendrás que elegir la respuesta correcta entre cuatro opciones. Cada vez que elijas, la opción seleccionada se iluminará, y aquí viene lo más divertido:

Si aciertas, la respuesta se iluminará en verde y ¡sumarás un punto! Si te equivocas, la respuesta se pondrá en rojo, pero no te preocupes, no perderás puntos, solo aprenderás algo nuevo para la próxima vez.

Tienes un tiempo limitado para responder todas las preguntas, ¡así que no te duermas! El juego termina cuando se acaba el tiempo o cuando hayas respondido todas las preguntas. Pero tranquilo, si eres rápido y aciertas, ¡seguro que conseguirás una gran puntuación!

Lo mejor de todo es que todas las preguntas son sobre arte y entretenimiento, así que si te apasionan las películas, los artistas, la música y todo lo relacionado con el mundo del entretenimiento, ¡este es tu momento para brillar!

Así que ya sabes, elige la respuesta correcta, acumula puntos y diviértete mientras demuestras lo que sabes sobre arte y entretenimiento. ¿Estás listo para el reto? ¡Que empiece el juego!`;
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
