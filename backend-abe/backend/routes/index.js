//import express module and call the router method to create a router
const express = require("express");
const router = express.Router();
//import the install router
const installRouter = require("./install.routes");
//use the router to handle requests
router.use(installRouter);
//export the router
module.exports = router;
