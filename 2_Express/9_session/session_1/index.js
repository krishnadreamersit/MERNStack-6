// npm install ejs
// npm install serve-favicon
// npm install body-parser
// npm install express-session

import express from 'express';
const app = express();
const port = process.env.PORT || '8000';
import web from './routes/web.js';
import { join } from 'path';
import bodyParser from "body-parser"
import session  from 'express-session';

const options = {
    dotfiles: "deny",
    etag: false,
    extensions: ['html', 'xhtml'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeader: function (request, response, status) {
        response.set('x-timestamp', Date.now());
    }
};

//Set View Engine
app.set("view engine", "ejs");

// Static Files - 1
// app.use(express.static('public'));
app.use(express.static(join(process.cwd(), 'public'), options));

//Virtual - Static Files-2
/*
app.use('/css', express.static(join(process.cwd(), 'public/css')));
app.use('/js', express.static(join(process.cwd(), 'public/js')));
app.use('/images', express.static(join(process.cwd(), 'public/images')));
*/

// Post Data Processing
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/*
app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('your text:\n')
    res.end(JSON.stringify(req.body, null, 2))
})
*/

// Session 
app.use(session({
    secret: 'secret@123',
    resave: true,
    saveUninitialized: true
}));

app.use('/', web);

app.listen(port, () => {
    console.log(`Listening http://127.0.0.1:${port}`);
});