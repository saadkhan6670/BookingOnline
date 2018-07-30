var models = require("../models");
var requestHelper = require("../helper/request");
var bodyParser = require('body-parser');
var moment = require('moment');

// Hotels Api
exports.GetHotels = (req, res) => {
    models.hotels.findAll().then(function (hotels) {
        res.json(hotels);
    });
};


exports.SpecificHotels = (req, res) => {

    models.hotels.findAll({
        where: {
            city: req.body.location
        }
    }).then(function (hotels) {
        res.json(hotels);
    });

};

exports.GetPopularHotels = (req, res) => {

    models.hotels.findAll({
        where: {
            rating: 5
        }
    }).then(function (hotels) {
        res.json(hotels);
    });

};

// Booking Apis
exports.HotelBooking = (req, res) => {
    let book_from =  moment(req.body.book_from).format('L');
    let book_to =  moment(req.body.book_to).format('L');

    models.NICs.findOne({
        where: {
            nicNo: req.body.nic_id
        }
    }).then(function (nic) {
        if (nic) {
            models.bookHotels.create({
                nic_id: nic.id,
                hotel_id: req.body.hotel_id,
                book_from: book_from,
                book_to: book_to
            }).then(function (booking) {
                res.json(booking);
            });
        }
        else {
            res.send("invalid Nic")
        }
    })


};

exports.GetBooking = (req, res) => {
    models.bookHotels.findAll({ include: [{ model: models.NICs }, { model: models.hotels }] }).then(function (hotels) {
        res.json(hotels);
    });
};

exports.GetNic = (req, res) => {

}




