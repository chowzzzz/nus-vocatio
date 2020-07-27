const fs = require("fs");
const bcrypt = require("bcrypt");
const aws = require("../config/aws.config.js");
const sharp = require("sharp");

const db = require("../models");
const Employer = db.employer;
const Jobpost = db.jobpost;
const Op = db.Sequelize.Op;

// Create and Save a new Employer
exports.createEmployer = (req, res) => {
    // Validate request
    if (!req.body.emp_name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const s3 = new aws.S3();

    try {
        const files = req.files;

        async function uploadFiles(files) {
            let logoURL, pictureURL;
            for (const file of files) {
                const buffer = await sharp(file.path).resize(200).toBuffer();
                const s3res = await s3
                    .upload({
                        Bucket: "nusvocatio-bucket",
                        Key: file.filename,
                        Body: buffer,
                        ACL: "public-read"
                    })
                    .promise();

                fs.unlink(file.path, (err) => {
                    if (err) console.log(err);
                });
                if (file.fieldname == "emp_logo") {
                    logoURL = s3res.Location;
                } else {
                    pictureURL = s3res.Location;
                }
            }
            // Create a employer
            const employer = {
                emp_company: req.body.emp_company,
                emp_coRegNo: req.body.emp_coRegNo,
                emp_coContact: req.body.emp_coContact,
                emp_coEmail: req.body.emp_coEmail,
                emp_coAddress: req.body.emp_coAddress,
                emp_coCountry: req.body.emp_coCountry,
                emp_website: req.body.emp_website,
                emp_logo: logoURL,
                emp_coDes: req.body.emp_coDes,
                emp_name: req.body.emp_name,
                emp_salutation: req.body.emp_salutation,
                emp_mobile: req.body.emp_mobile,
                emp_email: req.body.emp_email,
                emp_linkedin: req.body.emp_linkedin,
                emp_picture: pictureURL,
                emp_password: bcrypt.hashSync(req.body.emp_password, 8),
                emp_new_applicants: 1,
                emp_max_applicants: 1,
                emp_news_letter: 1,
                emp_subscription: 1
            };
            console.log(employer);
            res.json(employer);

            // Save Employer in the database
            Employer.create(employer)
                .then((data) => {
                    res.send(data);
                })
                .catch((err) => {
                    res.status(500).send({
                        message:
                            err.message ||
                            "Some error occurred while creating the Employer."
                    });
                });
        }

        uploadFiles(files);
    } catch (err) {
        res.status(422).json({ err });
    }
};

//Create a jobpost
exports.createJobpost = async (req, res) => {
    // Validate request
    if (!req.body.post_title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const s3 = new aws.S3();

    try {
        const file = req.file;
        // console.log(file);

        async function uploadFile(file) {
            const contractFile = fs.readFileSync(file.path);
            const s3res = await s3
                .upload({
                    Bucket: "nusvocatio-bucket",
                    Key: file.filename,
                    Body: contractFile,
                    ACL: "public-read"
                })
                .promise();

            fs.unlink(file.path, (err) => {
                if (err) console.log(err);
            });
            const contractURL = s3res.Location;

            // Create a jobPost
            const jobpost = {
                post_title: req.body.post_title,
                post_short_des: req.body.post_short_des,
                post_long_des: req.body.post_long_des,
                post_requirements: req.body.post_requirements,
                post_type: req.body.post_type,
                post_pay: req.body.post_pay,
                post_status: req.body.post_status,
                post_expiry: req.body.post_expiry,
                post_industry: req.body.post_industry,
                post_faculty: req.body.post_faculty,
                post_max_applicants: req.body.post_max_applicants,
                post_contract: contractURL,
                employerId: req.body.employerId
            };
            console.log(jobpost);
            res.json(jobpost);
            // Save JobPost in the database
            Jobpost.create(jobpost)
                .then((data) => {
                    res.send(data);
                })
                .catch((err) => {
                    res.status(500).send({
                        message:
                            err.message ||
                            "Some error occurred while creating the JobPost."
                    });
                });
        }
        uploadFile(file);
    } catch (err) {
        res.status(422).json({ err });
    }
};

// Retrieve all Employers from the database.
exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.like]: `%${emp_name}%` } } : null;

    Employer.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while retrieving Employer."
            });
        });
};

// Find a single Employer with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Employer.findByPk(id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Employer with id=" + id
            });
        });
};

// Update a Employer by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    // console.log(req.body);
    Employer.update(req.body, {
        where: { id: id }
    })
        .then((num) => {
            if (num == 1) {
                Employer.findByPk(id).then((data) => {
                    res.send(data);
                });
            } else {
                res.send({
                    message: `Cannot update Employer with id=${id}. Maybe Employer was not found or req.body is empty!`
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Employer with id=" + id
            });
        });
};

// Delete a Employer by the id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Employer.destroy({
        where: { id: id }
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Employer was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Employer with id=${id}. Maybe Employer was not found!`
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Employer with id=" + id
            });
        });
};

// DeleteAll Employer by the id in the request
exports.deleteAll = (req, res) => {
    Employer.destroy({
        where: {},
        truncate: false
    })
        .then((nums) => {
            res.send({
                message: `${nums} Employer were deleted successfully!`
            });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while removing all Employer."
            });
        });
};

/*Find on condition
exports.findAllPublished = (req, res) => {
	Employer.findAll({ where: { published: true } })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving Employer.",
			});
		});
};
*/

//Get employer by jobpost ID
exports.findEmployerById = (employerId) => {
    return Employer.findByPk(employerId, { include: ["jobposts"] })
        .then((employer) => {
            return employer;
        })
        .catch((err) => {
            console.log(">> Error while finding Employers: ", err);
        });
};

exports.findJobpostById = (id) => {
    return Jobpost.findByPk(id, { include: ["employer"] })
        .then((jobpost) => {
            return jobpost;
        })
        .catch((err) => {
            console.log(">> Error while finding jobpost: ", err);
        });
};
