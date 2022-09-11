//1. Callbacks

// Example-1
/*
function showMessage(message){
    console.log(message);
}
function f1() {
    showMessage("Hello from f1()");
}
function f2() {
    showMessage("Hello from f2()");
}

f1();
f2();
*/

// Example-2
/*
function showMessage(message){
    console.log(message);
}
function f1(num1, num2) {
    let result = num1+num2;
    showMessage(result);
}
f1(5, 50);
*/

// Example-3
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

//
// Example-4
var fs = require("fs");

// Synchronous
/*
console.log("before reading data....");
const data = fs.readFileSync("data1.txt", "utf-8");
// console.log(data);
console.log("after reading data....");
*/

// Asynchronous
/*
console.log("before reading data....");
fs.readFile("data1.txt", "utf-8", (error, data)=>{
    console.log(data);
});
console.log("after reading data....");
*/