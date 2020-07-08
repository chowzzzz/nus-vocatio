const db = require("../models");
const Admin = db.admin;
const Op = db.Sequelize.Op;

// Create and Save a new Admin
exports.create = (req, res) => {
	// Validate request
	if (!req.body.title) {
		res.status(400).send({
			message: "Content can not be empty!",
		});
		return;
	}

	// Create a admin
	const admin = {
		adm_user: req.body.adm_user,
		adm_password: req.adm_password,
	};

	// Save Admin in the database
	Admin.create(admin)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Admin.",
			});
		});
};

// Retrieve all Admins from the database.
exports.findAll = (req, res) => {
	const adm_id = req.query.adm_id;
	var condition = admin_id
		? { adm_id: { [Op.like]: `%${adm_user}%` } }
		: null;

	Admin.findAll({ where: condition })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving Admin.",
			});
		});
};

// Find a single Admin with an id
exports.findOne = (req, res) => {
	const adm_id = req.params.adm_id;

	Admin.findByPk(adm_id)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error retrieving Admin with id=" + adm_id,
			});
		});
};

// Update a Admin by the id in the request
exports.update = (req, res) => {
	const adm_id = req.params.adm_id;

	Admin.update(req.body, {
		where: { adm_id: adm_id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "Admin was updated successfully.",
				});
			} else {
				res.send({
					message: `Cannot update Admin with id=${admin_id}. Maybe Admin was not found or req.body is empty!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error updating Admin with id=" + admin_id,
			});
		});
};

exports.delete = (req, res) => {
	const admin_id = req.params.admin_id;

	Admin.destroy({
		where: { adm_id: adm_id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "Admin was deleted successfully!",
				});
			} else {
				res.send({
					message: `Cannot delete Admin with id=${adm_id}. Maybe Admin was not found!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Could not delete Admin with id=" + adm_id,
			});
		});
};

exports.deleteAll = (req, res) => {
	Admin.destroy({
		where: {},
		truncate: false,
	})
		.then((nums) => {
			res.send({
				message: `${nums} Admin were deleted successfully!`,
			});
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while removing all Admin.",
			});
		});
};

exports.findAllPublished = (req, res) => {
	Admin.findAll({ where: { published: true } })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving Admin.",
			});
		});
};
