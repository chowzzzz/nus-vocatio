const upload = require("../config/upload.config.js");

module.exports = (app) => {
    const Student = require("../controllers/student.controller.js");

    var router = require("express").Router();

    // Create a new student
    router.post("/", upload.any(), Student.createStudent);

    //Create a new application
    router.post("/application", Student.createApplication);

    // Retrieve all student
    router.get("/", Student.findAll);

    // Retrieve a single Student with id
    router.get("/:id", Student.findOne);

    // Update a Student with id
    router.put("/:id", Student.update);

    // Delete a Student with id
    router.delete("/:id", Student.delete);

    // Create a new Student
    router.delete("/", Student.deleteAll);

    // Find all applications made by student
    router.get("/applicationd/:id", Student.findApplicationByStuId);

    app.use("/api/student", router);
};
