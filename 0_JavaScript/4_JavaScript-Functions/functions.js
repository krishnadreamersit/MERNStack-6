// Global Variable
var str0 = "Hi";
let str1 = "hello";
function f1(){
    console.log(str1);
}

function f2(){
    console.log(str1);
}	

//Local Variable
let str2 = "Hi"; //Global variable
function f3(){
    let str3 ="JavaScript"; //Local variable
    console.log(str2+" "+str3);	
}

//Hoisting function	
//f4();	
function f4() {
  console.log("This function has been hoisted.");
};

//Default parameter
function f5(name="NA", address="NA"){
    console.log("NAME : "+name);
    console.log("ADDRESS : "+address);
}

//Recrusive function
function f6(num1){
    if(num1==11){
        return 0;
    }
    else{
        console.log(num1);			
        f5(num1+1);
    }		
}		

function ShowMessage(fullName)
{
    function SayHi() {
        alert("Hi " + fullName);
    }
    return SayHi();
}	

//Arrow funcions
var sayHi = (message)=>console.log(message);

var sum = (num1, num2)=> {
    var num3 = num1 + num2;
    return num3;
}		

//Rest Parameter
function calcSum(...args){
    let total=0;
    for(let num of args){
        total+=num
    }
    return total;
}
