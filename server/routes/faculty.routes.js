module.exports = (app) => {
	const Faculty = require("../controllers/faculty.controller.js");

	var router = require("express").Router();

	// Create a new faculty
	router.post("/", Faculty.create);

	// Retrieve all faculty
	router.get("/", Faculty.findAll);

	// Retrieve a single Stdeunt with id
	router.get("/:id", Faculty.findOne);

	// Update a Faculty with id
	router.put("/:id", Faculty.update);

	// Delete a Tutorial with id
	router.delete("/:id", Faculty.delete);

	// Create a new Tutorial
	router.delete("/", Faculty.deleteAll);

	app.use("/api/faculty", router);
};
