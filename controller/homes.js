// controller/homes.js
const registeredHomes = [];

exports.getAddHome = (req, res, next) => {
  res.render('addHome', 
    {pageTitle: 'Add Home to airbnb',
    currentPage: 'addhome',
  });
};


exports.postAddHome = (req, res, next) => {
  registeredHomes.push({houseName: req.body.houseName, price: req.body.price, rating: req.body.rating , location: req.body.location});
  res.render('homeAdded', {pageTitle: 'Home Added Successfully'});
}

exports.getHomes = (req, res, next) => {
  console.log(registeredHomes);
  res.render('home', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home'});
}



