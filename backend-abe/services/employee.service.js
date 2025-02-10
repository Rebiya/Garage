//import db config
const db = require("../config/db.config.js");
//import bcrypt to hash the password
const bcrypt = require("bcrypt");

//a function to check if the employee exists or not
const findEmployeeByEmail = async (email) => {
  try {
    //query to check if the employee exists or not
    const query = `SELECT * FROM employees WHERE employee_email = ?`;
    //check if the employee exists or not
    const rows = await db.query(query, [email]);
    console.log(rows);
    if (rows.length === 0) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.error("An error occurred while checking the employee's email");
    throw new Error(
      "We encountered an error while verifying your email. Please try again later."
    );
  }
};

//function to create a new employee
const createEmployee = async (employee) => {
  let createdEmployee = {};
  try {
    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    // Hash the password
    const hashedPassword = await bcrypt.hash(employee.employee_password, salt);
    // Insert the email in to the employee table
    const query =
      "INSERT INTO employee (employee_email, active_employee) VALUES (?, ?)";
    const rows = await db.query(query, [
      employee.employee_email,
      employee.active_employee,
    ]);
    console.log(rows);
    if (rows.affectedRows !== 1) {
      return false;
    }
    // Get the employee id from the insert
    const employee_id = rows.insertId;
    // Insert the remaining data in to the employee_info, employee_pass, and employee_role tables
    const query2 =
      "INSERT INTO employee_info (employee_id, employee_first_name, employee_last_name, employee_phone) VALUES (?, ?, ?, ?)";
    const rows2 = await db.query(query2, [
      employee_id,
      employee.employee_first_name,
      employee.employee_last_name,
      employee.employee_phone,
    ]);
    const query3 =
      "INSERT INTO employee_pass (employee_id, employee_password_hashed) VALUES (?, ?)";
    const rows3 = await db.query(query3, [employee_id, hashedPassword]);
    const query4 =
      "INSERT INTO employee_role (employee_id, company_role_id) VALUES (?, ?)";
    const rows4 = await db.query(query4, [
      employee_id,
      employee.company_role_id,
    ]);
    // construct to the employee object to return
    createdEmployee = {
      employee_id: employee_id,
    };
  } catch (err) {
    console.log(err);
  }
  // Return the employee object
  return createdEmployee;
};

//export the functions
module.exports = {
  findEmployeeByEmail,
  createEmployee,
};
