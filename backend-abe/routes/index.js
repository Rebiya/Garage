//import express module and call the router method to create a router
const express = require("express");
const router = express.Router();
//import the install router
const installRouter = require("./install.routes");
//import the employee router
const employeeRouter = require("./employee.routes");
//import the login router
const loginRouter = require("./login.routes.js");
//use the router to handle requests
router.use(installRouter);
router.use(employeeRouter);
router.use(loginRouter);
//export the router
module.exports = router;
