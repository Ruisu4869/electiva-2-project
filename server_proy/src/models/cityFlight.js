const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cityFlight = new Schema({
    type: String,
    subType: String,
    name: String,
    detailedName: String,
    id: String,
    timeZoneOffset: String,
    iataCode: String,
    geoCode: {
        type: Object,
        latitude: Number,
        longitude: Number
    },
    address: {
        type: Object,
        cityName: String,
        cityCode: String,
        countryName: String,
        countryCode: String,
        regionCode: String
    }
});

module.exports = mongoose.model(
    "AirportCities",
    cityFlight
);