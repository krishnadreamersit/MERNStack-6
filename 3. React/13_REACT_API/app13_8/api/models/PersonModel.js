import mongoose from "mongoose";

const Person = mongoose.Schema({
    name:{type: String, required: true},
    address:{type: String,required: true},
    email:{type: String,required: true}
});

export default mongoose.model('Peoples', Person);