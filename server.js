const express = require('express');
const calculator = require("./AdamHeng_hotelManagement.js");
const routes = require('./routes.js');
const app = express();
const port = 3000;

app.use('/', routes);

app.listen(port, function() {
    console.log('Server started on port ' + port);
    console.log('Hotel Management System is now available for using!');
});