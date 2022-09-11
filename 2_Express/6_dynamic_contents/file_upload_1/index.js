const express = require("express");
const path = require("path");
const multer = require("multer");
const app = express();

//View Engine Setting
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// File Upload Location
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads")        // Uploads is the Upload_folder_name
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg")
    }
});

const maxSize = 1 * 1000 * 1000;

// File Uploader
var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {
        // Set the filetypes, it is optional
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);
        var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: Only supports the following filetypes - " + filetypes);
    }    
}).single("mypic"); // mypic is the name of file attribute

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/form1", function (req, res) {
    res.render("upload");
});

app.post("/upload", function (req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            res.send(err)
        }
        else {
            res.send("Image upload successfully.")
        }
    })
});
app.listen(8000, function (error) {
    if (error) throw error
    console.log("Listening: http://127.0.0.1:8000");
});