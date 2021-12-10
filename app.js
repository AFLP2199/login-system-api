const express = require("express");
const config = require("config");
const app = express();

// Startup Requirements
require("express-async-errors");
require("./startup/cors")(app);
require("./startup/rateLimiter")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();

const port = process.env.PORT || config.get("port");
const stringToLog = `Server up and running on PORT : ${port}`;
const server = app.listen(port, () => {
    console.log(stringToLog);
});

module.exports = server;
