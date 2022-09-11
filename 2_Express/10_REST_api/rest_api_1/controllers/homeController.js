import {join} from 'path'

var objPersons = [
    {pid:1, name:'Raj', address:'KTM'},
    {pid:2, name:'Asim', address:'Lat'},
    {pid:3, name:'Suraj', address:'KTM'},
    {pid:4, name:'Bishal', address:'Lat'},
    {pid:5, name:'Mitra', address:'Nawalparasi'}
];

const indexController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send({message:"Welcome to RestAPI-V1."});
}

const homeController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    // create an array of person object
    // response.status(200).send({persons:"All Persons."});
    response.status(200).send(objPersons);
}
const singleController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    var {id} = request.params;
    console.log(id);
    //search record on objPersons based on id
    var result ={}; 
    objPersons.forEach((item, index, array)=>{
        console.log(item);
        if(item.pid==id){
            result.result=item;
            result.status=true; //await f3(1)
        }
        else{
            result.status=false;
        }
    });
    console.log(result);
    // response.status(200).send({person:`Individual Person-${id}`});
    response.status(200).send(result);
}
//f1()
//f2()
/*
var f3 = (code)=>{
    if(code == 0){
        return false;
    }
    else{
        return true;
    }
}
*/

const newController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    // Receive values
    var {pid, name, address} =  request.body;
    console.log(pid, name, address);
    //add value on objPersons as an Object
    var objPerson = {pid:pid, name:name, address:address};
    objPersons.push(objPerson);
    response.status(201).send({status:true, result:objPerson});
}

const putController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send({message:"Update person."});
}

const patchController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send({message:"Update person partially."});
}

const delController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send("Delete person.");
}

export{ indexController, homeController, singleController, newController, putController, patchController, delController}