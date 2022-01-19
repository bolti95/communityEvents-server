const axios = require('axios');
const res = require('express/lib/response');
const mapsKey = process.env.MAPS_KEY

const GetLatLng = async (venue, streetAddress, city, region, postcode) => {
    strNew = streetAddress.replace(/\s/g, "+");
    venueNew = venue.replace(/\s/g, "+");
    cityNew = streetAddress.replace(/\s/g, "+");
    regionNew = region.replace(/\s/g, "+");
    console.log(strNew)
    try {
        console.log(strNew, regionNew)
        const {data} = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${venueNew},${cityNew},+${regionNew}&key=${mapsKey}`
        )
        return data
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = GetLatLng;