const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    roomID: {type: String, unique: true}, //add unique to make sure no dupe records
    roomFloor : Number,
    roomStatus: {
        availability: String
    }, //must use "available", "occupied", "maintenance", "cleaning"
    roomPrice: Number,
    description: String,
    start: {
        date: String,
        time: String
    },
    end: {
        date: String,
        time: String
    }
});

module.exports = mongoose.model('rooms',eventSchema);