var http = require("http");
var server = http.createServer((request, response)=>{
    response.writeHead(200, {"Content-Type":"text/html"});
    //read from file
    //read from database
    //read from network
    //and redirected to browser with status code 200
    obj1 = {message:"Hello from webserver"};
    strObj1  = JSON.stringify(obj1);
    response.write(strObj1);
    response.end();
});
server.listen(8000);