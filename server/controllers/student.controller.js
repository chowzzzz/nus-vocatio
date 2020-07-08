const db = require("../models");
const Student = db.student;
const Op = db.Sequelize.Op;

// Create and Save a new Student
exports.create = (req, res) => {
	// Validate request
	if (!req.body.title) {
		res.status(400).send({
			message: "Content can not be empty!",
		});
		return;
	}

	// Create a student
	const student = {
		stu_name: req.body.stu_name,
		stu_mobile: req.body.stu_mobile,
		stu_email: req.stu_email,
		stu_linkedin: req.body.stu_linkedin,
		stu_password: req.body.stu_password,
		stu_status_change: req.body.stu_status_change,
		stu_new_jobs: req.body.stu_new_jobs,
		stu_news_letter: req.body.stu_news_letter,
		stu_subscription: req.body.stu_subscription,
	};

	// Save Student in the database
	Student.create(student)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Student.",
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
					"Some error occurred while retrieving Student.",
			});
		});
};

// Find a single Student with an id
exports.findOne = (req, res) => {
	const stu_id = req.params.stu_id;

	Student.findByPk(stu_id)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error retrieving Student with id=" + stu_id,
			});
		});
};

// Update a Student by the id in the request
exports.update = (req, res) => {
	const stu_id = req.params.id;

	Student.update(req.body, {
		where: { stu_id: stu_id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "Student was updated successfully.",
				});
			} else {
				res.send({
					message: `Cannot update Student with id=${stu_id}. Maybe Student was not found or req.body is empty!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error updating Student with id=" + stu_id,
			});
		});
};

exports.delete = (req, res) => {
	const stu_id = req.params.stu_id;

	Student.destroy({
		where: { stu_id: stu_id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "Student was deleted successfully!",
				});
			} else {
				res.send({
					message: `Cannot delete Student with id=${stu_id}. Maybe Student was not found!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Could not delete Student with id=" + stu_id,
			});
		});
};

exports.deleteAll = (req, res) => {
	Student.destroy({
		where: {},
		truncate: false,
	})
		.then((nums) => {
			res.send({ message: `${nums} Student were deleted successfully!` });
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while removing all Student.",
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
					"Some error occurred while retrieving Student.",
			});
		});
};
