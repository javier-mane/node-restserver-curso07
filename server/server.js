const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
require('../server/config/config');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Importa las rutas de Usuario
app.use( require('./routes/usuario'));

mongoose.connect('mongodb://localhost:27017/cafe',(err,resp) =>{
    if (err) throw err;
    console.log('Base de datos is OnLine.')
})

app.listen(process.env.PORT,() => {
    console.log('Escuchando el puerto:',process.env.PORT);
});

