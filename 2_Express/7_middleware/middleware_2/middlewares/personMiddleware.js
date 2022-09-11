var personLogger=(request, response, next)=>{
    console.log("Hi from PersonLogger");
    next();
};
var allPersonLogger=(request, response, next)=>{
    console.log("Hi from AllPersonLogger");
    next();
};

export {personLogger, allPersonLogger};