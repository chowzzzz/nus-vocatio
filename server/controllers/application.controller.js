const db = require("../models");
const Application = db.application;
const Op = db.Sequelize.Op;

// Create and Save a new Application
exports.create = (req, res) => {
    // Validate request
    if (!req.body.status) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a application
    const application = {
        status: req.body.status,
        studentId: req.body.studentId,
        jobpostId: req.body.jobpostId
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

// Retrieve all Applications from the database.
exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

    Application.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while retrieving Application."
            });
        });
};

// Find a single Application with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Application.findByPk(id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Application with id=" + id
            });
        });
};

// Update a Application by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Application.update(req.body, {
        where: { id: id }
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Application was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Application with id=${id}. Maybe Application was not found or req.body is empty!`
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Application with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Application.destroy({
        where: { id: id }
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Application was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Application with id=${id}. Maybe Application was not found!`
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Application with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Application.destroy({
        where: {},
        truncate: false
    })
        .then((nums) => {
            res.send({
                message: `${nums} Application were deleted successfully!`
            });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while removing all Application."
            });
        });
};

/*
exports.findAllPublished = (req, res) => {
	Application.findAll({ where: { published: true } })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving Application.",
			});
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

//Find all applications from jobpost ID
exports.findApplicationByJobId = (id) => {
	return Application.findByPk(id, { include: ["jobpost"] })
	  .then((application) => {
		return application;
	  })
	  .catch((err) => {
		console.log(">> Error while finding applications: ", err);
	  });
  };*/
