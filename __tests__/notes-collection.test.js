'use strict';

require('@code-fellows/supergoose');

const Input = require('../lib/input.js');
const Notes = require('../lib/notes.js');
const noteCollection = require('../models/notes-collection.js');
describe('Notes model', () => {
  it('can create a new record in the database', async () => {
    const inputObj = new Input();
    inputObj.action = 'add';
    inputObj.payload = 'new note from notes-collection test';
    const newNote = await new Notes(inputObj);
    return newNote.result.then((rec) => {
        console.log('result',rec, 'new note', newNote)
      Object.keys(newNote).forEach((item) => {
        expect(rec[item]).toEqual(newNote[item]);
      });
    });
  });
});
