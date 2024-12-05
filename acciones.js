window.addEventListener("load", function () {
  const wordleIcon = document.getElementById("icon-star");
  wordleIcon.addEventListener("click", function () {
    window.location.href = "wordle.html";
  });
  // MÚSICA
  // funciona así: Al recargar la página, pausado. Al pausar play. Mute by default, respetando las políticas de navegadores.
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
    comoJugarTexto.innerHTML = `¡Hola, aventurero del conocimiento! 🧠✨
        Estás a punto de embarcarte en una misión épica en esta página de categorías para jugar. Aquí, elige sabiamente tu destino, porque cada categoría que seleccionas te llevará a un universo lleno de desafíos y diversión. 🚀
        ¿Te gusta la ciencia? Prepárate para preguntas que podrían hacerte sentir como un futuro Einstein. 🧪 ¿O tal vez prefieres el arte? 🎨 Entonces, pon a prueba tu creatividad y conocimiento artístico. ¿Deportes? Historia? Geografía? ¡Las opciones están a tus pies! Cada una te espera con preguntas listas para poner a prueba tus habilidades.
        Pero espera, hay más. 👀
        Si te fijas bien, verás un icono de estrella brillante. 🌟 Si haces clic en él, ¡te adentrarás en una modalidad de juego completamente diferente! Aquí no tendrás que responder preguntas, sino que te enfrentarás al desafío de reordenar palabras para formar frases correctas. Es como un rompecabezas, pero con palabras. 🧩📝
        Así que, ¿qué esperas? Escoge tu camino y prepárate para aprender, reír y, sobre todo, ¡divertirte como nunca! 😄`;
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
});
