// Manejo del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log("Mensaje enviado:");
    console.log("Nombre:", name);
    console.log("Correo:", email);
    console.log("Mensaje:", message);

    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');

    // Limpiar formulario
    this.reset();
});
