const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Faculty = require('../models/Faculty');

router.get('/', (req, res) =>

    db.query('SELECT faculty_id FROM vocatio.faculty WHERE faculty_name = "%computing%"',
        //['FASS', 1],
        function(err, results,fields) {
            console.log(results);
            console.log(fields);
        }
    ));

    module.exports = router;