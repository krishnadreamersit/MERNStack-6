var myLogger=(request, response, next)=>{
    console.log("Hi from myLogger");
    next();
};

export {myLogger};