const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys');
const User = mongoose.model('User');
const router = express.Router();
router.get('/getngodata/:id',(req,res)=> {
    User.find({_id:req.params.id})
    .select('-password')
    .then((userData) => {
        console.log(userData)
        if(userData !== null) {
            res.status(200).json(userData);
        }
        else {
            res.status(422).json({error:'no data exsits'})
        }
    })
})
module.exports = router;
