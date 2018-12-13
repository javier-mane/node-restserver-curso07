const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');

const app = express();

// Rutas de Usuario
app.get('/',function(req,res) {
    res.json('Hola Mundo');  
  })
  
  app.get('/usuarios',function(req,res) {
      res.json('get Usuarios');  
  })
  
  app.post('/usuario',function(req,res) {
      let body = req.body;
  
      let usuario = new Usuario({
          nombre: body.nombre,
          email: body.email,
          password: bcrypt.hashSync(body.password,10),
          role: body.role
      })
    
      usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            usuario: usuarioDB
        })
      })

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

  module.exports = app;