const express = require("express");

const {getUser, createUser, updateUser, deleteUser} = require("../controllers/user.controller.js");

const UserRouter = express.Router();

UserRouter.get("/:username", getUser);
UserRouter.post("/", createUser);
UserRouter.patch("/:username", updateUser);
UserRouter.delete("/:username", deleteUser);

module.exports = UserRouter;