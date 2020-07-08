module.exports = app => {
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

    app.use('/api/student', router);
  };