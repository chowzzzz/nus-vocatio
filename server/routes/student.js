const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Student = require('../models/Student');


router.get('/',(req, res) =>
    Student.findAll()
        .then(student => { 
            console.log(student);
            res.sendStatus(200);
        })
        .catch(err => console.log(err)));

    module.exports = router;