// npm install mustache
import express from 'express';
const app = express();
const port = process.env.PORT || '8000';
import web from './routes/web.js';
import mustacheExpress from 'mustache-express';

app.engine('html', mustacheExpress());
app.set('view engine', 'html');

app.set('views', './views');

app.use('/', web);
app.listen(port);