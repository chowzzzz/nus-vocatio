const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Employers = require('../models/Employer');


router.get('/',(req, res) =>
    Employers.findAll()
        .then(employer => { 
            console.log(employer);
            res.sendStatus(200);
        })
        .catch(err => console.log(err)));

    module.exports = router;