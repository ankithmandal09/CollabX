const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: [3, "Username has to be atleast 3 characters long."],
        unique: true,
        required: true
    },
    password: {
        type: String,
        minlength: [8, "Password has to be atleast 8 characters long."],
        required: true
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;