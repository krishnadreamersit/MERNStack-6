import User from "../models/UserModel.js";
import bcrypt from 'bcrypt'; //npm i bcrypt jsonwebtoken
import jwt from 'jsonwebtoken'; //npm i jsonwebtoken
// import dotenv from 'dotenv';
// dotenv.config();

const secret = {'secretKey': 'supersecret'};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const saveUser = async (req, res) => {
    const { email, password } = req.body;
    const encPassword = await bcrypt.hash(req.body.password, 10);
    console.log(email, password, encPassword);
    const user = new User({ email: email, password: encPassword });
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const loginUser = async (req, res) => {
    User.find({ email: req.body.email }, function (err, docs) {
        if (err) {
            res.status(404).send({ status: false, message: "User not found!" });
        }
        else {
            if (docs[0].password == req.body.password) {                
                // const accessToken = jwt.sign({username:req.body.email}, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
                const accessToken = jwt.sign({username:req.body.email}, secret.secretKey, { expiresIn: '1800s' });
                res.status(200).send({ status: true, message: "User found!", user: docs[0], token: accessToken});
            }
            else {
                res.status(404).send({ status: false, message: "User name or password incorrect" });
            }
        }
    });
}

export const updateUser = async (req, res) => {
    try {
        const updateduser = await User.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const deleteduser = await User.deleteOne({ _id: req.params.id });
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}