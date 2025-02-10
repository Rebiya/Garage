//import express module
const express = require('express');
//import employee controller
const employeeController = require('../controllers/employee.controller.js');
//create express router
const router = express.Router();
//define routes
// router.get('/', employeeController.getEmployees);
router.post('/employee', employeeController.createEmployee);
// router.get('/:id', employeeController.getEmployee); 
// router.put('/:id', employeeController.updateEmployee);
// router.delete('/:id', employeeController.deleteEmployee);
//export router
module.exports = router;