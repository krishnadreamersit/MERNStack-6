import {insertRecord} from './database.js';

var homeController=(request, response)=>{
    response.render('index');
};

var formController = (request, response)=>{
    //receive all values from web form
    var fullName = request.query.name;
    var email = request.query.email;
    var subject = request.query.subject;
    var message = request.query.message;
    //validation?
    //if pass ->
        // send to database
    let values = ['Raj Rai', 'raj@gmail.com', 'sub1', 'Message1'];
    var result = insertRecord(values);
    if(result){
        response.send("Insert record successfully");
    }
    else{
        response.send("Error to insert record");
    }
}
export {homeController, formController};