const router = require('express').Router();

router.get("/", (req,res) => {
    res.send("Users Page")
});

module.exports = router;