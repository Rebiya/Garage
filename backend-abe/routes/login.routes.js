//import the express module
const express = require("express");
//call the router method from the express to create router
const router = express.Router();
//import the login controller
const loginController = require("../controllers/login.controller.js");
//create a route to handle the login request on post
router.post("/employee/login", loginController.login);
//export the router
module.exports = router;
