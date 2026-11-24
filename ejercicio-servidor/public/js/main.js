document.addEventListener("DOMContentLoaded", () => {
  const formularioContacto = document.querySelector('form[action="/contacto"]');

  if (!formularioContacto) return;

  formularioContacto.addEventListener("submit", () => {
    const botonEnviar = formularioContacto.querySelector('button[type="submit"]');
    if (botonEnviar) {
      botonEnviar.disabled = true;
      botonEnviar.textContent = "Enviando...";
    }
  });
});