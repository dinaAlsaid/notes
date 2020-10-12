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

describe('input module',()=>{
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
            expect(testIn.valid()).toEqual(false);
        })
    });
    
    describe('no data provided',()=>{
        it('returns false when no data is provided after the command',()=>{
            const testIn = new Input();
            testIn.payload=true; //minimist will read it as true when there is no data provided
            testIn.action='add';
            expect(testIn.valid()).toEqual(false);
        })
    });
})

