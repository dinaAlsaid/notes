'use strict'

const minimist = require('minimist');
const Input = require('../lib/input.js');
jest.mock('minimist');
minimist.mockImplementation(()=>{
    return {
        minimistobj: [],
        add : 'do something'
    };
  });
  
describe('valid input command',()=>{
    
    it('returns true when valid input command',()=>{
        const testIn = new Input();
        expect(testIn.valid()).toEqual(true);
    })
});

describe('invalid input command',()=>{
    it('returns false when invalid input command',()=>{
        const testIn = new Input();
        testIn.payload=undefined;
        testIn.action=undefined;
        expect(testIn.valid('notthecommand')).toEqual(false);
    })
});