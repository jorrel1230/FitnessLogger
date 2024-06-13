const express = require('express');
const router = express.Router();

// Importing Mongoose Model
let User = require('../models/user.model');


router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {

    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/register').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({name, email, password});

    newUser.save()
        .then(() => res.json(`User ${name} Added!`))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/login').post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email : email})
        .then(user => {
            if (user) {
                if (password == user.password) {
                    res.json({
                        id: user.id,
                        code: true,
                        msg: "Login Success!"
                    });
                } else {
                    res.json({
                        code: false,
                        msg: "Incorrect Password."
                    });
                }
            } else {
                res.json({
                    code: false,
                    msg: "User with this email does not exist."
                });
            }
        })
        .catch(err => console.log("Error: " + err));
});

router.route('/:id').delete((req, res) => {
    var id = req.params.id;
    User.findByIdAndDelete(id)
        .then(() => res.json("User deleted successfully."))
        .catch(err => console.log("Error:" + err));
});

module.exports = router;