'use strict';

const Notes = require('../lib/notes.js');
const Input = require('../lib/input.js');

jest.spyOn(global.console,'log');

describe('Notes module',()=>{
    describe('not a valid command',()=>{
        it('Does not console.log() anything',()=>{
            const testObj =new Input();
            testObj.action="invalid";
            testObj.payload="something";

            const testNote = new Notes(testObj);
            expect(console.log).not.toHaveBeenCalled();
        })
    });
    describe('No data provided',()=>{
        it('Does not console.log() anything',()=>{
            const testObj =new Input();
            testObj.action="invalid";
            testObj.payload=true;

            const testNote = new Notes(testObj);
            expect(console.log).not.toHaveBeenCalled();
        })
    });

    describe('valid command and data',()=>{
        it('Console.log() Adding the data',()=>{
            const testObj =new Input();
            testObj.action="add";
            testObj.payload="something valid";

            const testNote = new Notes(testObj);
            expect(console.log).toHaveBeenCalled();
        })
    })

})