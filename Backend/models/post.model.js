const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    caption: {
        type: String,
        maxlength: [1000, "Caption cannot exceed 1000 characters."],
        required: true
    },
    content: {
        type: String,
        required: false
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", required: true
        },
        text: {
            type: String,
            required: true
        }
    }],
    collaborators: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;