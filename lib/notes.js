'use strict';

let avaialbleCommands = /add|delete|list|\sa\s|\sl\s|\sd\s/i;
const mongoose = require('mongoose');
const notedb = require('../models/note.js');
const noteCollection = require('../models/notes-collection.js');

/**
 * Represents a note.
 * @constructor
 */

class Notes {
  constructor(userNote) {
    //userNote is an object
    // this.id = undefined;
    this.text = 'default';
    this.inputObj = userNote;
    this.result= this.execute().then(mongoose.disconnect);
  }

  /** Excute the function coreesponding to the command line **/
  async execute() {
    if (this.inputObj.valid()) {
      switch (this.inputObj.action.match(avaialbleCommands)[0]) {
      case 'add':
      case 'a':
        let ret = await noteCollection.create(this.inputObj);
        return ret;
        break;
      case 'delete':
      case 'd':
        this.delete()
        break;
      case 'list':
      case 'l':
        this.list();
        break;
      }
    }
  }

  /** Adds Note text and id then console.log the text **/
  // async add() {
  // }

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
