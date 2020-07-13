module.exports = (app) => {
	const Employer = require("../controllers/employer.controller.js");

	var router = require("express").Router();

	// Create a new Employer
	router.post("/", Employer.create);

	// Retrieve all Employer
	router.get("/", Employer.findAll);

	// Retrieve a single Stdeunt with id
	router.get("/:id", Employer.findOne);

	// Update a Employer with id
	router.put("/:id", Employer.update);

	// Delete a Employer with id
	router.delete("/:id", Employer.delete);

	// Create a new Employer
	router.delete("/", Employer.deleteAll);

	app.use("/api/employer", router);
};
