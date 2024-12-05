window.addEventListener("load", iniciar);

function iniciar() {
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
    comoJugarTexto.innerHTML = `¡Bienvenido, futuro campeón del conocimiento! 🎉👾
            Estás en la sala de personalización, el lugar donde comienza tu aventura. Aquí eliges tu identidad en el mundo del juego.
            Elige un nickname, ese nombre único que te representará durante la partida. Escoge un avatar, porque todos necesitamos un compañero visual que hable de nuestra personalidad. Por último, ingresa tu correo electrónico para que podamos guardar tu progreso y hacer tu experiencia aún mejor.
            Cuando termines, haz clic en ¡A JUGAR! y prepárate para una experiencia divertida y llena de retos. Este es tu momento, personaliza tu perfil y da el primer paso hacia la gloria. ¡Nos vemos dentro! 🚀`;
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

  const avatars = ["img/ava1.png", "img/ava2.png", "img/ava3.png"];
  let currentAvatarIndex = 0; // gatito by default

  // Elementos del DOM
  const avatarElement = document.getElementById("avatar");
  const leftArrow = document.getElementById("arrow-left");
  const rightArrow = document.getElementById("arrow-right");

  // Función para cambiar el avatar
  function updateAvatar(index) {
    avatarElement.src = avatars[index];
  }

  // Eventos para cambiar de avatar
  leftArrow.addEventListener("click", () => {
    currentAvatarIndex =
      (currentAvatarIndex - 1 + avatars.length) % avatars.length;
    updateAvatar(currentAvatarIndex);
  });

  rightArrow.addEventListener("click", () => {
    currentAvatarIndex = (currentAvatarIndex + 1) % avatars.length;
    updateAvatar(currentAvatarIndex);
  });
}
