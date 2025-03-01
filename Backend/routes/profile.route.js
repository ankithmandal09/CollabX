const express = require("express");

const {getProfile, createProfile, updateProfile, deleteProfile, addConnection, removeConnection} = require("../controllers/profile.controller.js");

const ProfileRouter = express.Router();

ProfileRouter.get("/:username", getProfile);
ProfileRouter.post("/:username", createProfile);
ProfileRouter.patch("/:username", updateProfile);
ProfileRouter.delete("/:username", deleteProfile);
ProfileRouter.patch("/:username/add-connection", addConnection);
ProfileRouter.patch("/:username/remove-connection", removeConnection);

module.exports = ProfileRouter;