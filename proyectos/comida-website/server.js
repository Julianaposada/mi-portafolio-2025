const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/contact', (req, res) => {
    console.log('Mensaje recibido:', req.body);
    res.status(200).send('Mensaje recibido');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
