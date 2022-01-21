const express = require("express");
const router = express.Router();
const mapsKey = process.env.MAPS_KEY

router.get("/", (req, res) => {
    res.status(200).json("get success")
});


router.get("/map", (req, res) => {
    res.status(200).json(mapsKey)
});


module.exports = router;