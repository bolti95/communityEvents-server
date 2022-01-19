require('dotenv').config();
const Event = require("../models/Events");
const getLatLng = require("../api/GetLatLng");

exports.event_create = async (req, res) => {
    const { 
        firstName, 
        lastName, 
        contactEmail, 
        eventTitle, 
        eventDescription,
        venue,
        streetAddress,
        city,
        region,
        postcode,
        eventDate,
        eventTime
    } = req.body
    console.log(req.body)
    console.log(
        firstName,
        lastName,
        contactEmail,
        eventTitle,
        eventDescription,
        eventDate,
        eventTime,
        venue,
        streetAddress,
        city,
        region,
        postcode,
        )

    const data = await getLatLng(venue, streetAddress, city, region, postcode)

    const lat = await data.results[0].geometry.location.lat
    const lng = await data.results[0].geometry.location.lng
    console.log(data)
    const event = new Event ({
        firstName: firstName,
        lastName: lastName,
        contactEmail: contactEmail,
        eventTitle: eventTitle,
        eventDescription: eventDescription,
        lat: lat,
        lng: lng,
        eventDate: eventDate,
        eventTime: eventTime
    });
    event.save();
    res.status(200).send({event, lat, lng})
}