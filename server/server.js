require('./config/config');

const express = require('express')

const app = express()

const bodyParser = require('body-parser');
////////////////////////////////////////////////////////////////////
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());


/*
app.use(function(req,res){
    res.setHeader('Content-Type', ' text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body,null,2))
})
*/

app.get('/usuario', function(req, res) {
    res.json('get Usuario');
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre == undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'Es necesario ingresar el nombre'
        });
    } else {
        res.json({
            persona: body
        });
    }
    res.json({
        body
    });
});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    res.json('delete usuario');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto', 3000);
});