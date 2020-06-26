const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Students = require('../models/Students');


router.get('/',(req, res) =>
    Students.findAll()
        .then(students => { 
            console.log(students);
            res.sendStatus(200);
        })
        .catch(err => console.log(err)));

    module.exports = router;