import express from 'express';
const router = express.Router();

router.get('/all', (request, response)=>{
    response.send("<h1>All Persons...</h1>");
});

router.get('/delete/:id', (request, response)=>{
    var {id} = request.params;
    if(id==5){
        response.send(`<p>Error to delete record ${id}...</p>`);
    }
    else{
        response.send(`<p>Record no ${id} delete successfully...</p>`);
    }    
});
export default router