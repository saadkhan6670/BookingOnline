var models = require("../models");
var requestHelper = require("../helper/request");
var bodyParser = require('body-parser');

exports.SearchAll = (req, res) => {
    models.hotels.findAll().then(function (hotels) {
        res.json(hotels);
    });
};

exports.HotelBooking = (req, res) => {

    models.bookHotels.create({
        nic_id: req.body.nic_id,
        hotel_id: req.body.hotel_id,
        book_from: req.body.book_from,
        book_to: req.body.book_to
    }).then(function (booking) {
        res.json(booking);
    });
};

exports.GetBooking = (req, res) => {
    models.bookHotels.findAll({include: [{model: models.NICs}, {model: models.hotels} ]}).then(function (hotels) {
        res.json(hotels);
    });
};

exports.SpecificHotels = (req, res) => {

    models.hotels.findAll({
        where:{
            country: req.body.country
        }
    }).then(function (hotels) {
        res.json(hotels);
    });
};


