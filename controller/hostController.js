
const Home = require('../models/home');


exports.getAddHome = (req, res, next) => {
  res.render('host/add-home', 
    {pageTitle: 'Add Home to airbnb',
    currentPage: 'addhome',
  });
};

exports.getHostHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll(registeredHomes =>{
    res.render('host/host-home-list', { 
    registeredHomes: registeredHomes, 
    pageTitle: 'Host Homes List'
    });
  });
}

exports.postAddHome = (req, res, next) => {
  const {houseName,price,location,rating,imageUrl} = req.body;

  const home = new Home(houseName,price,location,rating,imageUrl);

  home.save();

  res.render('host/home-added', {
    pageTitle: 'Home Added Successfully'
  });
};
