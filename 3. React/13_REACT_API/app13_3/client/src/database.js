const mongoose = require("mongoose");

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

export default PersonModel;
