const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
    firstName: {
        type: String,
        minlength: [3, "Firstname has to be atleast 3 characters long."],
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        minlength: [10, "Phone number has to be atleast 10 characters long."],
        maxlength: [10, "Phone number can only be 10 characters long."],
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "others"],
        required: true
    },
    birthday: {
        type: Date,
        required: false
    },
    nationality: {
        type: String,
        required: false
    },
    profilePicture: {
        type: String,
        required: false
    },
    bio: {
        type: String,
        maxlength: [1000, "Bio cannot exceed 1000 characters."],
        required: false
    },
    skills: {
        type: [String],
        required: false,
        enum: ["JavaScript", "HTML", "CSS", "React", "Redux", "Node", "Express", "Mongo DB", "System Design"]
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        unique: true,
        required: true
    },
    connections: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User"
    }
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;