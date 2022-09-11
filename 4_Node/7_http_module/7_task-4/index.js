var http = require("http");
var fs = require("fs");

var server = http.createServer((request, response)=>{
    if(request.method=='GET'){
        if(request.url==='/'){
            fs.readFile("./public/index.html", (error, data)=>{
                // console.log(error);
                // console.log(data);
                response.writeHeader(200, {"Content-Type":"text/html"});
                response.write(data);
                response.end();
            });
        }
        else if(request.url==='/form1'){
            fs.readFile("./public/form1.html", (error, data)=>{
                response.writeHeader(200, {"Content-Type":"text/html"});
                response.write(data);
                response.end();
            });
        }
        else if(request.url==='/form2'){
            fs.readFile("./public/form2.html", (error, data)=>{
                response.writeHeader(200, {"Content-Type":"text/html"});
                response.write(data);
                response.end();
            });
        }
        else if(request.url==='/getForm1?'){
            response.writeHeader(200, {"Content-Type":"text/html"});
            response.write("Request with get method from form1");
            response.end();
        }
        else{
                response.writeHeader(404, "Page not found error", {"Content-Type":"text/html"});
                response.write("404 Page not found error");
                response.end();            
        }
    }
    else if(request.method=='POST'){
        if(request.url==='/getForm2'){
            response.writeHeader(200, {"Content-Type":"text/html"});
            response.write("Request with post method from form2");
            response.end();
        }
    }
});
server.listen(8000, "127.0.0.1");