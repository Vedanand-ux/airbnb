// controller/homes.js
const Home = require('../models/home');


exports.getAddHome = (req, res, next) => {
  res.render('addHome', 
    {pageTitle: 'Add Home to airbnb',
    currentPage: 'addhome',
  });
};


exports.postAddHome = (req, res, next) => {
  const {houseName,price,location,rating,imageUrl} = req.body;

  const home = new Home(houseName,price,location,rating,imageUrl);

  home.save();

  res.render('homeAdded', {
    pageTitle: 'Home Added Successfully'
  });
};

exports.getHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll(registeredHomes =>{
    res.render('home', { 
    registeredHomes: registeredHomes, 
    pageTitle: 'airbnb Home'
  });
  });
  console.log(registeredHomes);
  
}