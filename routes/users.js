const bcrypt = require("bcrypt");
const express = require("express");
const _ = require("lodash");
const { User, validateUser } = require("../models/user");
const authorization = require("../middleware/authorization");
const router = express.Router();

router.get("/me", authorization, async (req, res) => {
    //return user by id without password
    const user = await User.findById(req.user._id).select("-password");
    res.send(user);
});

router.post("/", async (req, res) => {
    const { error } = validateUser(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already registered.");

    //lodash to pick from req.body
    user = new User(_.pick(req.body, ["name", "email", "password"]));

    //bcrypt to generate password salt
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = user.generateAuthenticationToken();
    res.header("x-auth-token", token)
        .header("access-control-expose-headers", "x-auth-token")
        .send(_.pick(user, ["_id", "name", "email"]));
});

module.exports = router;
