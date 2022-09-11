// Example-1
//Simple WebServer
/*
const http = require("http");
const server = http.createServer((req, res)=>{    
    res.write("Hello world of NodeServer");
    res.end('The end!');
});
server.listen(8000, "127.0.0.1",()=>{
    console.log("Listening the port 8000");
});
*/

// Example-2
//HttpRequest
/*
const http = require("http");
const server = http.createServer((req, res)=>{ 
    // console.log(req.url) ;
    if(req.url=="/"){
        res.write("Hello world of NodeServer");
    }
    else if(req.url=="/about"){
        res.write("About Us");
    }
    else if(req.url=="/contact"){
        res.write("Contact Us");
    }
    else{
        res.end('404 error pages. Page does not exist');
    }
});
server.listen(8000, "127.0.0.1",()=>{
    res.writeHead(404, {"Content-type":"text/html"});
    console.log("Listening the port 8000");
});
*/

// Example-3
//QueryParameter
/*
const http = require("http");
const url = require("url");
const server = http.createServer((req, res)=>{    
    const urlObject = url.parse(req.url, true);
    // console.log(urlObject.host);
    // console.log(urlObject.pathname);
    // console.log(urlObject.search);    
    res.end('The end!');
});
server.listen(8000, "127.0.0.1",()=>{
    console.log("Listening the port 8000");
});
*/

// Auto Refresh Server on Update
// Example-1
// const http = require("http");
// const server = http.createServer((request, response)=>{
//     response.writeHead(200, { 'Content-Type': 'application/json' });
//     response.end(JSON.stringify({data: 'Hello World.'}));
// });
// server.listen(8000, "127.0.0.1")

// Install nodemon package
    // npm install nodemon -g
    // nodemon http_module.js