// model/home.js

const path = require('path');
const fs = require('fs');
const rootDir = require('../utils/pathUtil');

const homeDataPath = path.join(rootDir,'data','homes.json');

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

    if(this.id) {// edit case
      registeredHomes = registeredHomes.map(home => 
      home.id === this.id ? this : home);
    } else{// add case
      this.id = Math.random().toString();
      registeredHomes.push(this);
    }
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

  static findById(homeId , callback){
    this.fetchAll(home=>{
      const homeFound = home.find(home => home.id === homeId);
      callback(homeFound);
    })
  }

} 