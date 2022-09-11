// Receiving value from Webform - GET Method
var http = require("http");
var fs = require("fs");
var server = http.createServer((request, response) => {
    if (request.url === '/') {
        fs.readFile('./public/index.html', null, function (error, data) {
            if (error) {
                response.writeHead(404, "Page not found error", { 'Content-Type': 'text/html' });
                response.write("404 Page not found error");
            }
            else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write(data);
            }
            response.end();
        });
    }
});
server.listen(8000, "127.0.0.1");