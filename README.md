# Assignment 1
## Hotel Management System
This node module provides functionalities for managing a hotel's room availability, room cleaning schedules, bookings for guests, and billing for rooms based on number of nights.

## Assignment Overview
The ```AdamHeng_hotelManagement.js``` module has 7 functions to help hotel staff manage room statuses, retrieve room details, assign cleaners to a room, book rooms for guests, and calucalte room costs.

## Features
```
1. Retrieve All Available Rooms
2. Assign Cleaning Service To Rooms
3. Update Room Status
4. Book A Room For A Guest
5. Calculate Cost Of Room
6. Check A Room's Status
7. Get Details Of A Specific Room
```

## Setup
To use the hotel management module, import it into your application file as shown: 
```
const hotelManagement = require("./AdamHeng_hotelManagement.js");
```

## Functions
**1. retrieveAllAvailableRooms**
```
hotelManagement.retrieveAllAvailableRooms();

Description: Fetches all rooms that are available for guests to book.
```

**2. assignRoomCleaningService**
```
hotelManagement.assignRoomCleaningService(roomID, cleanerID, cleaningDate);

Description: Assigns a cleaner to a specific room by roomID and cleanerID.
```

**3. updateRoomStatus**
```
hotelManagement.updateRoomStatus(roomID, 'Available');

Description: Updates room status.
```

**4. bookRoomForGuest**
```
hotelManagement.bookRoomForGuest(roomID, guestID);

Description: Books a room for a guest.
```

**5. calculateRoomCost**
```
hotelManagement.calculateRoomCost(roomID, nights);

Description: Calculates total cost for a guest based on the room price and the number of nights.
```

**6. checkRoomStatus**
```
hotelManagement.checkRoomStatus(roomID);

Description: Retrieves the current status of a specific room.
```

**7. getSpecificRoomDetails**
```
hotelManagement.getSpecificRoomDetails(roomID);

Description: Retrieves details of a specific room.
```

## References
Using let - https://www.w3schools.com/js/js_let.asp

Using find - https://www.w3schools.com/jsref/jsref_find.asp