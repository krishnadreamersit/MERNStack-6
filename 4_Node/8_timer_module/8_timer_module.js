// setTimeout - Execute the code after a designated amount of milliseconds.
//Example-1
/*
function myFunc(arg) {
    console.log(`Value is : ${arg}`);
}
setTimeout(myFunc, 5*1000, 'Hello');
*/

// setImmediate execute code at the end of the current event loop cycle.
// Example-2
/*
console.log('before immediate');
setImmediate((arg) => {
  console.log(`executing immediate: ${arg}`);
}, 'so immediate');
console.log('after immediate');
*/

// Example-3
/*
let objDT = null
function intervalFunc() {
    objDT = new Date();
    console.log(`${objDT}`);
}
setInterval(intervalFunc, 1*1000);
*/

// Example-4
/*
const timeoutObj = setTimeout(() => {
    console.log('Hello from setTimeout');
  }, 1500);
  
const immediateObj = setImmediate(() => {
    console.log('Hello fropm setImmediate');
});
  
const intervalObj = setInterval(() => {
    console.log('Hello from setInterval');
}, 500);
  
clearTimeout(timeoutObj);
clearImmediate(immediateObj);
clearInterval(intervalObj);
*/
