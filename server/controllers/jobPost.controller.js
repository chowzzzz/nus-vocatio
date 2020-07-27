const fs = require("fs");
const aws = require("../config/aws.config.js");

const db = require("../models");
const Jobpost = db.jobpost;
const Application = db.application;
const Op = db.Sequelize.Op;

// Retrieve all JobPosts from the database.
exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.like]: `%${post_title}%` } } : null;

    Jobpost.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while retrieving JobPost."
            });
        });
};

// Find a single JobPost with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Jobpost.findByPk(id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving JobPost with id=" + id
            });
        });
};

// Update a JobPost by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    const s3 = new aws.S3();

    try {
        const file = req.file;

        async function uploadFile(file) {
            let contractURL;
            if (file !== undefined) {
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
                contractURL = s3res.Location;
            } else {
                contractURL = req.body.post_contract;
            }

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
            // console.log(jobpost);
            // res.json(jobpost);
            // Save JobPost in the database
            Jobpost.update(jobpost, {
                where: { id: id }
            })
                .then((num) => {
                    if (num == 1) {
                        Jobpost.findByPk(id).then((data) => {
                            res.send(data);
                        });
                    } else {
                        res.send({
                            message: `Cannot update JobPost with id=${id}. Maybe JobPost was not found or req.body is empty!`
                        });
                    }
                })
                .catch((err) => {
                    res.status(500).send({
                        message: "Error updating JobPost with id=" + id
                    });
                });
        }

        uploadFile(file);
    } catch (err) {
        res.status(422).json({ err });
    }
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Jobpost.destroy({
        where: { id: id }
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "JobPost was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete JobPost with id=${id}. Maybe JobPost was not found!`
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete JobPost with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Jobpost.destroy({
        where: {},
        truncate: false
    })
        .then((nums) => {
            res.send({
                message: `${nums} JobPost were deleted successfully!`
            });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while removing all JobPost."
            });
        });
};

//Find all applications from jobpost ID
exports.findApplicationByJobId = (id) => {
    return Application.findByPk(id, { include: ["jobpost"] })
        .then((application) => {
            return application;
        })
        .catch((err) => {
            console.log(">> Error while finding applications: ", err);
        });
};

/* Find based on condition
exports.findAllPublished = (req, res) => {
	Jobpost.findAll({ where: { published: true } })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving JobPost.",
			});
		});
};*/
