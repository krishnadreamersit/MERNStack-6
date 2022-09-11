import { join } from 'path'

var persons = [
    { id: 101, name: "Raj Rai", address: 'Ktm' },
    { id: 102, name: "Kiran Joshi", address: 'Lat' },
    { id: 103, name: "Sheetal Thapa", address: 'Ktm' },
    { id: 104, name: "Ramesh Sharma", address: 'Lat' },
    { id: 105, name: "Reeta Bhatta", address: 'Ktm' }
];

const homeController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
    // response.status(200).send("All Persons");
    response.json(persons);
}

const singleController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
    // response.status(200).send("Individual Person");
    var person = persons.filter(function (person) {
        if (person.id == request.params.id) {
            return true;
        }
    });
    if (person.length == 1) {
        response.json(person[0])
    } else {
        response.status(404);//Set status to 404 as not found
        response.json({ message: "Not Found" });
    }
}

const newController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
    // response.status(200).send("Add new person");    
    console.log(request.body);
    var newId = persons[persons.length - 1].id + 1;
    persons.push({ id: newId, name: request.body.name, address: request.body.address, weight: request.body.weight });
    response.json({ message: "New person created." });
}

const putController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
    // response.status(200).send("Update person");
    var updateIndex = persons.map(function (person) {
        return person.id;
    }).indexOf(parseInt(request.params.id));
    if (updateIndex === -1) {
        //Movie not found, create new
        persons.push({
            id: request.params.id,
            name: request.body.name,
            address: request.body.address,
        });
        response.json({ message: "New Person Created." });
    } else {
        //Update existing movie
        persons[updateIndex] = {
            id: request.params.id,
            name: request.body.name,
            address: request.body.address,
        };
        response.json({ message: "Person id " + request.params.id + " updated." });
    }
}

const delController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
    // response.status(200).send("Delete person");
    // console.log(request.params.id);
    console.log(request.params.id);
    var removeIndex = persons.map(function (person) {
        return person.id;
    }).indexOf(parseInt(request.params.id));
    console.log(removeIndex);
    if (removeIndex === -1) {
        response.json({ message: "Not found" });
    } else {
        persons.splice(removeIndex, 1);
        response.send({ message: "Person id " + request.params.id + " removed." });
    }
}

export { homeController, singleController, newController, putController, delController }