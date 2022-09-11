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
const userSchema = new mongoose.Schema({
    user: { type: String, required: true, trim: true, unique: true },
    pass: { type: String, required: true, trim: true }
});

// Creating Model
const UserModel = new mongoose.model("User", userSchema);
export {UserModel};