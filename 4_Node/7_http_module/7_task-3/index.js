// Rendering HTMl File
/*
var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer((req, res)=>{ 
    fs.readFile('./public/index.html', 'utf-8', function(err, html){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(html);
    });
});
server.listen(8000, "127.0.0.1");
*/

// Rendering HTMl file, css, images, and js
var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");

var server = http.createServer((req, res)=>{ 
    if(req.url === "/"){
        fs.readFile('./public/index.html', 'utf-8', function(err, html){
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(html);
        });
    }
    else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type":"text/css"});
        fileStream.pipe(res);
    }
    else if(req.url.match("\.png$")){
        var imagePath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type":"image/png"});
        fileStream.pipe(res);
    }
    else if(req.url.match("\.js$")){
        var jsPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(jsPath);
        res.writeHead(200, {"Content-Type":"text/js"});
        fileStream.pipe(res);
    }
    else{
        res.writeHead(404, {"Content-Type":"plain/text"});
        res.end("Page not found!");
    }
});
server.listen(8000, "127.0.0.1");