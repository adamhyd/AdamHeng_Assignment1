// DUMMY DATA FOR ROOMS
const rooms = [
    { roomID: '1', floor: '2', status: 'Available', pricePerNight: 250, description: 'Premium Twin Room', guestID: null },
    { roomID: '2', floor: '6', status: 'Occupied', pricePerNight: 112, description: 'Standard Single Room', guestID: '500' },
    { roomID: '3', floor: '5', status: 'Maintenance', pricePerNight: 212, description: 'Standard Twin Room', guestID: null },
    { roomID: '4', floor: '1', status: 'Available', pricePerNight: 900, description: 'Deluxe Suite with City View', guestID: null },
    { roomID: '5', floor: '3', status: 'Occupied', pricePerNight: 400, description: 'Deluxe Double Room', guestID: '501' },
]

const cleaners = [
    { cleanerID: '100'},
    { cleanerID: '101'},
    { cleanerID: '102'},
]

module.exports = {
    rooms,
    // Retrieves and returns details about a room. For example, the room id, floor, status, price, and description. 
    getRoomDetails(roomID) {
        const room = rooms.find(room => room.roomID === roomID);
        if (room) {
            console.log(`Retrieiving details of room ${roomID}`);
            return room;
        } else {
            return `Room ${roomID} not found`;
        }
    },
    // Assigns room cleaning service with the cleaner's ID and cleaning date for the cleaner.
    assignRoomCleaningService(roomID, cleanerID, cleaningDate) {
        const room = rooms.find(room => room.roomID === roomID);

        
    },
    // Books a room for a guest
    bookRoomForGuest(roomID, guestID) {
        const room = rooms.find(room => room.roomID === roomID);
        if (!room) {
            return 'Room is not found.';
        }
        if (room.status == 'Occupied') {
            return `Room ${roomID} is currently ${roomID.status}`;
        } else {
            return `Room ${roomID} has been succesfully booked for Guest ${guestID}.`;
        }

    },
    // Returns the total cost of a room based on the number of nights the guest is staying in the room for.
    calculateRoomCost(roomID, nights) {
        const room = rooms.find(room => room.roomID === roomID);

        
    },
    // Updates the status of a room for guests to know. 
    updateRoomStatus(roomID, status) {
        const room = rooms.find(room => room.roomID === roomID);

        
    },
    //
    checkRoomStatus(roomID) {
        const room = rooms.find(room => room.roomID === roomID);

    },
}