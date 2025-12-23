// External Module
const express = require('express');
const userRouter = express.Router();

// Local Module
const homesController = require("../controller/homes");

userRouter.get("/", homesController.getHomes);

module.exports = userRouter;