const express = require("express");
const { likePost, checkLike, unlikePost } = require("../controler/likeController");
const router = express.Router();


router.post("/like", likePost);

router.get("/check", checkLike);

router.delete("/unlike", unlikePost);


module.exports = router;