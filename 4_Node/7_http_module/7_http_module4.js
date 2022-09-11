//create a server

var http = require("http");

var server = http.createServer((request, response)=>{
    if(request.method==='GET'){
        response.writeHeader(200, {"Content-Type":"text/html"});
        response.write("Hello from GET Method");
    }
    else if(request.method ==='POST'){
        response.writeHeader(200, {"Content-Type":"text/html"});
        response.write("Hello from POST Method");
    }
    else{
        response.writeHeader(405, "Unknown method", {"Content-Type":"text/html"});
        response.write("405 Unknown method error!");
    }
    response.end();
});
server.listen(8000, '192.168.102.221');