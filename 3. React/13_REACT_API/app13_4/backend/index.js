const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const PORT = 5000;
const fs = require("fs");
const imageModel = require("./models");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected successfully"))
  .catch((err) => console.log("it has an error", err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/", upload.single("photo"), (req, res) => {
  const saveImage = imageModel({
    name: req.body.name,
    img: {
      data: fs.readFileSync("uploads/" + req.file.filename),
      contentType: "image/png",
    },
  });
  saveImage
    .save()
    .then((res) => {
      console.log("image is saved");
    })
    .catch((err) => {
      console.log(err, "error has occur");
    });
  res.send('image is saved')
});

app.get('/', async (req, res) => {
  const allData = await imageModel.find()
  res.json(allData)
})

app.listen(PORT, () => {
  console.log(`Listening http://127.0.0.1:${PORT}`);
});