const mongoose = require('mongoose');
const room = require ("../models/hotelRoom.js");

let db = {
    //Will implement all database-related functions in this JSON object.
    async connect() {
        try {
            //must use ASYNC function if want to use AWAIT
            await mongoose.connect('mongodb://127.0.0.1:27017/hotelManagementDB');
            return "Connected to Mongo DB";
        }

        catch(e) {
            console.log(e.message);
            throw new Error("Error connecting to Mongo DB"); //.then .catch
        }
    },
}