const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

// UPDATE USER ACCOUNT DETAILS 
router.put("/:id", async (req,res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin) {
        // if user also updates password
        if(req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }
            catch(err) {
                return res.status(500).json(err);
            }
        }
        // update details
        try {
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body });
            res.status(200).json("Account Updated Successfully");
        }
        catch(err) {
            return res.status(500).json(err);
        }
    } 
    else {
        return res.status(403).json("You Can Update Only Your Account!");
    }
});

// DELETE USER  
router.delete("/:id", async (req,res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin) {
        // delete user account
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account Deleted Successfully");
        }
        catch(err) {
            return res.status(500).json(err);
        }
    } 
    else {
        return res.status(403).json("You Can Delete Only Your Account!");
    }
});

// GET USER
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
    }
    catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;