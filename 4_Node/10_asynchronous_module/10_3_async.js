// Example-1
/*
console.log("start .....");
console.log("processing .....");
console.log("end .....");
*/

// Example-2
/*
console.log("start .....");
setTimeout(()=>{
    console.log("processing .....");
}, .5*1000);
console.log("end .....");
*/

// Example-3
/*
let num1 = 5;
let num2 = 0;
setTimeout(()=>{
    num2=9;
}, 2*1000);
console.log(num1+num2);
*/

// Example-4
let num1=20;
let num2=0;
let result = new Promise((resolve, reject)=>{
   setTimeout(()=>{
      resolve(30);
   },2*1000)
})
result.then((data)=>{
   num2=data;
   console.log(num1+num2)
})
