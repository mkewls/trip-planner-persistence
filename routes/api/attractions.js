const express = require('express');
const router = express();

const chalk = require('chalk');
const Hotel = require('../../models/hotel.js');
const Restaurant = require('../../models/restaurant.js');
const Activity = require('../../models/activity.js');


router.get('/hotels', function (req, res, next) {
  Hotel
    .findAll()
    .then(hotels => {
      res.json(hotels);
    });
});

router.get('/restaurants', function (req, res, next) {
  Restaurant
    .findAll()
    .then(restaurants => {
      res.json(restaurants);
    })
});

router.get('/activities', function (req, res, next) {
  Activity
    .findAll()
    .then(activities => {
      res.json(activities);
    });
});

module.exports = router;
