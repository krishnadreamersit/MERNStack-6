// npm install express
// npm install ejs
// npm install body-parser

import express from 'express';
const app = express();
const port = process.env.PORT || '8000';

// getting value from form using post method
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.get('/', (request, response)=>{
    response.render('index');
});

app.get('/getValues1', (request, response)=>{
    var values = request.query;
    // console.log(values);
    var {n1, n2} = request.query;
    var n3 = Number(n1)+Number(n2);    
    response.render('result', {title:'get Method', n1:n1, n2:n2, n3:n3});
});

app.get('/getValues2', (request, response)=>{
    var values = request.query;
    // console.log(values);
    var {txt1, txt2} = request.query;
    var n3 = Number(txt1)+Number(txt2);    
    response.render('result', {title:'Query String', n1:txt1, n2:txt2, n3:n3});
});

app.post('/getValues3', (request, response)=>{   
    // console.log(values);
    var {txt1, txt2} = request.body;
    var n3 = Number(txt1)+Number(txt2);    
    response.render('result', {title:'Query String', n1:txt1, n2:txt2, n3:n3});
});

app.get('/getValues4/:n1/:n2', (request, response)=>{   
    var {n1, n2} = request.params;
    var n3 = Number(n1)+Number(n1);    
    response.render('result', {title:'Query Param', n1:n1, n2:n2, n3:n3});
});

app.listen(port, ()=>{
    console.log(`Listening http://127.0.0.1: ${port}`);
});