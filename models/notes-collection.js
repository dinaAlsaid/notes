'use strict';

const noteModel = require('../models/note.js');

class Collection {
    constructor(){
        // this.id = undefined;
        this.text = '';
    
    }
    get(){
        if (_id) {
            return noteModel.findOne({ _id });
          } else {
            return noteModel.find({});
          }
      
    }
    /** Adds Note text and id then console.log the text **/
    async create(record){
        if (typeof record.payload !== 'boolean') {
            console.log(this);

            // this.id = 0;
            this.text = record.payload;
            console.log('Adding note:', record.payload);
            console.log(this);

            const noteX = {
              text: record.payload,
              category: record.category ? record.category : 'none',
            };
            const newNote = new noteModel(noteX);
            const ret = await newNote.save();
            return ret; 
          }
      
         
    }
    update(_id, record){
        return noteModel.findByIdAndUpdate(_id, record, { new: true });

    }
    delete(_id){
        return foodModel.findByIdAndDelete(_id);

    }

}

module.exports = new Collection();