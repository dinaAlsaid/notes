'use strict';

const avaialbleCommands = /add|a/i;
let i = 0;

/**
 * Represents a note.
 * @constructor
 */

function Notes(userNote) {
  //userNote is an object
  this.execute(userNote);
}

/** Excute the function coreesponding to the command line **/
Notes.prototype.execute = function (userNote) {
  if (avaialbleCommands.test(userNote.action)) {
    i += 1;
    this.add(userNote.payload, i);
  }
};

/** Adds Note text and id then console.log the text **/
Notes.prototype.add = function (noteText, i) {
  let retObj = {};
  retObj.id = i;
  retObj.text = noteText;
  console.log('Adding note:', noteText);
};
module.exports = Notes;
