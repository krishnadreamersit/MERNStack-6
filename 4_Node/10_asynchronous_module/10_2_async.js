// Example-1
// Callback function
/*
function showMessage(message){
    console.log(message);
}
function f1(num1, num2, myfunction) {
    let result = num1+num2;
    myfunction(result);
}
f1(6,7, showMessage);
*/

// Example-2
function f1() {
    console.log("Hello from f1()");
}
setTimeout(f1, 1*1000);


// Example-3
function getTime() {
    let objDT = new Date();
    console.log(objDT.getHours() + ":" +objDT.getMinutes() + ":" +objDT.getSeconds());
}
setInterval(getTime, 1*1000);


// Example-4
var fs = require("fs");

// Writing content on file
fs.writeFile("data.txt", "Hello!", (error)=>{
    console.log("create and write content successfully.")
});


//Append content on file
fs.appendFile("data.txt", "How are you?", (error)=>{
    console.log("Append content successfully.")
});


// Read content from file
fs.readFile("data.txt", 'utf-8', (error, data)=>{
    if(error){
        console.log(`Error :${error}`)
    }
    else{
        console.log(data);
    }    
});