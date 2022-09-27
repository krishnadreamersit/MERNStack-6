import Person from "../models/PersonModel.js";

export const getPersons = async (req, res) => {
    try {
        const objs = await Person.find();
        res.json(objs);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getPersonById = async (req, res) => {
    try {
        const obj = await Person.findById(req.params.id);
        res.json(obj);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const savePerson = async (req, res) => {
    const obj = new Person(req.body);
    try {
        const resultObj = await obj.save();
        res.status(201).json(resultObj);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updatePerson = async (req, res) => {
    try {
        const updatedObj = await Person.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedObj);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deletePerson = async (req, res) => {
    try {
        const deletedObj = await Person.deleteOne({_id:req.params.id});
        res.status(200).json(deletedObj);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}