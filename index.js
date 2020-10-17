#!/usr/bin/env node
'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const Notes = require('./lib/notes.js');
const Input = require('./lib/input.js');

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/notedb';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let usrInput = new Input();
let note = new Notes(usrInput);
note.execute().then(mongoose.disconnect);
