const User = require("../models/user.model.js");
const Post = require("../models/post.model.js");
const Archive = require("../models/archive.model.js");

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

const updatePost = async (req, res) => {
    try {
        const {username, postId} = req.params;
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(404).json({message: "User not found."});
        }
        const post = await Post.findById(postId);
        if(!post){
            return res.status(404).json({message: "Post not found."});
        }
        if(!post.userId.equals(user._id)){
            return res.status(403).json({message: "You are not authorized to update this post."});
        }
        const updatedFields = {};
        if(req.body.caption){
            updatedFields.caption = req.body.caption;
        }
        if(req.body.content){
            updatedFields.content = req.body.content;
        }
        await Post.updateOne({_id: post._id}, {$set: updatedFields});
        res.status(200).json({message: "Post successfully updated."});
    } catch (error) {
        res.status(500).json({message: "Error updating the post."});
    }
};

const deletePost = async (req, res) => {
    try {
        const {username, postId} = req.params;
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(404).json({message: "User not found."});
        }
        const post = await Post.findById(postId);
        if(!post){
            return res.status(404).json({message: "Post not found."});
        }
        if(!post.userId.equals(user._id)){
            return res.status(403).json({message: "You are not authorized to delete this post."});
        }
        const archive = post.toObject();
        delete archive._id;
        await Archive.create(archive);
        await Post.deleteOne({_id: post._id});
        res.status(200).json({message: "Post successfully deleted."});
    } catch (error) {
        res.status(500).json({message: "Error deleting the post."});
    }
};

const incrementLikes = async (req, res) => {
    try {
        const {username, postId} = req.params;
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(404).json({message: "User not found."});
        }
        const post = await Post.findById(postId);
        if(!post){
            return res.status(404).json({message: "Post not found."});
        }
        post.likes++;
        await Post.updateOne({_id: post._id}, {$set: {likes: post.likes}});
        res.status(200).json({message: "Post successfully liked."});
    } catch (error) {
        res.status(500).json({message: "Error liking the post."});
    }
};

const decrementLikes = async (req, res) => {
    try {
        const {username, postId} = req.params;
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(404).json({message: "User not found."});
        }
        const post = await Post.findById(postId);
        if(!post){
            return res.status(404).json({message: "Post not found."});
        }
        if(post.likes>0){
            post.likes--;
        }
        await Post.updateOne({_id: post._id}, {$set: {likes: post.likes}});
        res.status(200).json({message: "Post successfully unliked."});
    } catch (error) {
        res.status(500).json({message: "Error unliking the post."});
    }
};

const addComment = async (req, res) => {
    try {
        const {username, postId} = req.params;
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(404).json({message: "User not found."});
        }
        const post = await Post.findById(postId);
        if(!post){
            return res.status(404).json({message: "Post not found."});
        }
        const text = req.body.text;
        if(text.trim().length===0){
            return res.status(400).json({message: "Text cannot be empty."});
        }
        post.comments.push({userId: user._id, text: text});
        await post.save();
        res.status(200).json({message: "Comment successfully added."});
    } catch (error) {
        res.status(500).json({message: "Error adding the comment."});
    }
};

const deleteComment = async (req, res) => {
    try {
        const {username, postId} = req.params;
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(404).json({message: "User not found."});
        }
        const post = await Post.findById(postId);
        if(!post){
            return res.status(404).json({message: "Post not found."});
        }
        const userId = req.body.userId;
        const text = req.body.text;
        post.comments = post.comments.filter((comment) => !comment.userId.equals(userId) && comment.text!==text);
        await post.save();
        res.status(200).json({message: "Comment successfully deleted."});
    } catch (error) {
        res.status(500).json({message: "Error deleting the comment."});
    }
};

const addCollaborators = async (req, res) => {
    try {
        const {username, postId} = req.params;
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(404).json({message: "User not found."});
        }
        const post = await Post.findById(postId);
        if(!post){
            return res.status(404).json({message: "Post not found."});
        }
        if(!post.userId.equals(user._id)){
            return res.status(403).json({message: "You are not authorized to add collaborators to this post."});
        }
        const other_username = req.body.username;
        const other_user = await User.findOne({username: other_username});
        if(!other_user){
            return res.status(404).json({message: "Other user not found."});
        }
        if(post.collaborators.includes(other_user._id)){
            return res.status(400).json({message: "This user is already a collaborator."});
        }
        if(post.collaborators.length>=10){
            return res.status(400).json({message: "Cannot add more than 10 collaborators to a post."});
        }
        post.collaborators.push(other_user._id);
        await post.save();
        res.status(200).json({message: "Collaborator successfully added."});
    } catch (error) {
        res.status(500).json({message: "Error adding the collaborator."});
    }
};

const deleteCollaborators = async (req, res) => {
    try {
        const {username, postId} = req.params;
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(404).json({message: "User not found."});
        }
        const post = await Post.findById(postId);
        if(!post){
            return res.status(404).json({message: "Post not found."});
        }
        if(!post.userId.equals(user._id)){
            return res.status(403).json({message: "You are not authorized to delete collaborators from this post."});
        }
        const other_username = req.body.username;
        const other_user = await User.findOne({username: other_username});
        if(!other_user){
            return res.status(404).json({message: "Other user not found."});
        }
        if(!post.collaborators.includes(other_user._id)){
            return res.status(400).json({message: "This user is not a collaborator."});
        }
        post.collaborators = post.collaborators.filter((id) => !id.equals(other_user._id));
        await post.save();
        res.status(200).json({message: "Collaborator successfully deleted."});
    } catch (error) {
        res.status(500).json({message: "Error deleting the collaborator."});
    }
};

module.exports = {getPosts, createPost, updatePost, deletePost, incrementLikes, decrementLikes, addComment, deleteComment, addCollaborators, deleteCollaborators};