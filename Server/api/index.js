var express = require('express');
var router = express.Router();
var hotel = require('./controller');

//Hotels Routes
router.get('/show-hotels' , hotel.SearchAll);
router.post('/get-specific-hotels' , hotel.SpecificHotels);

//Booking Routes
router.post('/hotel-booking' , hotel.HotelBooking);
router.get('/get-booking' , hotel.GetBooking);

//Nic Routes
router.get('/get-booking' , hotel.GetBooking);







module.exports = router;