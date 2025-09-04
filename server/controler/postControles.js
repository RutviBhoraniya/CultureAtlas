const postModel = require('../models/Post')
const CategoryModel = require('../models/Category')
const { v4: uuidv4 } = require("uuid");
const streamifier = require("streamifier");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const generatePostId = () => {
    return "post_" + uuidv4(); // e.g. Post_9a4f1e6a-5c2f-4a42-bd72-d0b2e9d13e45
}

const imageUpload = async (req, res) => {
    try {

        const uploadResults = [];
        for (const file of req.files) {
            const result = await new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: "posts" },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                );

                streamifier.createReadStream(file.buffer).pipe(uploadStream);
            });

            uploadResults.push({
                publicId: result.public_id,
                url: result.secure_url,
            });
        }
        return uploadResults;

    } catch (err) {
        throw err;
    }
}

const videoUpload = async (req, res) => {
    return new Promise((resolve, reject) => {
        try {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    folder: "uploads",
                    resource_type: "video"
                },
                (error, result) => {
                    if (error) return reject(error);

                    resolve({
                        publicId: result.public_id,
                        url: result.secure_url,
                    });
                }
            );

            streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
        } catch (err) {
            reject(err);
        }
    });
}

const postControls = {
    getAllPost: async (req, res) => {
        try {
            const { category, contry } = req.query;

            console.log(category)
            console.log(contry)

            if (!contry && !category) {
                const allPost = await postModel.find();
                res.status(200).json(allPost);
            }else if (contry != "null" && category != "null") {
                const allPost = await postModel.find({ contry: contry,category_name: category });
                res.status(200).json(allPost);
            }
            else if (contry != "null") {
                const allPost = await postModel.find({ contry: contry });
                res.status(200).json(allPost);
            }
            else if (category != "null") {
                const AllId = await CategoryModel.find({ category_name: category });
                const allPost = await postModel.find({ postId: { $in: AllId[0]?.postIds } });
                res.status(200).json(allPost);
            }


        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Server Error", err });
        }
    },
    getPost: async (req, res) => {
        const PostId = req.params.id
        try {
            const Post = await postModel.find({ postId: PostId });
            res.status(200).json(Post);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Server Error", err });
        }
    },
    addPost: async (req, res) => {
        try {
            const newPost = req.body;

            // Convert single or comma-separated string to array
            const categories = Array.isArray(newPost.category)
                ? newPost.category
                : typeof newPost.category === "string"
                    ? newPost.category.split(",") // comma-separated string
                    : [];

            const photoUploads = await imageUpload(req, res);

            const newPostData = new postModel({
                postId: generatePostId(),
                userid: newPost.userid,
                type: newPost.type,
                title: newPost.title,
                contry: newPost.contry,
                description: newPost.description,
                category: categories,
                photo: photoUploads,
            });

            await newPostData.save();

            // Optional: Save each category if it doesn't exist
            for (let cat of categories) {
                await CategoryModel.findOneAndUpdate(
                    { category_name: cat },
                    {
                        $setOnInsert: { category_name: cat },
                        $addToSet: { postIds: newPostData.postId }
                    },
                    { upsert: true, new: true }
                );
            }

            res.status(200).json({ message: "Added successfully", Post: newPostData });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Server Error", error: err.message });
        }
    },
    addReelsPost: async (req, res) => {
        try {
            const newPost = req.body

            // Convert single or comma-separated string to array
            const categories = Array.isArray(newPost.category)
                ? newPost.category
                : typeof newPost.category === "string"
                    ? newPost.category.split(",") // comma-separated string
                    : [];

            const videoUploads = await videoUpload(req, res);
            console.log(videoUploads)

            const newPostData = await new postModel({
                postId: generatePostId(),
                userid: newPost.userid,
                type: newPost.type,
                title: newPost.title,
                contry: newPost.contry,
                description: newPost.description,
                category: categories,
                video: videoUploads
            })
            await newPostData.save();

            // Optional: Save each category if it doesn't exist
            for (let cat of categories) {
                await CategoryModel.findOneAndUpdate(
                    { category_name: cat },
                    {
                        $setOnInsert: { category_name: cat },
                        $addToSet: { postIds: newPostData.postId }
                    },
                    { upsert: true, new: true }
                );
            }

            res.status(200).json({ success: true, message: "added successfully", Post: newPostData });
        } catch (err) {
            console.error(err);
            res.status(500).json({ success: false, message: "Server Error", err });
        }
    },
    deletePost: async (req, res) => {
        try {
            const PostId = req.params.id;
            const deletedPost = await postModel.findOneAndDelete({ postId: PostId })
            res.json({ success: true, deletedPost: deletedPost })
        } catch (err) {
            res.status(500).json({ message: "Server Error", err });
        }
    },
    aprove: async (req, res) => {
        try {
            const { postId } = req.query;
            if (!postId) {
                return res.status(400).json({ success: false, message: "postId is required" });
            }

            const updatedPost = await postModel.findOneAndUpdate(
                { postId },                 
                { aproved: true },         
                { new: true }              
            );
            console.log(updatedPost)
            if (!updatedPost) {
                return res.status(404).json({ success: false, message: "Post not found" });
            }

            res.json({ success: true, message: "Post approved", post: updatedPost });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: "Error approving post",
                error: err.message,
            });
        }
    }
}

module.exports = postControls;