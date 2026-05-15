const express = require('express');
const app = express();

// Definir el puerto 
const PORT = process.env.PORT || 3000;

// Ruta principal (/) 
app.get('/', (req, res) => {
    res.send('¡Hola! Esta es la respuesta de la ruta principal.');
});

// Ruta opcional (/ejemplo) 
app.get('/ejemplo', (req, res) => {
    res.send('Has accedido a la ruta opcional /ejemplo.');
});

// Levantar el servidor 
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});