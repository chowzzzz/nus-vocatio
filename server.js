console.log("hello");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

/* app.get("/status", (req, res) => {
    res.send({
        message: "hello world!"
    });
}); */

const db = require("./app/models");
//db.sequelize.sync();

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

app.post("/register", (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! You are now registered, have fun!`
    });
});

app.listen(process.env.PORT || 8081);
