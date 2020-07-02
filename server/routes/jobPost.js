const express = require('express');
const router = express.Router();
const db = require('../config/database');
const JobPost = require('../models/JobPost');


router.get('/',(req, res) =>
    JobPost.findAll()
        .then(jobPost => { 
            console.log(jobPost);
            res.sendStatus(200);
        })
        .catch(err => console.log(err)));

    module.exports = router;