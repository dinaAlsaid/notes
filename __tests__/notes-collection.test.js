'use strict';

require('@code-fellows/supergoose');

const Input = require('../lib/input.js');
const Notes = require('../lib/notes.js');
const noteCollection = require('../models/notes-collection.js');

// describe('Notes model', async () => {
//   it('can create a new record in the database', async () => {
//     const newNote = new Input();
//     newNote.action = 'add';
//     newNote.payload = 'new note from notes-collection test' ;
//     // console.log("new note --------- \n",newNote)
//     const testNote = await new Notes(newNote);

//     return testNote.execute().then(()=>{
//       return noteCollection.create(testNote)
//       .then((rec) => {
//         console.log("test note ----------\n" , testNote, "\nrec----------",rec);

//         Object.keys(testNote).forEach((item) => {
//           expect(rec[item]).toEqual(testNote[item]);
//         });
//       });
//     })
//   });

//   it('deletes a record by given id',()=>{
//     noteCollection.delete(_id);
//     expect()
//   })
// });
