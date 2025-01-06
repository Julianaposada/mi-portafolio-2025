document.getElementById('mostrarProyectos').addEventListener('click', function() {
    const listaProyectos = document.getElementById('listaProyectos');
    if (listaProyectos.style.display === 'none') {
        listaProyectos.style.display = 'block';
    } else {
        listaProyectos.style.display = 'none';
    }
});
