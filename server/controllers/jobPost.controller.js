const db = require("../models");
const Jobpost = db.jobpost;
const Op = db.Sequelize.Op;

// Create and Save a new JobPost
exports.create = (req, res) => {
	// Validate request
	if (!req.body.post_title) {
		res.status(400).send({
			message: "Content can not be postty!",
		});
		return;
	}

	// Create a jobPost
	const jobpost = {
		post_title: req.body.post_title,
		post_description: req.body.post_description,
		post_requirements: req.post_requirements,
		post_pay: req.body.post_pay,
	};

	// Save JobPost in the database
	Jobpost.create(jobpost)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the JobPost.",
			});
		});
};

// Retrieve all JobPosts from the database.
exports.findAll = (req, res) => {
	const id = req.query.id;
	var condition = id
		? { id: { [Op.like]: `%${post_title}%` } }
		: null;

	Jobpost.findAll({ where: condition })
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
				message: "Error retrieving JobPost with id=" + id,
			});
		});
};

// Update a JobPost by the id in the request
exports.update = (req, res) => {
	const id = req.params.id;

	Jobpost.update(req.body, {
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "JobPost was updated successfully.",
				});
			} else {
				res.send({
					message: `Cannot update JobPost with id=${id}. Maybe JobPost was not found or req.body is postty!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error updating JobPost with id=" + id,
			});
		});
};

exports.delete = (req, res) => {
	const id = req.params.id;

	Jobpost.destroy({
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "JobPost was deleted successfully!",
				});
			} else {
				res.send({
					message: `Cannot delete JobPost with id=${id}. Maybe JobPost was not found!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Could not delete JobPost with id=" + id,
			});
		});
};

exports.deleteAll = (req, res) => {
	Jobpost.destroy({
		where: {},
		truncate: false,
	})
		.then((nums) => {
			res.send({
				message: `${nums} JobPost were deleted successfully!`,
			});
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while removing all JobPost.",
			});
		});
};

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
};
