const express = require('express');
const router = express.Router();
const Event = require("../models/Events");
const event_controller = require("../controllers/Events");

router.get("/", async (req, res) => {
    res.status(200).json("fetch a list of events")
})

router.post("/create", event_controller.event_create)
router.get("/create", (req, res) => {
    // console.log(data)
    res.status(200).json(Event)
})

router.get("/display", event_controller.event_display)

router.delete("/expired", event_controller.event_delete)


module.exports = router

// router.post("/create", (req, res) => {
//     const data = req.body
//     const eventsDataNew = eventsData.push(data)
//     console.log(eventsDataNew)
//     res.status(200).json({eventsDataNew})
// })



// router.get("/display:eventDate", (req, res) => {
//     const eventDate = req.body
//     Event.findOne({eventDate: eventDate}, function (err, event) {
//         if (err) throw err;
//         if (!event) return res.send({response: "No event!"})
//         res.status(200).send({response: event})
//     })
// })