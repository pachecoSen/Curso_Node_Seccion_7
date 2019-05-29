"use strict";

let CONFIG = {};

CONFIG.PORT = process.env.PORT || 888;

CONFIG.SEGMENTO = './views/segmentos';
CONFIG.PUBLIC = './public/';
CONFIG.ASSETS = './public/assets/';
CONFIG.HELPER = './helper/';

module.exports = CONFIG;