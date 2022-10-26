const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');

const app = express();
const router = express.Router();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Conectar con mongoDB
mongoose.connect('mongodb://localhost/cinestack',  function() {
    console.log('Conexión hecha a la base de datos');
})
  .catch(err => {
    console.error('Error iniiando la aplicación: ', err.stack);
    process.exit(1);
  });

  router.get('/', function(req, res) {
    res.json({mensaje: 'API Inicializada!'})
  });

  const puerto = process.env.API_PORT || 8081;
  app.use('/', router);
  app.listen(puerto, function() {
    console.log(`api corriendo en https://localhost:${puerto}`);
  });