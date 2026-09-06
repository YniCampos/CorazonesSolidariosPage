// Formulario de voluntariado
document.getElementById('form-voluntario').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('¡Gracias por querer ser parte! Nos pondremos en contacto pronto.');
  this.reset();
});
