const express = require('express');
const router = express.Router();
const db = require('../config/database');
const AdminAcc = require('../models/AdminAcc');


router.get('/',(req, res) =>
    AdminAcc.findAll()
        .then(adminAcc => { 
            console.log(adminAcc);
            res.sendStatus(200);
        })
        .catch(err => console.log(err)));

    module.exports = router;