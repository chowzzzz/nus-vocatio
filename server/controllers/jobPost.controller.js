const db = require("../models");
const JobPost = db.jobPost;
const Op = db.Sequelize.Op;

// Create and Save a new JobPost
exports.create = (req, res) => {
	// Validate request
	if (!req.body.title) {
		res.status(400).send({
			message: "Content can not be postty!",
		});
		return;
	}

	// Create a jobPost
	const jobPost = {
		post_title: req.body.post_title,
		post_description: req.body.post_description,
		post_requirements: req.post_requirements,
		post_pay: req.body.post_pay,
	};

	// Save JobPost in the database
	JobPost.create(jobPost)
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
	const post_id = req.query.post_id;
	var condition = post_id
		? { post_id: { [Op.like]: `%${post_title}%` } }
		: null;

	JobPost.findAll({ where: condition })
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
	const post_id = req.params.post_id;

	JobPost.findByPk(post_id)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error retrieving JobPost with id=" + post_id,
			});
		});
};

// Update a JobPost by the id in the request
exports.update = (req, res) => {
	const post_id = req.params.post_id;

	JobPost.update(req.body, {
		where: { post_id: post_id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "JobPost was updated successfully.",
				});
			} else {
				res.send({
					message: `Cannot update JobPost with id=${post_id}. Maybe JobPost was not found or req.body is postty!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error updating JobPost with id=" + post_id,
			});
		});
};

exports.delete = (req, res) => {
	const post_id = req.params.post_id;

	JobPost.destroy({
		where: { post_id: post_id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "JobPost was deleted successfully!",
				});
			} else {
				res.send({
					message: `Cannot delete JobPost with id=${post_id}. Maybe JobPost was not found!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Could not delete JobPost with id=" + post_id,
			});
		});
};

exports.deleteAll = (req, res) => {
	JobPost.destroy({
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
	JobPost.findAll({ where: { published: true } })
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
