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

// Conectar con mongodb
mongoose.connect('mongodb://localhost/cinestack', function(){
    console.log('Conexión hecha a la base de datos.');
})

.catch(err => {
    console.error('Error iniciando aplicación', err.stack);
    process.exit(1);
});

// Incluir controladores
fs.readdirSync('controladores').forEach ( function (archivo) {
    if (archivo.substr(-3) == ".js") {
        const ruta = require("./controladores/" + archivo);
        ruta.controller(app);
    }
});

router.get('/', function (req, res) {
    res.json({mensaje: '¡API inicializada!'});
});

const puerto = process.env.API_PORT || 8081;
app.use('/', router);
app.listen(puerto, function() {
    console.log(`api corriendo en http://localhost:${puerto}`);
});