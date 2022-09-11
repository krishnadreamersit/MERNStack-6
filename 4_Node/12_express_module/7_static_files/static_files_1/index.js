import express from 'express';
const app = express();
const port = process.env.PORT || '8000';
import web from './routes/web.js';
import {join} from 'path';

// Static Files
// app.use(express.static('public'));
app.use(express.static(join(process.cwd(), 'public'))); //css, image, js, music, movies, and files (csv, pdf, txt, ini, xml)

//Virtual
/*
app.use('/css', express.static(join(process.cwd(), 'public/css')));
app.use('/js', express.static(join(process.cwd(), 'public/js')));
app.use('/images', express.static(join(process.cwd(), 'public/images')));
*/
app.use('/', web);
app.listen(port);