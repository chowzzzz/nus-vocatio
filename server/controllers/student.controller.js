const fs = require("fs");
const bcrypt = require("bcrypt");
const aws = require("../config/aws.config.js");
const sharp = require("sharp");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const db = require("../models");
const Student = db.student;
const Application = db.application;
const Op = db.Sequelize.Op;

// Create and Save a new Student
exports.createStudent = (req, res) => {
    // Validate request
    if (!req.body.stu_name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const s3 = new aws.S3();

    try {
        let pictureURL, resumeURL;

        const files = req.files;

        async function uploadFiles(files) {
            for (const file of files) {
                if (file.fieldname == "stu_picture") {
                    const buffer = await sharp(file.path)
                        .resize(200)
                        .toBuffer();
                    const s3res = await s3
                        .upload({
                            Bucket: "nusvocatio-bucket",
                            Key: file.filename,
                            Body: buffer,
                            ACL: "public-read"
                        })
                        .promise();

                    pictureURL = s3res.Location;
                    fs.unlink(file.path, (err) => {
                        if (err) console.log(err);
                    });
                }

                if (file.fieldname == "stu_resume") {
                    const resumeFile = fs.readFileSync(file.path);
                    const s3res = await s3
                        .upload({
                            Bucket: "nusvocatio-bucket",
                            Key: file.filename,
                            Body: resumeFile,
                            ACL: "public-read"
                        })
                        .promise();

                    resumeURL = s3res.Location;

                    fs.unlink(file.path, (err) => {
                        // console.log(resumeURL);
                        if (err) console.log(err);
                    });
                }
            }

            const student = {
                stu_id: req.body.stu_id,
                stu_name: req.body.stu_name,
                stu_password: bcrypt.hashSync(req.body.stu_password, 8),
                stu_email: req.body.stu_email,
                stu_mobile: req.body.stu_mobile,
                stu_dob: req.body.stu_dob,
                stu_faculty: req.body.stu_faculty,
                stu_degree: req.body.stu_degree,
                stu_picture: pictureURL,
                stu_year: req.body.stu_year,
                stu_linkedin: req.body.stu_linkedin,
                stu_resume: resumeURL,
                stu_status_change: 1,
                stu_new_jobs: 1,
                stu_news_letter: 1,
                stu_subscription: 1
            };

            // Create a student

            // Save Student in the database
            Student.create(student)
                .then((data) => {
                    const user = data.toJSON();
                    let token = jwt.sign({ id: user.id }, config.secret, {
                        expiresIn: 86400 // expires in 24 hours
                    });

                    res.status(200).send({
                        auth: true,
                        token: token,
                        user: user
                    });
                })
                .catch((err) => {
                    res.status(500).send({
                        message:
                            err.message ||
                            "There was a problem registering the user."
                    });
                });
        }

        uploadFiles(files);
    } catch (err) {
        res.status(422).json({ err });
    }
};

// Login user
exports.login = (req, res) => {
    console.log(req.body);
    Student.findOne({ where: { stu_email: req.body.email } })
        .then((data) => {
            const user = data.toJSON();
            // console.log(user);
            let passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.stu_password
            );
            if (!passwordIsValid) {
                return res.status(401).send({ auth: false, token: null });
            }

            const token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.send({ auth: true, token: token, user: user });
        })
        .catch((err) => {
            res.status(404).send({
                message: err.message || "No user found."
            });
        });
};

// Retrieve all Students from the database.
exports.findAll = (req, res) => {
    const stu_name = req.query.stu_name;
    var condition = stu_name
        ? { stu_name: { [Op.like]: `%${stu_name}%` } }
        : null;

    Student.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while retrieving Student."
            });
        });
};

//Create an application
exports.createApplication = (req, res) => {
    // Validate request
    if (!req.body.adm_user) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a application
    const Application = {
        status: 2,
        studentId: studentId,
        jobpostId: jobpostId
    };

    // Save Application in the database
    Application.create(application)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while creating the Application."
            });
        });
};

// Find a single Student with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Student.findByPk(id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Student with id=" + id
            });
        });
};

// Update a Student by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    console.log(req.body);
    Student.update(req.body, {
        where: { id: id }
    })
        .then((num) => {
            if (num == 1) {
                Student.findByPk(id).then((data) => {
                    res.send(data);
                });
            } else {
                res.send({
                    message: `Cannot update Student with id=${id}. Maybe Student was not found or req.body is empty!`
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Student with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Student.destroy({
        where: { id: id }
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Student was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Student with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Student.destroy({
        where: {},
        truncate: false
    })
        .then((nums) => {
            res.send({ message: `${nums} Student were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while removing all Student."
            });
        });
};

exports.findAllPublished = (req, res) => {
    Student.findAll({ where: { published: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while retrieving Student."
            });
        });
};

//Get students by application ID
exports.findStudentById = (studentId) => {
    return Student.findByPk(studentId, { include: ["applications"] })
        .then((student) => {
            return student;
        })
        .catch((err) => {
            console.log(">> Error while finding Students: ", err);
        });
};

//Find all applications from Student ID
exports.findApplicationByStuId = (id) => {
    return Application.findByPk(id, { include: ["student"] })
        .then((application) => {
            return application;
        })
        .catch((err) => {
            console.log(">> Error while finding application: ", err);
        });
};
