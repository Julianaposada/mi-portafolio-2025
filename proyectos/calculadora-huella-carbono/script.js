document.getElementById('carbon-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const transport = parseFloat(document.getElementById('transport').value);
    const energy = parseFloat(document.getElementById('energy').value);
    const diet = parseFloat(document.getElementById('diet').value);

    // Ejemplo de cálculo simple de huella de carbono
    const carbonFootprint = (transport * 0.2) + (energy * 0.5) + (5 - diet);

    document.getElementById('result').innerHTML = `Tu huella de carbono es: ${carbonFootprint.toFixed(2)} kg CO2/mes`;
});
