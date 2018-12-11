const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('../server/config/config');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Rutas Rest Apis
app.get('/',function(req,res) {
  res.json('Hola Mundo');  
})

app.get('/usuarios',function(req,res) {
    res.json('get Usuarios');  
})

app.post('/usuario',function(req,res) {
    let body = req.body;

    if (!body.nombre) {
        res.status(400).json({
            ok: false,
            message: 'El Nombre es requerido!'
        })
    } else {    
        res.json({ 
            persona: body 
        });
    }  
})

app.put('/usuario/:id',function(req,res) {
    let id = req.params.id;

    res.json({
        id: id
    });  
});

app.delete('/usuario',function(req,res) {
    res.json('Delete Usuario');  
})

app.get('/',function(req,res) {
  res.json('Hola Mundo');  
})

  
app.listen(process.env.PORT,() => {
    console.log('Escuchando el puerto:',process.env.PORT);
});

