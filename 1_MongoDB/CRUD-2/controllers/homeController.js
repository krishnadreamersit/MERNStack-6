import { insertRecord, getAll } from '../databases/mongo_client.js';

var homeController = (request, response) => {
    async function func1() {
        var result = await getAll();
        console.log(result);
        response.render('home', { persons: result });//display all persons in home.ejs.
    }
};

var formController = (request, response) => {
    response.render('addnew');
};

var saveController = (request, response) => {
    //receive values
    var { txtName, txtAddress } = request.query;
    console.log(txtName, txtAddress);
    //send to mongo_client-> saveRecord()
    var obj1 = { name: txtName, address: txtAddress };
    var res = insertRecord(obj1);
    //receive result and redirect to view
    console.log(obj1);
    if (res) {
        response.send('Save record successfully!');
    }
    else {
        response.send('Error to save record.');
    }
};

export { homeController, formController, saveController };