var myLogger=(request, response, next)=>{
    // values from user
    // type conversion, validation, process-> result -> 
    //        -> add on request and redirect to specific 
    //                -> route/url pattern (web.js)
    // response.redirect('url_pattern')
    console.log("Hi from myLogger");
    next();
};
export default myLogger;