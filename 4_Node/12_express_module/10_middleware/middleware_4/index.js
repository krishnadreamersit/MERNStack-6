import express, { response } from 'express';
const app = express();
const port = process.env.PORT || '8000'

app.use(logger); //Application Level Middleware

app.get('/', (request, response)=>{
    response.send("Hello from index");
});

// 
app.get('/user', auth, (request, response)=>{
    response.send("Hello from user");
});

app.get('/contact', (request, response)=>{
    response.send("Hello from contact");
});

app.get('/add/:n1/:n2', sum, (request, response)=>{    
    response.redirect('/display');
});

app.get('/display', (request, response)=>{    
    console.log(request.params);
    response.send("Hello");

});

app.get('*', (request, response)=>{
    response.send("404 Page not found!");
});

function logger(request, response, next){
    console.log("Hello from logger");
    next();
};

function auth(request, response, next){
    console.log("Hello from auth");
    next();
};

function sum(request, response, next){
    console.log(request.params);
    let n1 = Number(request.params.n1);
    let n2 = Number(request.params.n2);
    let n3 = n1+n2;
    request.n3 = n3;    
    next();
};

app.listen(port, ()=>{
	console.log(`Listening at http://127.0.0.1:${port}`);
});