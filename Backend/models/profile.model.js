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
    profilePicture: {
        type: String,
        required: false
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