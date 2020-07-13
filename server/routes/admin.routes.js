module.exports = (app) => {
	const Admin = require("../controllers/admin.controller.js");

	var router = require("express").Router();

	// Create a new Admin
	router.post("/", Admin.create);

	// Retrieve all Admin
	router.get("/", Admin.findAll);

	// Retrieve a single Stdeunt with id
	router.get("/:id", Admin.findOne);

	// Update a Admin with id
	router.put("/:id", Admin.update);

	// Delete a Admin with id
	router.delete("/:id", Admin.delete);

	// Create a new Admin
	router.delete("/", Admin.deleteAll);

	app.use("/api/admin", router);
};
