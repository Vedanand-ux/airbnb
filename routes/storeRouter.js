//storeRouter
// External Module
const express = require('express');
const storeRouter = express.Router();

// Local Module
const storeController = require("../controller/storeController");

storeRouter.get("/", storeController.getIndex);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/homes", storeController.getHomes);
storeRouter.get("/favourites", storeController.getFavouriteList);
storeRouter.get("/homes/:homeId", storeController.getHomeDetails);

storeRouter.post("/favourites", storeController.postAddToFaavouirte);

storeRouter.post("/favourites/delete/:homeId", storeController.postRomoveFromFaavouirte);

module.exports = storeRouter;