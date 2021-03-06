const {model, Schema, Types} = require('mongoose');

const event = Schema({
    firstName: {type: String},
    lastName: {type: String},
    contactEmail: {type: String},
    eventTitle: {type: String},
    eventDescription: {type: String},
    venue: {type: String},
    postcode: {type: String},
    city: {type: String},
    lat: {type: Number},
    lng: {type: Number},
    eventDate: {type: Date},
    eventTime: {type: String}
})

module.exports = model('event', event);