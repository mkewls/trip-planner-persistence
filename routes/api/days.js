const express = require('express');
const router = express();

const chalk = require('chalk');
const Hotel = require('../../models/hotel.js');
const Restaurant = require('../../models/restaurant.js');
const Activity = require('../../models/activity.js');
const Day = require('../../models/day.js');

// DAY Stuff

router.get('', function(req, res, next) {
  Day
    .findAll()
    .then(days => {
      res.json(days);
    })
    .catch(next);
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  Day.findOne({where: {number: id}})
    .then(day => {
      res.json(day);
    })
    .catch(next);
})

// Restaurant Stuff

router.post('/:id/restaurants', function(req, res, next) {
  var dayId = req.params.id;
  var restaurantId = req.body.id;
  Day.findOne({where: {number: dayId}})
    .then(day => {
      day.addRestaurant(restaurantId);
    })
    .catch(next);
})

router.delete('/:id/restaurants', function(req, res, next) {
  var dayId = req.params.id;
  var restaurantId = req.body.id;
  Day.findOne({where: {number: dayId}})
    .then(day => {
      day.removeRestaurant(restaurantId);
    })
    .catch(next);
})

router.post('/:id/hotels', function(req, res, next) {
  var dayId = req.params.id;
  var hotelId = req.body.id;
  Day.findOne({where: {number: dayId}})
    .then(day => {
      day.setDataValue('hotelId', hotelId);
    })
    .catch(next);
})

router.delete('/:id/hotels', function(req, res, next) {
  var dayId = req.params.id;
  var hotelId = req.body.id;
  Day.findOne({where: {number: dayId}})
    .then(day => {
      day.setDataValue('hotelId', null);
    })
    .catch(next);
})

router.post('/:id/activities', function(req, res, next) {
  var dayId = req.params.id;
  var activityId = req.body.id;
  Day.findOne({where: {number: dayId}})
    .then(day => {
      day.addActivity(activityId);
    })
    .catch(next);
})

router.delete('/:id/activities', function(req, res, next) {
  var dayId = req.params.id;
  var activityId = req.body.id;
  Day.findOne({where: {number: dayId}})
    .then(day => {
      day.removeActivity(activityId);
    })
    .catch(next);
})

router.post('/:id', function(req, res, next) {
  var id = req.params.id;
  Day.create({
    number: id
  })
  .then(day => {
    res.json(day);
  })
  .catch(next);
})

router.delete('/:id', function(req, res, next) {
  var id = req.params.id;
  Day.destroy({where: {number: id}})
  .then(something => {
    console.log("You've just destroyed a day!");
  })
  .catch(next);
})

module.exports = router;
