


console.log('Welcome user to the password validator tool')


var passwordLength = 10;

//console.log("Enter Password:");
//Node.js readline
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Password:', (answer) => {
    if(answer.length == passwordLength) {
        console.log("success");
    }   
    else{
        console.log("not enough characters");
        
    }  
  rl.close();
});


