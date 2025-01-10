document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue
    alert('Formulario enviado. ¡Gracias por tu interés!');
});
