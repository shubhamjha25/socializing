const router = require('express').Router();
const User = require("../models/User");
const Post = require("../models/Post");

// CREATE A POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        // save post in the database
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE A POST
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        // userId's should be matched
        if(post.userId === req.body.userId) {
            await post.updateOne({$set: req.body});
            res.status(200).json("Post Updated Successfully");
        }
        else {
            res.status(403).json("Access Denied - You cannot update other user's post");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;