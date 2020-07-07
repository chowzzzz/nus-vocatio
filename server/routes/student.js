const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Student = require('../models/Student');


router.get('/',(req, res) =>


db.query('SELECT * FROM vocatio.student',
        function(err, results,fields) {
            console.log(results);
            console.log(fields);
        }
    ));    



/*
Student.findAll()
        .then(student => { 
            console.log(student);
            res.sendStatus(200);
        })
        .catch(err => console.log(err)));
*/


    module.exports = router;