const db = require("../models");
const Faculty = db.faculty;
const Op = db.Sequelize.Op;

// Create and Save a new Faculty
exports.create = (req, res) => {
	// Validate request
	if (!req.body.faculty_name) {
		res.status(400).send({
			message: "Content can not be empty!",
		});
		return;
	}

	// Create a faculty
	const faculty = {
		faculty_name: req.body.faculty_name,
	};

	// Save Faculty in the database
	Faculty.create(faculty)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Faculty.",
			});
		});
};

// Retrieve all Facultys from the database.
exports.findAll = (req, res) => {
	const id = req.query.id;
	var condition = id
		? { id: { [Op.like]: `%${faculty_name}%` } }
		: null;

	Faculty.findAll({ where: condition })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving Faculty.",
			});
		});
};

// Find a single Faculty with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Faculty.findByPk(id)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error retrieving Faculty with id=" + id,
			});
		});
};

// Update a Faculty by the id in the request
exports.update = (req, res) => {
	const id = req.params.id;

	Faculty.update(req.body, {
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "Faculty was updated successfully.",
				});
			} else {
				res.send({
					message: `Cannot update Faculty with id=${id}. Maybe Faculty was not found or req.body is empty!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error updating Faculty with id=" + id,
			});
		});
};

exports.delete = (req, res) => {
	const id = req.params.id;

	Faculty.destroy({
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "Faculty was deleted successfully!",
				});
			} else {
				res.send({
					message: `Cannot delete Faculty with id=${id}. Maybe Faculty was not found!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Could not delete Faculty with id=" + id,
			});
		});
};

exports.deleteAll = (req, res) => {
	Faculty.destroy({
		where: {},
		truncate: false,
	})
		.then((nums) => {
			res.send({ message: `${nums} Faculty were deleted successfully!` });
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while removing all Faculty.",
			});
		});
};

exports.findAllPublished = (req, res) => {
	Faculty.findAll({ where: { published: true } })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving Faculty.",
			});
		});
};
