//import employee service
const employeeService = require("../services/employee.service.js");
//define the controller function and use try catch block to handle exceptions
const createEmployee = async (req, res) => {
  const { employee_email } = req.body;
  //check if employee email exists or not
  const employeeExists = await employeeService.findEmployeeByEmail(
    employee_email
  );

  //If the employee exists, send a response to the client
  if (employeeExists) {
    return res.status(400).json({
      message: "Employee already exists",
    });
  } else {
    //create the employee and send response to the client
    try {
      const employee = await employeeService.createEmployee(req.body);
      if (!employee) {
        res.status(400).json({
          error: "Failed to add the employee!",
        });
      } else {
        res.status(200).json({
          status: "true",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: error.message,
      });
    }
  }
};
//export the controller functions
module.exports = {
  createEmployee,
};
