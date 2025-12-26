// model/home.js

const path = require('path');
const fs = require('fs');
const rootDir = require('../utils/pathUtil');

const registeredHomes =[];

module.exports = class Home{
  constructor(houseName,price,location,rating,imageUrl){
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.imageUrl = imageUrl;
  }


  save(){
    Home.fetchAll(registeredHomes => {
    registeredHomes.push(this);
    const homeDataPath = path.join(rootDir,'data','homes.json');
    fs.writeFile(homeDataPath,JSON.stringify(registeredHomes),(error) =>{
    console.log("file writing concluded",error);
    });
    })
    
  }

  static fetchAll(callback){
  const homeDataPath = path.join(rootDir,'data','homes.json');

  fs.readFile(homeDataPath,(err,data) =>{
      if(!err){
        callback(JSON.parse(data));
      }else{
        callback ([]);
      }
    });
  }

} 