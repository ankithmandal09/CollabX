const User = require("../models/user.model.js");
const Post = require("../models/post.model.js");

const getPosts = async (req, res) => {
    try {
        const username = req.params.username;
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(404).json({message: "User not found."});
        }
        const posts = await Post.find({userId: user._id});
        if(!posts || posts.length===0){
            return res.status(404).json({message: "No posts found."});
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({message: "Error getting all the posts."});
    }
};

const createPost = async (req, res) => {
    try {
        const username = req.params.username;
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(404).json({message: "User not found."});
        }
        const {caption} = req.body;
        if(!caption){
            return res.status(400).json({message: "Caption has to be given."});
        }
        await Post.create({caption, userId: user._id});
        res.status(201).json({message: "Post successfully created."});
    } catch (error) {
        res.status(500).json({message: "Error creating the post."});
    }
};

module.exports = {getPosts, createPost};