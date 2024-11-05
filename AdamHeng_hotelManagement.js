// DUMMY DATA FOR ROOMS
const rooms = [
    { roomID: '1', floor: '2', status: 'Available', pricePerNight: 250, description: 'Premium Twin Room', guestID: null },
    { roomID: '2', floor: '6', status: 'Occupied', pricePerNight: 112, description: 'Standard Single Room', guestID: '500' },
    { roomID: '3', floor: '5', status: 'Maintenance', pricePerNight: 212, description: 'Standard Twin Room', guestID: null },
    { roomID: '4', floor: '1', status: 'Available', pricePerNight: 900, description: 'Deluxe Suite with City View', guestID: null },
    { roomID: '5', floor: '3', status: 'Occupied', pricePerNight: 400, description: 'Deluxe Double Room', guestID: '501' },
]

const cleaners = [
    { cleanerID: '100', status: 'Busy'},
    { cleanerID: '101', status: 'Available'},
    { cleanerID: '102', status: 'Available'},
]

module.exports = {
    rooms,
    // This getRoomDetails() function retieves and returns details about a room. (e.g. the room id, floor, status, price, and description.) 
    getRoomDetails(roomID) {
        const room = rooms.find(room => room.roomID === roomID);
        if (room) {
            console.log(`Retrieiving details of room ${roomID}`);
            return room;
        } else {
            return `Room ${roomID} not found`;
        }
    },
    // This assignRoomCleaningService() function assigns room cleaning service with the cleaner's ID and cleaning date for the cleaner.
    assignRoomCleaningService(roomID, cleanerID, cleaningDate) {
        const room = rooms.find(room => room.roomID === roomID);
        const cleaner = cleaners.find(cleaner => cleaners.cleanerID === cleanerID);

        if (!room) {
            return `Room ${roomID} is not found.`;
        }

        
    },
    // This bookRoomForGuest() function books a room for a guest
    bookRoomForGuest(roomID, guestID) {
        const room = rooms.find(room => room.roomID === roomID);

        if (!room) {
            return `Room ${roomID} is not found.`;
        }

        if (room.status == 'Occupied') {
            return `Room ${roomID} is currently ${roomID.status}`;
        } else {
            return `Room ${roomID} has been succesfully booked for Guest ${guestID}.`;
        }

    },
    // This calculateRoomCost() function returns the total cost of a room based on the number of nights the guest is staying in the room for.
    calculateRoomCost(roomID, nights) {
        const room = rooms.find(room => room.roomID === roomID);

        if (!room) {
            return `Room ${roomID} not found.`;
        }

        const totalRoomCost = room.pricePerNight * nights;
        return `Total cost of Room ${roomID} for ${nights} nights is \$${totalRoomCost}`;
        
    },
    // This updateRoomStatus() function updates the status of a room.
    updateRoomStatus(roomID, status) {
        const room = rooms.find(room => room.roomID === roomID);

        if (!room) {
            return `Room ${roomID} is not found.`;
        }

        room.status = status;
        return `Room ${roomID} status has been updated to ${status}`;
    },
    // This checkRoomStatus() function returns the status of the specified room.
    checkRoomStatus(roomID) {
        const room = rooms.find(room => room.roomID === roomID);

        if (!room) {
            return `Room ${roomID} is not found.`;
        }

        return `Room ${roomID} status is ${roomID.status}`;
    },
}