import express from 'express';
const app = express();
const port = process.env.PORT || '8000';
import web from './routes/web.js';

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', web);

app.listen(port);