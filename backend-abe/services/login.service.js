// Import db config
const db = require("../config/db.config.js");
const bcrypt = require("bcrypt");
const employeeService = require("./employee.service");

const login = async (userData) => {
  try {
    const userExists = await employeeService.getEmployeeByEmail(
      userData.employee_email
    );

    // Fix: Ensure `userExists` is an object, not true/false
    if (!userExists) {
      return {
        status: "fail",
        message: "User does not exist",
      };
    }

    const passwordMatch = await bcrypt.compare(
      userData.employee_password,
      userExists[0].employee_password_hashed
    );

    if (!passwordMatch) {
      return {
        status: "fail",
        message: "Incorrect password",
      };
    }

    return {
      status: "success",
      data: userExists, // Return user data correctly
    };
  } catch (error) {
    // console.error("Error during login:", error);
    return {
      status: "fail",
      message: "Database operation failed while logging in.",
    };
  }
};

module.exports = { login };
