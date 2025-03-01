const bcrypt = require("bcryptjs");

const User = require("../models/user.model.js");
const Profile = require("../models/profile.model.js");
const Post = require("../models/post.model.js");
const Archive = require("../models/archive.model.js");

const getUser = async (req, res) => {
    try {
        const username = req.params.username;
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(404).json({message: "User not found."});
        }
        user.password = undefined;
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: "Error getting the user."});
    }
};

const createUser = async (req, res) => {
    try {
        const {username, password} = req.body;
        if(!username || !password){
            return res.status(400).json({message: "Username and password has to be given."});
        }
        const user = await User.findOne({username: username});
        if(user){
            return res.status(400).json({message: "Username already exists."});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({username, password: hashedPassword});
        res.status(201).json({message: "User successfully created."});
    } catch (error) {
        res.status(500).json({message: "Error creating the user."});
    }
};

const updateUser = async (req, res) => {
    try {
        const username = req.params.username;
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(404).json({message: "User not found."});
        }
        const new_username = req.body.username;
        const new_password = req.body.password;
        if(new_username){
            const new_user = await User.findOne({username: new_username});
            if(new_user){
                return res.status(400).json({message: "Username already exists."});
            }
            user.username = new_username;
            await user.save();
        }
        if(new_password){
            const hashedPassword = await bcrypt.hash(new_password, 10);
            user.password = hashedPassword;
            await user.save();
        }
        res.status(200).json({message: "Successfully updated the user."});
    } catch (error) {
        res.status(500).json({message: "Error updating the user."});
    }
};

const deleteUser = async (req, res) => {
    try {
        const username = req.params.username;
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(404).json({message: "User not found."});
        }
        await Archive.deleteMany({userId: user._id});
        await Post.deleteMany({userId: user._id});
        await Profile.deleteOne({userId: user._id});
        await User.deleteOne({_id: user._id});
        res.status(200).json({message: "Successfully deleted the user."});
    } catch (error) {
        res.status(500).json({message: "Error deleting the user."});
    }
};

module.exports = {getUser, createUser, updateUser, deleteUser};