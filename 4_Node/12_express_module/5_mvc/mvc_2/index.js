import express from 'express';
const app = express();
const port = process.env.PORT || '8000';
import person from './routes/person.js' //import person
app.use('/person', person); //load person
app.listen(port);