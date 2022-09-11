// Importing Libs
const { response } = require("express");
const express = require("express");
const app = express();
const port = process.env.port || '8000'

//Student Processing
app.get('/student/all', (request, response)=>{
    response.send("All Students");
});
app.post('/student/create', (request, response)=>{
    response.send("New Student Create");
});
app.put('/student/update', (request, response)=>{
    response.send("Student Update");
});
app.delete('/student/delete', (request, response)=>{
    response.send("Student Delete");
});

//Teacher Processing
app.get('/teacher/all', (request, response)=>{
    response.send("All Teachers");
});
app.post('/teacher/create', (request, response)=>{
    response.send("New Teacher Create");
});
app.put('/teacher/update', (request, response)=>{
    response.send("Teacher Update");
});
app.delete('/teacher/delete', (request, response)=>{
    response.send("Teacher Delete");
});

app.listen(port, ()=>{
    console.log(`Listening : ${port}`);
});