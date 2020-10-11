'use strict';

const minimist = require('minimist');

function Input() {

    let arg= minimist(process.argv.slice(2));
    let command = Object.keys(arg)[1]; //will only take the first command :do for more than one
    let data = arg[command];

    //action is an object
    this.usrinput = this.validate(command,data);
    console.log(this.usrinput);

}

Input.prototype.validate = function(command,data){

    if (command === 'add'){
        //check for entered string if no string the default value is true
        if( typeof(data) !== 'boolean'){
            let retObj={};
            retObj.action=command;
            retObj.payload=data;
            return retObj;    
        } else{
            console.log('no data was entered');
        }
    } else {
        console.log('not a valid command');
        return undefined ;

    }
}

module.exports = Input; 