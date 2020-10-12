'use strict';

const minimist = require('minimist');

/**
 * Represents an input command.
 * @constructor
 */
function Input() {
  let arg = minimist(process.argv.slice(2));
  let command = Object.keys(arg)[1]; //will only take the first command :do for more than one
  let data = arg[command];

  //action is an object
  this.usrinput = this.validate(command, data);

}

/** validate if user entered a valid command and if there is data associated with it **/
Input.prototype.validate = function (command, data) {
  let retObj = {};
  retObj.action = undefined;
  retObj.payload = undefined;

  if (command === 'add' || 'a') {
    //check for entered string if no string the default value is true
    if (typeof data !== 'boolean') {
      retObj.action = command;
      retObj.payload = data;
    } else {
      console.log('no data was entered');
    }
  } else {
    console.log('not a valid command');
  }
  return retObj;
};

module.exports = Input;
