'use strict';

const minimist = require('minimist');
const avaialbleCommands = /add|a|delete|d|list|l/i ;

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
    let isActionDefined = this.action ? this.action.match(avaialbleCommands) : false;
    // let isPayloadDefined = this.payload && this.payload !== 'boolean'? this.payload : false; 
    if (isActionDefined) {
      // console.log(this.action);
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
