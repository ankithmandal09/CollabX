const express = require("express");

const {getPosts, createPost} = require("../controllers/post.controller.js");

const PostRouter = express.Router();

PostRouter.get("/:username", getPosts);
PostRouter.post("/:username", createPost);

module.exports = PostRouter;