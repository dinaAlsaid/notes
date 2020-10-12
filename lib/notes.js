'use strict';

let i = 0;
let avaialbleCommands = /add|a/i ;
/**
 * Represents a note.
 * @constructor
 */

class Notes {
  constructor(userNote){
    //userNote is an object
    this.id=undefined;
    this.text = '';
    this.execute(userNote);
  }

  /** Excute the function coreesponding to the command line **/
  execute(userNote){
    if (userNote.valid()) {
      switch(userNote.action.match(avaialbleCommands)[0]){
      case 'add':
      case 'a':
        this.add(userNote.payload, i);
        i += 1;
      }
    }
  
  }

  /** Adds Note text and id then console.log the text **/
  add(noteText, i){
    this.id = i;
    this.text = noteText;
    console.log('Adding note:', noteText);
  
  }
}

module.exports = Notes;
