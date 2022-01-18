require('dotenv').config();
const Event = require("../models/Events");

exports.event_create = async (req, res) => {
    const { 
        firstName, 
        lastName, 
        contactEmail, 
        eventTitle, 
        eventDescription,
        eventDate,
        eventTime
    } = req.body
    console.log(req.body)
    console.log(firstName,lastName,contactEmail,eventTitle,eventDescription,eventDate,eventTime)
    const event = new Event ({
        firstName: firstName,
        lastName: lastName,
        contactEmail: contactEmail,
        eventTitle: eventTitle,
        eventDescription: eventDescription,
        eventDate: eventDate,
        eventTime: eventTime
    });
    event.save();
    res.status(200).send({event})
}