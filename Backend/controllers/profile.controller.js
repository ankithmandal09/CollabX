const User = require("../models/user.model.js");
const Profile = require("../models/profile.model.js");

const getProfile = async (req, res) => {
    try {
        const username = req.params.username;
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(404).json({message: "User not found."});
        }
        const profile = await Profile.findOne({userId: user._id});
        if(!profile){
            return res.status(404).json({message: "Profile not found."});
        }
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({message: "Error getting the profile."});
    }
};

const createProfile = async (req, res) => {
    try {
        const username = req.params.username;
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(404).json({message: "User not found."});
        }
        const {firstName, lastName, phoneNumber, email, gender} = req.body;
        if(!firstName || !lastName || !phoneNumber || !email || !gender){
            return res.status(400).json({message: "FirstName, lastName, phoneNumber, email and gender has to be given."});
        }
        const profile = await Profile.findOne({$or: [{userId: user._id}, {email: email}]});
        if(profile){
            return res.status(400).json({message: "Profile already exists."});
        }
        await Profile.create({...req.body, userId: user._id});
        res.status(201).json({message: "Profile successfully created."});
    } catch (error) {
        res.status(500).json({message: "Error creating the profile."});
    }
};

const updateProfile = async (req, res) => {
    try {
        const username = req.params.username;
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(404).json({message: "User not found."});
        }
        const profile = await Profile.findOne({userId: user._id});
        if(!profile){
            return res.status(404).json({message: "Profile not found."});
        }
        const new_email = req.body.email;
        if(new_email){
            const new_profile = await Profile.findOne({email: new_email});
            if(new_profile){
                return res.status(400).json({message: "email already exists."});
            }
        } 
        await Profile.updateOne({userId: user._id}, {$set: {...req.body}});
        res.status(200).json({message: "Profile successfully updated."});
    } catch (error) {
        res.status(500).json({message: "Error updating the profile."});
    }
};

const deleteProfile = async (req, res) => {
    try {
        const username = req.params.username;
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(404).json({message: "User not found."});
        }
        const profile = await Profile.findOne({userId: user._id});
        if(!profile){
            return res.status(404).json({message: "Profile not found."});
        }
        await Profile.deleteOne({userId: user._id});
        res.status(200).json({message: "Profile successfully deleted."});
    } catch (error) {
        res.status(500).json({message: "Error deleting the profile."});
    }
};

const addConnection = async (req, res) => {
    try {
        const username = req.params.username;
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(404).json({message: "User not found."});
        }
        const profile = await Profile.findOne({userId: user._id});
        if(!profile){
            return res.status(404).json({message: "Profile not found."});
        }
        const other_username = req.body.username;
        const other_user = await User.findOne({username: other_username});
        if(!other_user){
            return res.status(404).json({message: "Other user not found."});
        }
        if(profile.connections.includes(other_user._id)) {
            return res.status(400).json({message: "You are already connected with this user."});
        }
        profile.connections.push(other_user._id);
        await profile.save();
        res.status(200).json({message: "Successfully connected to the other user."});
    } catch (error) {
        res.status(500).json({message: "Error connecting to the other user."});
    }
};

const removeConnection = async (req, res) => {
    try {
        const username = req.params.username;
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(404).json({message: "User not found."});
        }
        const profile = await Profile.findOne({userId: user._id});
        if(!profile){
            return res.status(404).json({message: "Profile not found."});
        }
        const other_username = req.body.username;
        const other_user = await User.findOne({username: other_username});
        if(!other_user){
            return res.status(404).json({message: "Other user not found."});
        }
        if(!profile.connections.includes(other_user._id)) {
            return res.status(400).json({ message: "You are not connected to this user." });
        }
        profile.connections = profile.connections.filter((id) => !id.equals(other_user._id));
        await profile.save();
        res.status(200).json({message: "Successfully disconnected from the other user."});
    } catch (error) {
        res.status(500).json({message: "Error disconnecting from the other user."});
    }
};


module.exports = {getProfile, createProfile, updateProfile, deleteProfile, addConnection, removeConnection};