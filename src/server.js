import rutaProvedor from './routers/gestionProductor_Routers.js'

const express = require('express');
const app = express();
const port = 3000;




app.get('/', (req, res) => {
    res.send('Hola mundo');
  });

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


app.use('/', rutaProvedor)