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
    this.text = 'default';
    this.inputObj = userNote;
  }

  /** Excute the function coreesponding to the command line **/
  async execute() {
    if (this.inputObj.valid()) {
      switch (this.inputObj.action.match(avaialbleCommands)[0]) {
      case 'add':
      case 'a':
        let ret =await this.add(this.inputObj);
        return ret;
        break;
      case 'delete':
      case 'd':
        await this.delete()
        break;
      case 'list':
      case 'l':
        console.log('swithc statement')
        await this.list();
        break;
      }
    }
  }

  /** Adds Note text and id then console.log the text **/
  async add(record){
    if (typeof(record.payload) !== 'boolean') {
      // this.id = 0;
      this.text = record.payload;
      console.log('Adding note:', record.payload);
      console.log(record.category,record.payload)
      const noteX = {
        text: record.payload,
        category: record.category || record.category !== 'undefined'? record.category : 'none',
      };
      console.log(record.category,record.payload)

      await noteCollection.create(noteX);
    }
    
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
    if (typeof(this.inputObj.payload) === 'boolean') {
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
