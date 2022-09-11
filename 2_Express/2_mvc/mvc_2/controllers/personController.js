const allPersons = (request, response)=>{
    response.send("<h1>All Persons...</h1>");
};

const deletePerson = (request, response)=>{
    var {id} = request.params;
    if(id==5){
        response.send(`<p>Error to delete record ${id}...</p>`);
    }
    else{
        response.send(`<p>Record no ${id} delete successfully...</p>`);
    }    
};
// module.exports = {allPersons, deletePersons}
export {allPersons, deletePerson};