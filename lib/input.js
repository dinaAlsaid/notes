'use strict';

const minimist = require('minimist');

/**
 * Represents an input command.
 * @constructor
 */
class Input {
  constructor (){
    let arg = minimist(process.argv.slice(2));
    this.action = Object.keys(arg)[1]; //will only take the first command :do for more than one
    this.payload = arg[this.action];
  }

  valid (){
    console.log(this.action, this.payload);

    if (this.action === 'add' || this.action ==='a') {
      //check for entered string if no string the default value is true
      if (typeof (this.payload) !== 'boolean') {
        return true;
      } else {
        this.payload=undefined;
        console.log('no data was entered');
        return false;
      }
    } else {
      console.log(this.action,this.payload);
      this.payload=undefined;
      this.action=undefined;
      console.log('not a valid command');
    }
    return false;
  
  }
}



module.exports = Input;
