'use strict';

const minimist = require('minimist');
const avaialbleCommands = /add|delete|list|\sa\s|\sl\s|\sd\s/i ;

/**
 * Represents an input command.
 * @constructor
 */
class Input {
  constructor (){
    let arg = minimist(process.argv.slice(2));
    this.action = Object.keys(arg)[1]; //will only take the first command :do for more than one
    this.payload = arg[this.action];
    this.category = arg.category;
  }

  valid (){
    let isActionDefined = this.action ? avaialbleCommands.test(this.action) : false;
    // let isPayloadDefined = this.payload && this.payload !== 'boolean'? this.payload : false; 
    if (isActionDefined) {
      if (typeof this.payload !== 'boolean') {

        return true;
      } else {
        return false;
      }
    } else {
      // console.log('not a valid command');

      return false;
    }
  
  }
}



module.exports = Input;
