"use strict";

require('./config/hbs');

const { ASSETS, PUBLIC, PORT } = require('./config/config');

const express = require('express'),
    { Terminal:terminal } = require('terminal-kit');

const app = express();
const port = PORT;

app.use(express.static(PUBLIC));

app.set('view engine', 'hbs');

app.get('/favicon.ico', (req, res) => res.download(`${ ASSETS }icon/favicon.png`));

app.get('/', (req, res) => res.redirect('home'));
app.get('/:page', (req, res) => res.render(req.params.page, {"nombre" : 'Ignacio'}));

app.listen(port, () => terminal().green(`Servidor escuchando en el puerto: ${ port }!`));