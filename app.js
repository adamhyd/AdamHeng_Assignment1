const hotelManagement = require("./AdamHeng_hotelManagement.js");

console.log("Hotel Management System Started Successfully");

//Dummy data to test in the functions
const roomID = '204';
const guestID = '401';
const nights = 4;
const cleanerID = '102';
const cleaningDate =  '05-11-2024';

// This returns the details of the specified roomID. [DONE]
console.log(hotelManagement.getSpecificRoomDetails(roomID));

// Test Available / Busy cleaner on Rooms that already has scheduled cleaning services or without: [DONE]
// console.log(hotelManagement.assignRoomCleaningService(roomID, cleanerID, cleaningDate));

// Test booking room for guests [DONE]
// console.log(hotelManagement.bookRoomForGuest(roomID, guestID));

// Test calculator for the hotel cost. [DONE]
// console.log(hotelManagement.calculateRoomCost(roomID, nights));

// Test update room status [DONE]
// console.log(hotelManagement.updateRoomStatus(roomID, 'Available'));

// Test check room status [DONE]
// console.log(hotelManagement.checkRoomStatus(roomID));

// Test find all the available rooms for guests to book [DONE]
// console.log(hotelManagement.retrieveAllAvailableRooms());