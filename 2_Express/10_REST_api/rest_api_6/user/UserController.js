var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var VerifyToken = require('../auth/VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
var User = require('./User');

// CREATES A NEW USER
// http://127.0.0.1:3000/api/users/
// name
// email
// password

// x-access-token -> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWQzMWYzODRlNDgxNDQwZDM0M2Q1MCIsImlhdCI6MTY2Mjg1NzcxNSwiZXhwIjoxNjYyOTQ0MTE1fQ.MjdBM8fy_WJEy-SGY-Ejf8FpVGfkdKIIj2-Nvstgm_w
router.post('/', VerifyToken, function (req, res) {
    User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        }, 
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', VerifyToken, function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', VerifyToken, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
// Added VerifyToken middleware to make sure only an authenticated user can put to this route
router.put('/:id', VerifyToken, function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', VerifyToken, function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ user.name +" was deleted.");
    });
});

module.exports = router;