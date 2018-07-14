var models = require("../models");
var requestHelper = require("../helper/request");
var bodyParser = require('body-parser');

exports.SearchAll = (req, res) => {
    models.hotels.findAll().then(function (hotels) {
        res.json(hotels);
    });
};

exports.HotelBooking = (req, res) => {
    postBody = requestHelper.parseBody(req.body);

    models.bookHotels.create({
        nic_id: postBody.nic_id,
        hotel_id: postBody.hotel_id,
        book_from: postBody.book_from,
        book_to: postBody.book_to
    }).then(function (booking) {
        res.json(booking);
    });
};

exports.GetBooking = (req, res) => {
    models.bookHotels.findAll({include: [{model: models.NICs}, {model: models.hotels} ]}).then(function (hotels) {
        res.json(hotels);
    });
};
