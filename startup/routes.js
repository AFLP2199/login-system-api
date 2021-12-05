const express = require("express");
const users = require("../routes/users");
const authentication = require("../routes/authentication");
const error = require("../middleware/error");

module.exports = function (app) {
    app.use(express.json());
    app.use("/api/users", users);
    app.use("/api/auth", authentication);
    app.use(error);
};
