const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys');
const User = mongoose.model('User');
const router = express.Router();
router.post('/signup', (req, res) => {
    const { name, email, password, goal, desc, contact } = req.body;
    if (!email || !password || !name || !goal || !desc || !contact) {
        return res.status(422).json({ error: 'please add all fields' });
    }
    User.findOne({ email: email })
        .then((saved) => {
            if (saved) {
                return res.status(422).json({ error: "already exsits" });
            }
            bcrypt.hash(password, 12)
                .then(hashedpass => {
                    const user = new User({
                        name,
                        email,
                        goal,
                        desc,
                        contact,
                        password: hashedpass
                    })
                    user.save()
                        .then(user => {
                            res.json({ message: "saved successfully" });
                        })
                        .catch(err => {
                            console.log(err);
                        })
                })
        })
        .catch(e => {
            console.log(e);
        })
})
router.post('/signin', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "enter all details" });
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (!savedUser) {
                return res.status(422).json({ error: 'invalid credentials' });
            }
            bcrypt.compare(password, savedUser.password)
                .then(match => {
                    if (match) {
                        const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
                        const { _id, name, email, following, followers, pic } = savedUser
                        res.json({ token, user: { _id, name, email, following, followers, pic } });
                    }
                    else
                        res.status(422).json({ error: 'invalid credentials' });
                })
                .catch(err => {
                    console.log(err)
                })
        })
        .catch(err => {
            console.log(err)
        })
})
module.exports = router;
