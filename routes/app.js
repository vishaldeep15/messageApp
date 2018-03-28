var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next){
    res.render('index');
});

// router.get('/', function (req, res, next) {
//     User.findOne({}, function(err, user){
//         if (err) {
//             return res.send('Error');
//         }
//         res.render('node', {email: user.email});
//     });
// });

// router.post('/', function (req, res, next){
//     var email = req.body.email;
//     var user = new User({
//         firstName: 'Vishal',
//         lastName: 'Deep',
//         password: 'password',
//         email: email
//     });
//     console.log(user);
//     user.save();
//     res.redirect('/');
// });

module.exports = router;
