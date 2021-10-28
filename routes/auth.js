const router = require('express').Router();

router.get("/", (req,res) => {
    res.send("Authentication Page")
});

module.exports = router;