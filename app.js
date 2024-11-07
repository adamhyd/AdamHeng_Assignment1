//call the functions here to the adamheng_hotelmanagement.js'
//similar to lab 2

const hotelManagement = require("./AdamHeng_hotelManagement.js");

console.log("Starting Hotel Management System!");

//Dummy data to test in the functions
const roomID = '200';
const guestID = '401';
const nights = 4;
const cleanerID = '101';    //This cleaner should be available
const busyCleaner = '100';  //This cleaner should be busy
const cleaningDate =  '05-11-2024';

// This returns the details of the specified roomID.
// console.log(hotelManagement.getSpecificRoomDetails(roomID));

// Available cleaner:
// console.log(hotelManagement.assignRoomCleaningService(roomID, cleanerID, cleaningDate));
//Busy cleaner:
console.log(hotelManagement.assignRoomCleaningService(roomID, busyCleaner, cleaningDate));

