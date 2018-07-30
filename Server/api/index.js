var express = require('express');
var router = express.Router();
var hotel = require('./controller');

//Hotels Routes
router.get('/show-hotels' , hotel.GetHotels);
router.post('/get-specific-hotels' , hotel.SpecificHotels);
router.get('/get-popular-hotels' , hotel.GetPopularHotels);

//Booking Routes
router.post('/hotel-booking' , hotel.HotelBooking);
router.get('/get-booking' , hotel.GetBooking);

//Nic Routes
router.get('/get-nic' , hotel.GetNic);

module.exports = router;