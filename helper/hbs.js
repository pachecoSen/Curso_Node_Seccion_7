"use strict";

const hbs = require('hbs');

hbs.registerHelper('getDate', () => new Date());

module.exports = hbs;