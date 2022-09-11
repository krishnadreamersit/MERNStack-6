const express = require("express");
const multer = require('multer')
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//1. File Upload
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        // cb(null, Date.now() + "--" + file.originalname);
        const newFileName = Date.now() + "--" + file.originalname;
        cb(null, newFileName);
        // console.log(file.originalname, "=>", newFileName);
    },
});

const upload = multer({ storage: fileStorageEngine });

// 2. Database
mongoose.Promise = global.Promise;

//2.1 Connect with database server
mongoose.connect('mongodb://localhost:27017/mydb')
    .then(() => console.log('Connected to MongoDB server successfully!'))
    .catch(err => console.error('Error to connect with database server', err));

// 2.2 Creating Schema
const personSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    photo: { type: String, required: true, trim: true }
});

// 2.3 Creating Model
const PersonModel = mongoose.model("person", personSchema);

// 3. Routes

// 3.1 Welcome Message
server.get("/v1/", (req, res) => {
    res.status(200).send({status:true, message:"Hello world of RestAPI-V1"});
});

// 3.2 Insert Record
server.post("/v1/persons", upload.single('photo'), (req, res) => {
    const data = { name: req.body.name, address: req.body.address, photo: req.file.filename };
    const Person = new PersonModel(data);
    Person.save((err, Person) => {
        if (err) {
            res.send(err);
        }
        res.json(Person);
    });
});

// 3.3 Select All
server.get("/v1/persons", (req, res) => {
    PersonModel.find((err, persons) => {
        if (err) {
            res.send(err);
        }
        res.json(persons);
    });
});

// 3.3 Select Record based on pid
server.get("/v1/persons/:pid", (req, res) => {
    const id = req.params.pid;
    PersonModel.find({ '_id': id }, (err, Person) => {
        if (err) {
            res.send(err);
        }
        res.json(Person);
    });
});

// 3.4 Update Record based on pid
server.put("/v1/persons/:pid", upload.single('photo'), (req, res) => {
    const id = req.params.pid;
    console.log({ _id: id, name: req.body.name, address: req.body.address, photo: req.file.filename })
    PersonModel.findOneAndUpdate(
        { '_id': id },
        { $set: {name: req.body.name, address: req.body.address, photo: req.file.filename},},
        (err, Person) => {
            if (err) {
                res.send(err);
            }
            res.json(Person);
        });
});

// 3.5 Delete Record based on pid
server.delete("/v1/persons/:pid", (req, res) => {
    const id = req.params.pid;
    PersonModel.deleteOne({ '_id': id }, (err, Person) => {
        if (err) {
            res.send(err);
        }
        res.json(Person);
    });
});

server.listen(PORT, () => console.log(`Listening on http://127.0.0.1:${PORT}`));