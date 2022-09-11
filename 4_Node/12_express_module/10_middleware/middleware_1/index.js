import express from 'express';
import myLogger from './middlewares/loggerMiddleware.js';
const app = express();
const port = process.env.PORT || '8000';
import web from './routes/web.js';

app.set('view engine', 'ejs');

//Application level middleware
app.use(myLogger);
app.use('/', web);

app.listen(port, ()=>{
	console.log(`Listening at http://127.0.0.1:${port}`);
});