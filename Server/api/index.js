var express = require('express');
var router = express.Router();
var hotel = require('./controller');


router.get('/show-hotels' , hotel.SearchAll);

router.post('/hotel-booking' , hotel.HotelBooking);

router.get('/get-booking' , hotel.GetBooking);




module.exports = router;