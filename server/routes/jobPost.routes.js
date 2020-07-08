module.exports = (app) => {
	const JobPost = require("../controllers/jobPost.controller.js");

	var router = require("express").Router();

	// Create a new JobPost
	router.post("/", JobPost.create);

	// Retrieve all JobPost
	router.get("/", JobPost.findAll);

	// Retrieve a single Stdeunt with id
	router.get("/:id", JobPost.findOne);

	// Update a JobPost with id
	router.put("/:id", JobPost.update);

	// Delete a JobPost with id
	router.delete("/:id", JobPost.delete);

	// Create a new JobPost
	router.delete("/", JobPost.deleteAll);

	app.use("/api/jobPost", router);
};
