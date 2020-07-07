const express = require('express');
const route = express.Router();
const db = require('../config/database');
const Student = require('../models/Student');


route.get('/add', (req, res) => {
    const data = {
        stu_id: '1',
        stu_name: 'Barclay',
        stu_mobile:'+65 1319 1856',
        stu_email: 'Aliquam.adipiscing.lobortis@egetmetuseu.net',
        stu_linkedin:'Linkhere',
        stu_password:'UWD77XYU6PP',
        stu_status_change:'0',
        stu_new_jobs:'1',
        stu_news_letter:'1',
        stu_subscription:'0'
    }

    let { stu_id, stu_name, stu_mobile, stu_email, stu_linkedin, stu_password, stu_status_change, stu_new_jobs, stu_news_letter, stu_subscription } = data;

    Student.create({
        stu_id,
        stu_name,
        stu_mobile,
        stu_email,
        stu_linkedin,
        stu_password,
        stu_status_change,
        stu_new_jobs,
        stu_news_letter,
        stu_subscription
    })
    .then(student => res.redirect('/student'))
    .catch(err => console.log(err)); 

});


route.get('/', function (req, res) {
    const results = db.query("SELECT * FROM `student` WHERE `stu_id` = 1", function (err, results) {
        if (err) throw err;
        res.send(results);
        return results;
    });
    res.send(results);
});


    module.exports = route;