const upload = require("../config/upload.config.js");

module.exports = (app) => {
    const Jobpost = require("../controllers/jobpost.controller.js");

    var router = require("express").Router();

    /* Create a new JobPost
	router.post("/", Jobpost.create);
	*/

    // Retrieve all JobPost
    router.get("/", Jobpost.findAll);

    // Retrieve a single Stdeunt with id
    router.get("/:id", Jobpost.findOne);

    // Update a JobPost with id
    router.put("/:id", upload.single("post_contract"), Jobpost.update);

    // Delete a JobPost with id
    router.delete("/:id", Jobpost.delete);

    // Create a new JobPost
    router.delete("/", Jobpost.deleteAll);

    //Find all applications from jobpost ID
    router.get("/application/:id", Jobpost.findApplicationByJobId);

    app.use("/api/jobpost", router);
};
