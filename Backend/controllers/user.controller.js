const bcrypt = require("bcryptjs");

const User = require("../models/user.model.js");

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

module.exports = {getUser, createUser};