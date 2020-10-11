'use strict';


const avaialbleCommands =/add/i;
let i=0;

function Notes(userNote){
    //userNote is an object
    this.execute(userNote);
}

Notes.prototype.execute= function(userNote){
    if(avaialbleCommands.test(userNote.action)){
        i+=1;
        this.add(userNote.payload,i);
    }
}

Notes.prototype.add = function (noteText,i){
    let retObj={}
    retObj.id=i;
    retObj.text=noteText;
    console.log('Adding note:', noteText);
}
module.exports = Notes; 