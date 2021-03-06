require('dotenv').config();
const MongoClient = require('mongodb')
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
        venue: venue,
        city: city,
        postcode: postcode,
        lat: lat,
        lng: lng,
        eventDate: eventDate,
        eventTime: eventTime
    });
    event.save();
    res.status(200).send({event, lat, lng})
}


exports.event_display = async (req, res) => {
    const events = await Event.find()
    .then((data) => {
        console.log('Data to show:', data);
        const eventObjs = data
        res.status(200).send(JSON.stringify(eventObjs))
    })
    .catch((error) => {
        console.log(error)
    })    
}

exports.event_delete = async (req, res) => {
    const dateToday = new Date();
    const yesterday = new Date(dateToday)
    yesterday.setDate(yesterday.getDate() - 1)

    yesterdayFormat = yesterday.toISOString().substring(0, 10)
    Event.find({}, function(err, data){
        const eventTime = data.map((event, index) => {
            const dateToCheck = new Date (data[index].eventDate)
            const dateToCheckFormat = dateToCheck.toISOString().substring(0, 10)
            if (dateToCheckFormat === yesterdayFormat) {
                Event.deleteOne({"eventTitle": data[index].eventTitle})
                .then((response) => {
                    const message = " expired document deleted!"
                    res.status(200).send(message)               
                })
                .catch(err => res.status(401).send(err) )
                //  function(err, resp){
                //     if (err) res.status(401).send(err) 
                //     const message = " expired document deleted!"
                //     res.status(200).send(message)
                // })              
            }

        })
    })    
}