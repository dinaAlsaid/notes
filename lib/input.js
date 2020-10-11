'use strict'

const minimist = require('minimist');

function Input() {
    let arg= minimist(process.argv);
    console.log(arg);
}

module.exports = Input;