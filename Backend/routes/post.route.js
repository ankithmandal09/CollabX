const express = require("express");

const {getPosts, createPost, updatePost, deletePost, incrementLikes, decrementLikes, addComment, deleteComment, addCollaborators, deleteCollaborators} = require("../controllers/post.controller.js");

const PostRouter = express.Router();

PostRouter.get("/:username", getPosts);
PostRouter.post("/:username", createPost);
PostRouter.patch("/:username/:postId", updatePost);
PostRouter.delete("/:username/:postId", deletePost);
PostRouter.patch("/:username/:postId/increment-likes", incrementLikes);
PostRouter.patch("/:username/:postId/decrement-likes", decrementLikes);
PostRouter.patch("/:username/:postId/add-comment", addComment);
PostRouter.patch("/:username/:postId/delete-comment", deleteComment);
PostRouter.patch("/:username/:postId/add-collaborators", addCollaborators);
PostRouter.patch("/:username/:postId/delete-collaborators", deleteCollaborators);


module.exports = PostRouter;