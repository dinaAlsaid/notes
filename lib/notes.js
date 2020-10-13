'use strict';

let avaialbleCommands = /add|a|delete|d|l|list/i;
const mongoose = require('mongoose');
const notedb = require('../models/note.js');
/**
 * Represents a note.
 * @constructor
 */

class Notes {
  constructor(userNote) {
    //userNote is an object
    this.id = undefined;
    this.text = '';
    this.inputObj = userNote;
    this.execute();
  }

  /** Excute the function coreesponding to the command line **/
  execute() {
    if (this.inputObj.valid()) {
      switch (this.inputObj.action.match(avaialbleCommands)[0]) {
      case 'add':
      case 'a':
        this.add().then(mongoose.disconnect);
        break;
      case 'delete':
      case 'd':
        this.delete().then(mongoose.disconnect);
        break;
      case 'list':
      case 'l':
        this.list().then(mongoose.disconnect);
        break;
      }
    }
  }

  /** Adds Note text and id then console.log the text **/
  async add() {
    this.id = 0;
    this.text = this.inputObj.payload;
    console.log('Adding note:', this.inputObj.payload);

    const noteX = {
      text: this.inputObj.payload,
      category: this.inputObj.category ? this.inputObj.category : 'none',
    };
    const newNote = new notedb(noteX);
    await newNote.save();
  }

  /** deletes document from database **/

  async delete() {
    await notedb.findOneAndDelete(this.inputObj.payload);
  }

  async list() {
    const anyWord = /\w/g;
    let exampleObj = {
      text: anyWord,
      category: anyWord,
    };

    if (typeof this.inputObj.payload === 'boolean') {
      exampleObj.category = anyWord;
    } else {
      exampleObj.category = this.inputObj.payload;
    }
    const listArr = await notedb.find(exampleObj);
    listArr.forEach((item) => {
      console.log(
        `${item.text} \n Category: ${item.category} ID: ${item._id} \n ------------`,
      );
    });
  }
}

module.exports = Notes;
