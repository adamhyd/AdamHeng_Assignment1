// DUMMY DATA FOR ROOMS
const rooms = [
    { roomID: '200', floor: '2', status: 'Available', pricePerNight: 250, description: 'Premium Twin Room', guestID: null, isBooked: true, cleaningSchedule: {cleanerID : 100, cleaningDate: '01-07-2024'}}, //must have many data types and in the logic must use complex ways to use the different data types
    { roomID: '201', floor: '6', status: 'Occupied', pricePerNight: 112, description: 'Standard Single Room', guestID: '500', isBooked: true, cleaningSchedule: null},
    { roomID: '202', floor: '5', status: 'Under Maintenance', pricePerNight: 212, description: 'Standard Twin Room', guestID: null, isBooked: false , cleaningSchedule: {cleanerID: 100, cleaningDate: '03-07-2024'}}, //key: value pair with JSON object inside
    { roomID: '203', floor: '1', status: 'Available', pricePerNight: 900, description: 'Deluxe Suite with City View', guestID: null, isBooked: false, cleaningSchedule: null},
    { roomID: '204', floor: '3', status: 'Occupied', pricePerNight: 400, description: 'Deluxe Double Room', guestID: '501', isBooked: true, cleaningSchedule: null},
]

//DUMMY DATA FOR CLEANERS
const cleaners = [
    { cleanerID: '100', status: 'Busy'},
    { cleanerID: '101', status: 'Available'},
    { cleanerID: '102', status: 'Available'},
]

module.exports = {
    rooms,
    // 1. This function retrieveAllAvailableRooms() shows all the rooms that are currently available for guests to book.
    retrieveAllAvailableRooms() {
        const availableRooms =[];

        rooms.forEach(room => {
            if (room.status === 'Available' && room.guestID === null && room.isBooked === false) {
                availableRooms.push(room);
            }
        });

        if (availableRooms.length > 0) {
            let phrase = 'The rooms available for guests to book are: \n'; //Use 'let' as its reassignable in a loop
            availableRooms.forEach(room => {
                //Append the found rooms to the phrase so phrase wouldnt repeat
                phrase += `Room: ${room.roomID}, Description: ${room.description}, Floor: ${room.floor}, Price Per Night: $${room.pricePerNight} \n`;
            })
            return phrase;
        } else {
            return 'There are no rooms available for guests to book right now as all the rooms are currently unavailable.';
        }
    },
    // 2. This assignRoomCleaningService() function assigns room cleaning service for selected room and will return with the selected roomID, cleanerID and cleaningDate.
    // It will also parse the updated information into the 
    assignRoomCleaningService(roomID, cleanerID, cleaningDate) {
        const room = rooms.find(room => room.roomID === roomID);
        const cleaner = cleaners.find(cleaners => cleaners.cleanerID === cleanerID);


        if (!room) {
            return `Room ${roomID} could not be found because it does not exist.`;
        }

        if (!cleaner) {
            return `Cleaner ${cleanerID} could not be found because it does not exist.`;
        }

        if (cleaner.status === 'Busy') {
            return `Cleaner ${cleanerID} is currently ${cleaner.status} and cannot be assigned to cleaning duty.`
        } 

        //If room already has a scheduled cleaning service
        if (room.cleaningSchedule !== null) {
            return `Room ${roomID} already has a cleaning service scheduled, and therefore cannot assign Cleaner ${cleanerID} to Room ${roomID}.`
        }

        //If room does not have assigned cleaning service
        room.cleaningSchedule = {cleanerID, cleaningDate};
        console.log(`Cleaner ${cleanerID} has been assigned to clean Room ${roomID} on ${cleaningDate}.`);
        console.log(`Updated Room ${roomID}\'s details:`);
        return room;  //Shows updated table in the console.
    },
    // 3. This updateRoomStatus() function updates the status of a room and then displays the updated details of the room.
    updateRoomStatus(roomID, status) {
        const room = rooms.find(room => room.roomID === roomID);

        if (!room) {
            return `Room ${roomID} could not be found because it does not exist.`;
        }

        if (room.status === status) {
            return `Room ${roomID} already has the status of "${room.status}", and therefore could not be updated.`;
        }

        room.status = status;
        return `Room ${roomID}\'s status has been updated to "${status}". \nUpdated Room ${roomID}\'s Details:\n${JSON.stringify(room, null, 2)}` ;
    },
    // 4. This bookRoomForGuest() function books a room for a guest under the conditions that the room is not occupied or under maintenance.
    bookRoomForGuest(roomID, guestID) {
        const room = rooms.find(room => room.roomID === roomID);

        if (!room) {
            return `Sorry, Room ${roomID} could not be found because it does not exist.`;
        }

        if (room.status == 'Occupied' || room.status == 'Under Maintenance') {
            return `Sorry, the room status for Room ${roomID} is currently "${room.status}", and it cannot be booked.`;
        } else if (room.isBooked === true){
            return `Sorry, the Room ${roomID} that you are looking for is currently booked.`
        } else {
            return `Success! The Room ${roomID}, ${room.description}, has been successfully booked for Guest ${guestID}.`;
        }
    },
    // 5. This calculateRoomCost() function returns the total cost of a room based on the number of nights the guest is staying in the room for.
    calculateRoomCost(roomID, nights) {
        const room = rooms.find(room => room.roomID === roomID);

        if (!room) {
            return `Room ${roomID} not found.`;
        }

        const totalRoomCost = room.pricePerNight * nights;
        return `The total cost of Room ${roomID} for ${nights} nights will be \$${totalRoomCost}.`;
        
    },
    // 6. This checkRoomStatus() function returns the status of the specified room.
    checkRoomStatus(roomID) {
        const room = rooms.find(room => room.roomID === roomID);

        if (!room) {
            return `Room ${roomID} is not found.`;
        }

        return `Room ${roomID}\'s status is currently "${room.status}".`;
    },
    // 7. This getSpecificRoomDetails() function retieves and returns details about a specific room. (e.g. the room id, floor, status, price, and description.) 
    getSpecificRoomDetails(roomID) {
        const room = rooms.find(room => room.roomID === roomID);
        if (room) {
            console.log(`Here are the details of Room ${roomID}:`);
            return room;
        } else {
            return `Room ${roomID} could not be found because it does not exist.`;
        }
    },
}