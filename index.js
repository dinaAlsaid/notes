#!/usr/bin/env node
'use strict'

const Notes = require('./lib/notes.js');
const Input = require('./lib/input.js');

let usrInput = new Input();
// usrInput.valid()
let note = new Notes(usrInput);
console.log(usrInput);