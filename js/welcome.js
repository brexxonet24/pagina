const mensajes = [
    "Bienvenidos a la Pagina de la ET 24",
    "Somos Computación",
    "Somos Gestión y Administración ",
    "Somos Educación"
  ];

  let contenedor = document.getElementById("contenedor");
  let index = 0;

  function mostrarMensaje() {
    // Crear y mostrar el mensaje
    let mensaje = document.createElement("div");
    mensaje.classList.add("mensaje");
    mensaje.textContent = mensajes[index];
    contenedor.appendChild(mensaje);

    // Animar la opacidad para que aparezca
    setTimeout(() => {
      mensaje.style.opacity = 1;
    }, 100); // Delay breve para disparar la transición

    // Animar la opacidad para que se disuelva
    setTimeout(() => {
      mensaje.style.opacity = 0;
    }, 3000); // El mensaje permanece visible 3 segundos

    // Eliminar el mensaje del DOM después de la animación
    setTimeout(() => {
      contenedor.removeChild(mensaje);
      index = (index + 1) % mensajes.length; // Cambiar al siguiente mensaje
      mostrarMensaje(); // Llamar de nuevo para el siguiente mensaje
    }, 5000); // Tiempo total (aparición + visibilidad + disolución)
  }

  // Iniciar la animación
  mostrarMensaje();