const User = require("../models/user.model.js");
const Profile = require("../models/profile.model.js");
const Post = require("../models/post.model.js");

const getAllPosts = async (req, res) => {
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
        const connections = profile.connections;
        if (!connections || connections.length===0){
            return res.status(404).json({message: "No connections found."});
        }
        let {page = 1, limit = 10} = req.query;
        page = parseInt(page);
        limit = parseInt(limit);
        if (isNaN(page) || page < 1) {
            page = 1;
        }
        if (isNaN(limit) || limit < 1) {
            limit = 10;
        }
        if (limit > 100) {
            limit = 100;
        }
        const posts = await Post.aggregate([
            {
                $match: {
                    userId: {$in: connections}
                }
            },
            {
                $sort: {createdAt: -1}
            },
            {
                $skip: (page - 1) * limit
            },
            {
                $limit: limit
            }
        ]);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({message: "Error getting the posts."});
    }
};

module.exports = {getAllPosts};