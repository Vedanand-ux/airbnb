// controller/storeController.js
const Home = require('../models/home');


exports.getIndex = (req, res, next) => {
  const registeredHomes = Home.fetchAll(registeredHomes =>{
    res.render('store/index', { 
    registeredHomes: registeredHomes, 
    pageTitle: 'airbnb Home'
    });
  });
}

exports.getHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll(registeredHomes =>{
    res.render('store/home-list', { 
    registeredHomes: registeredHomes, 
    pageTitle: 'Homes List'
    });
  });
}

exports.getBookings = (req, res, next) => {
    res.render('store/bookings', {  
    pageTitle: 'My Bookings',
  });
}

exports.getFavouriteList = (req, res, next) => {
     const registeredHomes = Home.fetchAll(registeredHomes =>{
    res.render('store/favourite-list', { 
    registeredHomes: registeredHomes, 
    pageTitle: 'Favourite List'
    });
  });
}

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("At home details page ",homeId );
  res.render('store/home-detail', { 
    pageTitle: 'home detail'
    });
}