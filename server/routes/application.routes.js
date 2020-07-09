module.exports = (app) => {
	const Application = require("../controllers/application.controller.js");

	var router = require("express").Router();

	// Create a new Application
	router.post("/", Application.create);

	// Retrieve all Application
	router.get("/", Application.findAll);

	// Retrieve a single Application
	router.get("/:id", Application.findOne);

	// Update aApplication with id
	router.put("/:id", Application.update);

	// Delete a Application with id
	router.delete("/:id", Application.delete);

	// Create a new Application
	router.delete("/", Application.deleteAll);

	app.use("/api/application", router);
};
