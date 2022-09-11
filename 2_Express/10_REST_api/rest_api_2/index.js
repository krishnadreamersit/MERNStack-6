import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routers from './routes/routers.js';
import {join } from 'path';

const app = express();
const port = process.env.PORT || '8000';
const options = {
    dotfiles:"deny",
    etag:false,
    extensions:['html', 'xhtml'],
    index:false,
    maxAge:'1d',
    redirect:false,
    setHeader:function(request, response, status){
        response.set('x-timestamp', Date.now());
    }
};

// Static files
// app.use(express.static('public'));
app.use(express.static(join(process.cwd(), 'public'), options));
//Virtual static files
/*
app.use('/css', express.static(join(process.cwd(), 'public/css')));
app.use('/js', express.static(join(process.cwd(), 'public/js')));
app.use('/images', express.static(join(process.cwd(), 'public/images')));
*/

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

app.set("view engine", "ejs");
app.use('/api/', routers);

app.listen(port, ()=>{
    console.log(`Listening http://127.0.0.1:${port}`);
});