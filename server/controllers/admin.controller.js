const jwt = require("jsonwebtoken");
const config = require("../config/config");

const db = require("../models");
const Admin = db.admin;
const Op = db.Sequelize.Op;

// Create and Save a new Admin
exports.create = (req, res) => {
    // Validate request
    if (!req.body.adm_user) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a admin
    const admin = {
        adm_user: req.body.adm_user,
        adm_email: req.body.adm_email,
        adm_password: req.body.adm_password
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
                    "Some error occurred while creating the Admin."
            });
        });
};

// Login user
exports.login = (req, res) => {
    console.log(req.body);
    Admin.findOne({ where: { adm_email: req.body.email } })
        .then((data) => {
            const user = data.toJSON();
            console.log(user);
            /* let passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.adm_password
            ); */
            let passwordIsValid = req.body.password === user.adm_password;
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

// Retrieve all Admins from the database.
exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.like]: `%${adm_user}%` } } : null;

    Admin.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Admin."
            });
        });
};

// Find a single Admin with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Admin.findByPk(id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Admin with id=" + id
            });
        });
};

// Update a Admin by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    /* let admin;
    if (req.body.adm_password == "") {
        Admin.findOne({
            where: { id: id }
        })
            .then((admin) => {
                return admin.update({
                    adm_user: req.body.adm_user,
                    adm_email: req.body.adm_email
                });
            })
            .then((num) => {
                if (num == 1) {
                    res.send({
                        message: "Admin was updated successfully."
                    });
                    res.status(200);
                } else {
                    res.send({
                        message: `Cannot update Admin with id=${id}. Maybe Admin was not found or req.body is empty!`
                    });
                }
            })
            .catch((err) => {
                res.status(500).send({
                    message: "Error updating Admin with id=" + id
                });
            });
    } else {
		
	} */

    Admin.update(req.body, {
        where: { id: id }
    })
        .then((num) => {
            if (num == 1) {
                Admin.findByPk(id).then((data) => {
                    res.send(data);
                });
            } else {
                res.send({
                    message: `Cannot update Admin with id=${id}. Maybe Admin was not found or req.body is empty!`
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Admin with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Admin.destroy({
        where: { id: id }
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Admin was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Admin with id=${id}. Maybe Admin was not found!`
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Admin with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Admin.destroy({
        where: {},
        truncate: false
    })
        .then((nums) => {
            res.send({
                message: `${nums} Admin were deleted successfully!`
            });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while removing all Admin."
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
                    err.message || "Some error occurred while retrieving Admin."
            });
        });
};
