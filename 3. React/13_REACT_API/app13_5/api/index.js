const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors');

// Step 1 - set up express & mongoose
var fs = require('fs');
var path = require('path');
require('dotenv/config');

// Step 2 - connect to the database  
mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }, err => {
        console.log('connected')
    });

// Step 3 - Create ./models.js file

// Step 4 - set up EJS
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
// Set EJS as templating engine 
app.set("view engine", "ejs");

// Step 5 - set up multer for storing uploaded files
var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({ storage: storage });

// Step 6 - load the mongoose model for Image

var imgModel = require('./model');

// Step 7 - the GET request handler that provides the HTML UI

// Browser - get
app.get('/', (req, res) => {
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('imagesPage', { items: items });
        }
    });
});

// api->get
app.get('/images', (req, res) => {
    imgModel.find({}, (err, items) => { //read all records from database
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.status(200).send(items); //Receive by React FrontEnd
        }
    });
});

// Step 8 - the POST handler for processing the uploaded file  
app.post('/', upload.single('image'), (req, res, next) => {
    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgModel.create(obj, (err, item) => { //Save on database
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/');
        }
    });
});

// Step 9 - configure the server's port  
var port = process.env.PORT || 8000
app.listen(port, err => {
    if (err)
        throw err
    console.log(`Server listening at http://127.0.0.1:${port}`);
})