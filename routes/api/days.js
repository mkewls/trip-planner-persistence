const express = require('express');
const router = express();

const chalk = require('chalk');
const Hotel = require('../../models/hotel.js');
const Restaurant = require('../../models/restaurant.js');
const Activity = require('../../models/activity.js');
const Day = require('../../models/day.js');

router.get('', function (req, res, next) {
  Day
    .findAll()
    .then(days => {
      res.json(days);
    });
});

module.exports = router;
