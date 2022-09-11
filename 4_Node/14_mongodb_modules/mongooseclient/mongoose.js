// npm install mongoose
import mongoose from "mongoose";

// Connect with database server
mongoose.connect('mongodb://localhost:27017/mydb')
    .then(() => console.log('Connected to MongoDB server successfully!'))
    .catch(err => console.error('Error to connect with database server', err));

// Creating Schema
const personSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true }
});

// Creating Model
const PersonModel = mongoose.model("persons", personSchema); //persons -> collection name

// Saving Document
async function saveDocument() {
    const person = new PersonModel({
        name: 'Rajan KC',
        address: 'Bhaktapur, Nepal',
        email: 'rajan@gmail.com'
    });
    const result = await person.save();
    console.log(result);
}
// saveDocument();
async function saveDocument2(objPerson) {
    const person = new PersonModel({
        name: objPerson.name,
        address: objPerson.address,
        email: objPerson.email
    });
    const result = await person.save();
    console.log(result);
}
// var obj1 = {name:'Raj Rai', address:'Ktm', email:'raj@gmail.com'};
// saveDocument2(obj1);

// Display all documents
async function getAllDocuments() {
    const persons = await PersonModel.find();
    console.log(persons);
}

// Update document based on id
async function updateDocument(id) {
    const person = await PersonModel.findById(id);
    if(!person){
        console.log("Not found");
    }
    else{
        console.log(person); //Old document
        person.name="Keshor Thapa";
        person.address="Banepa, Nepal";
        person.email="keshor@gmail.com";
        const result = await person.save(); //Returns updated document
        console.log(result);
    }
}

updateDocument("xnxnxnxxxxxxxxxx");

async function deleteDocument(id) {
    const result = await PersonModel.deleteOne({ _id: id })
    console.log(result);
}

deleteDocument("xnxnxnxxxxxxxxxx");
git 
// Test
/*
saveDocument();
getAllDocuments();
updateDocument("62d68e526e4c5019ccb4315d");
deleteDocument("62d68e9a825ae59ac0a7590a")
*/