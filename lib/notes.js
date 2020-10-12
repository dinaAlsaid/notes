'use strict';

const avaialbleCommands = /add|a/i;
let i = 0;

/**
 * Represents a note.
 * @constructor
 */

class Notes {
  constructor(userNote){
    //userNote is an object
    this.execute(userNote);
  }

  /** Excute the function coreesponding to the command line **/
  execute(userNote){
    if (userNote.valid()) {
      i += 1;
      this.add(userNote.payload, i);
    }
  
  }

  /** Adds Note text and id then console.log the text **/
  add(noteText, i){
    let retObj = {};
    retObj.id = i;
    retObj.text = noteText;
    console.log('Adding note:', noteText);
  
  }
}

module.exports = Notes;
