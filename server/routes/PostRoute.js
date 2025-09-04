const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer();
const { getAllPost, getPost, addPost, deletePost, addReelsPost, aprove } = require("../controler/postControles");

// get all Post
router.get("/", getAllPost);

// get Post by id
router.get("/:id", getPost);

// add Post
router.post("/addPhotosPost", upload.array('photos', 10), addPost); // accept up to 10 photos
router.post("/addReelsPost",upload.single('video'), addReelsPost);
router.post("/approve",aprove)

// delete Post
router.delete("/id",deletePost)

module.exports = router;