//call the functions here to the adamheng_hotelmanagement.js'
//similar to lab 2

const hotelManagement = require("./AdamHeng_hotelManagement.js");

console.log("Starting Hotel Management System!");

//Dummy data to test in the functions
const roomID = '201';
const guestID = '401';
const nights = 4;
const cleanerID = '101';    //This cleaner should be available
const cleaningDate =  '05-11-2024';

// This returns the details of the specified roomID.
// console.log(hotelManagement.getSpecificRoomDetails(roomID));

// Test Available / Busy cleaner on Rooms that already has scheduled cleaning services or without:
// console.log(hotelManagement.assignRoomCleaningService(roomID, cleanerID, cleaningDate));

