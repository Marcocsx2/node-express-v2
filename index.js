var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hola Express</h1>');
});

app.get('/saludo', (req, res) => {
  res.send('<h1>Hola Marco Vizcarra</h1>');
});

app.listen(8000, () => {
  console.log('El servidor esta corriendo en el puerto 8000');
});
