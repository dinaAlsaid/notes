'use strict';

const noteModel = require('../models/note.js');

class Collection {
  constructor() {
    // this.id = undefined;
    this.text = '';
  }
  get() {
    if (_id) {
      return noteModel.findOne({ _id });
    } else {
      return noteModel.find({});
    }
  }
  /** Adds Note text and id then console.log the text **/
  create(noteX) {
    const newRecord = new noteModel(noteX);
    return newRecord.save();
  }
  update(_id, record) {
    return noteModel.findByIdAndUpdate(_id, record, { new: true });
  }
  delete(_id) {
    return foodModel.findByIdAndDelete(_id);
  }
}

module.exports = new Collection();
