const request = require('request')
const ACCESS_TOKEN = "pk.eyJ1IjoidHR1bmEiLCJhIjoiY2twMXY1ZDd4MHR0dDJubnZzZWpuYmtsMyJ9.pX1WCfCrGrexjtjXrveXvA";


const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${ACCESS_TOKEN}&limit=1`
    request({ url, json: true }, (error, { body }) => {
        debugger;
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode