var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var User = require('../models/user');

// SIGNUP Route
router.post('/', function (req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email
    });
    console.log(user);
    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'User created',
            obj: result
        });
    });
});

// SIGNIN Route
router.post('/signin', function(req, res, next){
    User.findOne({email: req.body.email}, function(err, user){
        // Error check
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        // No user found
        if (!user) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid credentials'}
            });
        }
        // password incorrect
        if (!bcrypt.compareSync(req.body.password, user.password)){
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid credentials'}
            });
        }
        var token = jwt.sign({user: user}, 'secret', {expiresIn:"2h"});
        res.status(200).json({
            messgae: 'Successfully signed in',
            token: token,
            userId: user._id
        });
    })
})

module.exports = router;
