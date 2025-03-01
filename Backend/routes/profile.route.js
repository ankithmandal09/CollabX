const express = require("express");

const {getProfile, createProfile} = require("../controllers/profile.controller.js");

const ProfileRouter = express.Router();

ProfileRouter.get("/:username", getProfile);
ProfileRouter.post("/:username", createProfile);

module.exports = ProfileRouter;