const express = require("express");

const {getAllPosts} = require("../controllers/collabx.controller.js")

const CollabXRouter = express.Router();

CollabXRouter.get("/:username", getAllPosts);

module.exports = CollabXRouter;