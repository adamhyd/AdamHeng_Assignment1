//call the functions here to the adamheng_hotelmanagement.js'
//similar to lab 2

// const rooms = [
//     { roomID: '200', floor: '2', status: 'Available', pricePerNight: 250, description: 'Premium Twin Room', guestID: null, isBooked: true, cleaningSchedule: {cleanerID : 100, cleaningDate: '01-07-2024'}}, //must have many data types and in the logic must use complex ways to use the different data types
//     { roomID: '201', floor: '6', status: 'Occupied', pricePerNight: 112, description: 'Standard Single Room', guestID: '500', isBooked: true, cleaningSchedule: null},
//     { roomID: '202', floor: '5', status: 'Maintenance', pricePerNight: 212, description: 'Standard Twin Room', guestID: null, isBooked: false , cleaningSchedule: {cleanerID: 100, cleaningDate: '03-07-2024'}}, //key: value pair with JSON object inside
//     { roomID: '203', floor: '1', status: 'Available', pricePerNight: 900, description: 'Deluxe Suite with City View', guestID: null, isBooked: false, cleaningSchedule: null},
//     { roomID: '204', floor: '3', status: 'Occupied', pricePerNight: 400, description: 'Deluxe Double Room', guestID: '501', isBooked: true, cleaningSchedule: null},
// ]

const hotelManagement = require("./AdamHeng_hotelManagement.js");

console.log("Starting Hotel Management System!");

//Dummy data to test in the functions
const roomID = '204';
const guestID = '401';
const nights = 4;
const cleanerID = '102';
const cleaningDate =  '05-11-2024';

// This returns the details of the specified roomID. [DONE]
// console.log(hotelManagement.getSpecificRoomDetails(roomID));

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