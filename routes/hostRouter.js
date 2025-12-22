//hostRouter.js
// Core Module
const path = require('path');

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  res.render('addHome', {pageTitle: 'Add Home to airbnb'});
})

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  //console.log(req.body.houseName,req.body.price,req.body.rating);
  registeredHomes.push({houseName: req.body.houseName, price: req.body.price, rating: req.body.rating});
  res.render('homeAdded', {pageTitle: 'Home Added Successfully'});
})

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;