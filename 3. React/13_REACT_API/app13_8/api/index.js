import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import PersonRoute from "./routes/PersonRoute.js";
import bodyParser from "body-parser"

const PORT = process.env.PORT || 5000
const app = express();

mongoose.connect('mongodb://localhost:27017/apidb2',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    try {        
        res.status(200).json({message: 'Welcome to RestAPI'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
app.use(UserRoute);
app.use(PersonRoute);

app.listen(5000, ()=> {
    console.log(`Server Listening at http://127.0.0.1:${PORT}`);
});