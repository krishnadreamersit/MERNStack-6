// Example-1
// http://127.0.0.1:8000/add?num1=3&num2=5

/*
var http = require("http");
var url = require("url");
var querystring = require("querystring");
var mylib = require('./my_functions');

var server = http.createServer((req, res)=>{ 
    // console.log("Server is running");   
    strUrl = req.url;
    objUrl = url.parse(strUrl, true);
    var command = objUrl.pathname;
    var strQuery = objUrl.query;
    var objQuery = url.parse(objUrl.href, {parseQueryString: true}).query;
    var n1 = Number(objQuery.num1);
    var n2 = Number(objQuery.num2);
    var n3 = mylib.calculator(command, n1, n2);
    res.write('Result : '+n3);
    res.end();
});
server.listen(8000, "127.0.0.1");
*/