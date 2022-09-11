// npm i express --save

// Example-1 - Hello World
/*
var express = require('express');
var app = express();
app.get('', (request, response)=>{
    response.send("Hello world of expressJS");
});
app.listen(8000, "127.0.0.1");
*/

// Example-2 - HTML Output
/*
var express = require('express');
var app = express();
app.get('', (request, response)=>{
    var str1 =`
        <html>
            <head>
                <title>My Index Page</title>
            </head>
            <body>
                <h1>My Index Page</h1>
            </body>
        </html>
    `;
    response.send(str1);
});
app.listen(8000, "127.0.0.1");
*/

// Example-3 - Status Code
var express = require('express');
var app = express();
app.get('', (request, response)=>{    
    response.status(str1);
});
app.listen(8000, "127.0.0.1");
