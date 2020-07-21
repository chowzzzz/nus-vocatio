const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
};

app.use(allowCrossDomain);

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
require("./routes/jobpost.routes")(app);
require("./routes/application.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
