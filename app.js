const express = require('express'),
    { Terminal:terminal } = require('terminal-kit');
const app = express();
const port = 888;

app.use(express.static('./public'));

app.set('view engine', 'hbs');

app.get('/index.html');

app.listen(port, () => terminal().green(`Servidor escuchando en el puerto: ${port}!`));