//controller/ hostController
const Home = require('../models/home');


exports.getAddHome = (req, res, next) => {
  res.render('host/edit-home', 
    {pageTitle: 'Add Home to airbnb',
    currentPage: 'addhome',
    editing: false,
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId; 
  const editing = req.query.editing === 'true';
  

  Home.findById(homeId,home=>{
    if(!home){
      console.log("home not found for editing");
      return res.redirect("/host/host-home-list");
    }
    console.log(homeId,editing,home);
    res.render('host/edit-home', 
      { home: home,
        pageTitle: 'Edit your Home',
      currentPage: 'Host-homes',
      editing: editing,
    });
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

  res.redirect('/host/host-home-list');
};

exports.postEditHome = (req, res, next) => {
  const {id,houseName,price,location,rating,imageUrl} = req.body;

  const home = new Home(houseName,price,location,rating,imageUrl);

  home.id=id;
  home.save();

  res.redirect('/host/host-home-list');
};
