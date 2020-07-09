module.exports = (app) => {
	const Student = require("../controllers/student.controller.js");

	var router = require("express").Router();

	// Create a new student
	router.post("/", Student.create);

	// Retrieve all student
	router.get("/", Student.findAll);

	// Retrieve a single Stdeunt with id
	router.get("/:id", Student.findOne);

	// Update a Student with id
	router.put("/:id", Student.update);

	// Delete a Tutorial with id
	router.delete("/:id", Student.delete);

	// Create a new Tutorial
	router.delete("/", Student.deleteAll);

	app.use("/api/student", router);
};
