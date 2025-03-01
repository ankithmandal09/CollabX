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
        const profile = await Profile.findOne({userId: user._id});
        if(profile){
            return res.status(400).json({message: "Profile already exists."});
        }
        await Profile.create({...req.body, userId: user._id});
        res.status(201).json({message: "Profile successfully created."});
    } catch (error) {
        res.status(500).json({message: "Error creating the profile."});
    }
};

module.exports = {getProfile, createProfile};