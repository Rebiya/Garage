const employeeService = require("../services/employee.service.js");

const createEmployee = async (req, res) => {
  try {
    const { employee_email } = req.body;

    // Debugging log
    // console.log(`🔍 Checking email: ${employee_email}`);

    // Check if employee exists
    const employeeExists = await employeeService.findEmployeeByEmail(
      employee_email
    );
    if (employeeExists) {
      return res.status(400).json({ message: "❌ Employee already exists" });
    }

    // Create employee
    const employee = await employeeService.createEmployee(req.body);
    if (!employee) {
      return res.status(400).json({ error: "❌ Failed to add the employee!" });
    }

    res.status(200).json({ status: "true" });
  } catch (error) {
    // console.error("❌ Error in createEmployee:", error.message);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

module.exports = { createEmployee };
