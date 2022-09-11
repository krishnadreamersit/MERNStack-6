import express from 'express';
const app = express();
const port = process.env.PORT || '8000';

app.get('/person/all', (request, response)=>{
    response.send("<h1>All Persons</h1>");
});
app.get('/person/:id', (request, response)=>{
    var {id} = request.params;
    if(id==5){
        response.send(`<p>Error to delete record ${request.params.id}</p>`);
    }
    else{
        response.send(`<p>Record no ${request.params.id} delete successfully</p>`);
    }    
});
app.listen(port);