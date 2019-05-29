"use strict";

const { SEGMENTO, HELPER } = require('./config');

const { Terminal:terminal } = require('terminal-kit'),
    patch = require('path');

const hbs = require(patch.resolve(`${ HELPER }hbs`));

hbs.registerPartials(SEGMENTO, () => {
    terminal().green(`\nPlantillas cargadas...`);
});