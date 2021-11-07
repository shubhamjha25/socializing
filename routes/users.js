const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

// UPDATE USER ACCOUNT DETAILS 
router.put("/:id", async (req,res) => {
    if(req.body.userId === req.params.id || req.user.isAdmin) {
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

module.exports = router;