window.addEventListener("load", iniciar);

function iniciar() {
  const iconoAudio = document.getElementById("sound-icon");
  const audio = document.getElementById("music");
  let audioStarted = false;

  // muted audio by default
  audio.muted = true;

  iconoAudio.addEventListener("click", function () {
    // al primer click suena el audio
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

  let reloj = document.getElementById("clock-icon");
  let modelo = document.getElementById("modelofecha");
  let modeloTexto = document.getElementById("fecha-texto"); // Cambié el id aquí

  reloj.addEventListener("click", function () {
    let fecha = new Date();
    let formatoFecha = fecha.toLocaleDateString();
    let formatoHora = fecha.toLocaleTimeString();
    modeloTexto.textContent = `Fecha: ${formatoFecha} - Hora: ${formatoHora}`;
    modelo.style.display = "flex";
  });

  // About Us functionality
  let botonAbout = document.getElementById("botonAbout");
  let modeloAbout = document.getElementById("modeloabout"); // Cambié el id aquí
  let aboutTexto = document.getElementById("about-texto"); // Cambié el id aquí

  botonAbout.addEventListener("click", function () {
    aboutTexto.textContent = `¡Hola! Somos Fátima y Sergio, dos estudiantes apasionados por el desarrollo de aplicaciones web, actualmente cursando nuestro segundo y último año de este fascinante camino. Nuestro interés por la tecnología y los videojuegos nos llevó a crear este divertido proyecto: un trivia de preguntas que combina aprendizaje y entretenimiento.
        Este juego fue desarrollado utilizando JavaScript, HTML y CSS, aprovechando las herramientas que hemos aprendido durante el curso. Queríamos diseñar algo que no solo pusiera a prueba los conocimientos de los jugadores, sino que también reflejara nuestra creatividad y habilidades técnicas.
        Creemos que los juegos tienen el poder de conectar a las personas y de convertir el aprendizaje en una experiencia emocionante. Este trivial es nuestro pequeño aporte a ese mundillo, y esperamos que disfrutes tanto jugándolo como nosotros disfrutamos creándolo.
        ¡Gracias por acompañarnos en este viaje!`;
    modeloAbout.style.display = "flex"; // Cambié el id aquí
  });

  // Close modals if clicked outside
  window.addEventListener("click", function (event) {
    if (event.target === modelo) {
      modelo.style.display = "none";
    }
    if (event.target === modeloAbout) { // Cambié el id aquí
      modeloAbout.style.display = "none"; // Cambié el id aquí
    }
  });

  const triviaRueda = document.getElementById("triviaRueda");
  let girando = false;

  triviaRueda.addEventListener("click", () => {
    if (!girando) {
      girando = true;
      triviaRueda.classList.add("girando");

      setTimeout(() => {
        girando = false;
        triviaRueda.classList.remove("girando");
      }, 1700); // Duración de la animación en milisegundos
    }
  });
}
