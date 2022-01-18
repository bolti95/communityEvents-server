const express = require("express");
const router = express.Router();
const mapsKey = process.env.MAPS_KEY

router.get("/", (req, res) => {
    // console.log(req.oidc.isAuthenticated());
    res.status(200).json("get success")
    // get user from model
});


router.get("/map", (req, res) => {
    // console.log(req.oidc.isAuthenticated());
    res.status(200).json(mapsKey)
    // get user from model
});


module.exports = router;