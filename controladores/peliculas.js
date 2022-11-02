const EsquemaPelicula = require('../modelos/Pelicula');

module.exports.controller = (app) => {
    // Obtener todas las películas
    app.get('/peliculas', (req, res) => {
        EsquemaPelicula.find({}, 'nombre descripcion anho_pub genero', (error, peliculas) => {
            if (error) {console.error(error);}
            else {
                res.send({
                    peliculas, 
                });
            }
        });
    });
    
    // Agregar una nueva pelicula
    app.post('/peliculas', (req, res) => {
        console.log(req.body);
        const nuevaPelicula = new EsquemaPelicula({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            anho_pub: req.body.anho_pub,
            genero: req.body.genero,
        });

        //nuevaPelicula.save((error, pelicula) => {
        nuevaPelicula.save(function(error, pelicula) {
            if (error) 
            { 
                console.error(error); 
                res.send(error);
            }
            else 
            {
                res.send(pelicula);
            }
        });
    })
};
 