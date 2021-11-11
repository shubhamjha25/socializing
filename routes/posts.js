const router = require('express').Router();
const Post = require("../models/Post");

router.get("/", (req, res) => {
    res.send("Posts Page");
});

module.exports = router;