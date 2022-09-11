import express from 'express';
const app = express();
const port = process.env.PORT || '8000';
import web from './routes/web.js';
import {join} from 'path';

//load static contents from public folder
app.use(express.static(join(process.cwd(), 'public')));

app.set('view engine', 'ejs');
app.use('/', web);

app.listen(port, ()=>{
	console.log(`Listening at http://127.0.0.1:${port}`);
});