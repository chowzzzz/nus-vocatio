const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Faculty = require('../models/Faculty');


router.get('/',(req, res) =>
    Faculty.findAll());

    module.exports = router;