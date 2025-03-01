const express = require("express");

const {getUser, createUser} = require("../controllers/user.controller.js");

const UserRouter = express.Router();

UserRouter.get("/:username", getUser);
UserRouter.post("/", createUser);

module.exports = UserRouter;