const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
global.__basedir = __dirname;

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//sync db
const db = require("./models");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to vocatio application." });
});

require("./routes/student.routes")(app);
require("./routes/admin.routes")(app);
require("./routes/employer.routes")(app);
require("./routes/jobPost.routes")(app);
require("./routes/application.routes")(app);

app.use(function (err, req, res, next) {
    if (err.code === "LIMIT_FILE_TYPES") {
        res.status(422).json({ error: "Only images are allowed" });
        return;
    }

    if (err.code === "LIMIT_FILE_SIZE") {
        res.status(422).json({
            error: `Image is too large. Max size is ${MAX_SIZE / 1000}KB`
        });
        return;
    }
});

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
