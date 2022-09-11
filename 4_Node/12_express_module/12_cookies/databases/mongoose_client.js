import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/mydb', {
    useNewUrlParser:true, 
    useUnifiedTopology: true
}).then(()=>{
    console.log("Conncted database successfully");
}).catch((ex)=>{
    console.log("Error to connect database"+ex);
});

// Creating Schema    
const personSchema = new mongoose.Schema({
    id: { type: Number, required: true, trim: true, unique: true },
    name: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true }
});

// Creating Model
const PersonModel = new mongoose.model("Person", personSchema);
export {PersonModel};