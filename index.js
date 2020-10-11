'use strict'

const Notes = require('./lib/notes.js');
const Input = require('./lib/input.js');

let usrInput = new Input();
let note = new Notes(usrInput.usrinput);
