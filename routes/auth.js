const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

// REGISTER USER
router.post("/register", async (req,res) => {
    try {
        // if user already exists
        const user = await User.findOne({ email: req.body.email });
        if(user) {
            return res.status(401).json({ msg: "User Already Exists" });
        }

        // encrpyt user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // create a new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        // save user in the database
        user = await newUser.save();
        res.status(200).json(user)
    } catch(err) {
        res.status(500).json(err);
    }
});

// LOGIN 
router.post("/login", async (req,res) => {
    try {
        // if user doesn't exists
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("User Not Found");

        // if user enters incorrect password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("Incorrect Password");

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;