// controller/likeController.js
const Like = require("../models/Likes");

const likeControls = {
    likePost: async (req, res) => {
        try {
            const { postId, userid } = req.body;

            if (!postId || !userid) {
                return res.status(400).json({ success:false,message: "postId and userid are required" });
            }

            // check if already liked
            const existingLike = await Like.findOne({ postId, userid });
            if (existingLike) {
                return res.status(400).json({ success:false, message: "Already liked this post" });
            }

            // create like
            const newLike = new Like({ postId, userid });
            await newLike.save();

            res.status(201).json({ success:true, message: "Post liked successfully", like: newLike });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success:false, message: "Something went wrong", error });
        }
    },
    unlikePost: async (req, res) => {
        try {
            const { postId, userid } = req.query;
            await Like.findOneAndDelete({ postId, userid });
            res.json({ message: "Unliked successfully" });
        } catch (err) {
            res.status(500).json({ message: "Error unliking post" });
        }
    },
    checkLike: async (req, res) => {
        try {
            const { postId, userid } = req.query;
            const existing = await Like.findOne({ postId, userid });
            res.json({ liked: !!existing });
        } catch (err) {
            res.status(500).json({ message: "Error checking like" });
        }
    },
};

module.exports = likeControls;
