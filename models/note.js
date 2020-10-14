'use strict';

const mongoose = require('mongoose');

const notedb = new mongoose.Schema({
  text : {type:'string' , required : true},
  category : {type:'string' , required : true},

});

module.exports = mongoose.model('notedb', notedb);
