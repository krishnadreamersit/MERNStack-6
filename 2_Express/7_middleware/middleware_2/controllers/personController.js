import { response } from "express";

const personController = (request, response)=>{
    response.render("person");
};

const allPersonController = (request, response)=>{
    response.render("all-person");
};

export {personController, allPersonController};