const upload = require("../config/upload.config.js");

module.exports = (app) => {
    const Employer = require("../controllers/employer.controller.js");

    var router = require("express").Router();

    // Create a new Employer
    router.post("/", upload.any(), Employer.createEmployer);

    // Create a new JobPost
    router.post(
        "/jobpost",
        upload.single("post_contract"),
        Employer.createJobpost
    );

    // Retrieve all Employer
    router.get("/", Employer.findAll);

    // Retrieve a single Employer from a jobpost
    router.get("/:id", Employer.findEmployerById);

    // Retrieve a all Jobpost from an Employer
    router.get("/jobpost/:id", Employer.findJobpostById);

    // Update a Employer with id
    router.put("/:id", Employer.update);

    // Delete a Employer with id
    router.delete("/:id", Employer.delete);

    // Delete all Employers
    router.delete("/", Employer.deleteAll);

    app.use("/api/employer", router);
};
