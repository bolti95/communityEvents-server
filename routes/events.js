const express = require('express');
const router = express.Router();
const eventsData = require('../testData');
const Event = require("../models/Events");
const event_controller = require("../controllers/Events");

router.get("/", async (req, res) => {
    // var dateObj = new Date();
    // var day = dateObj.getUTCDate();
    // var month = dateObj.getUTCMonth() + 1;
    // var year = dateObj.getUTCFullYear();
    // if (month < 10) {
    //     var dateTotal = (`${day}` + '0' + `${month}${year}`)
    // } else {
    //     var dateTotal = (`${day}${month}${year}`)
    // }        
    // await eventsData.forEach(function (item) {
    //     if (item.date.replace(/\D/g, "") > dateTotal) {

    //     }
    // })
    res.status(200).json("fetch a list of events")
})

router.post("/create", event_controller.event_create)

// router.post("/create", (req, res) => {
//     const data = req.body
//     const eventsDataNew = eventsData.push(data)
//     console.log(eventsDataNew)
//     res.status(200).json({eventsDataNew})
// })
router.get("/create", (req, res) => {
    const data = req.body
    console.log(data)
    res.status(200).json(Event)
})

router.get("/display:eventDate", (req, res) => {
    const eventDate = req.body
    Event.findOne({eventDate: eventDate}, function (err, event) {
        if (err) throw err;
        if (!event) return res.send({response: "No event!"})
        res.status(200).send({response: event})
    })
})

router.post("/", (req, res) => {
    res.status(200).json("add a new event")
})



module.exports = router
