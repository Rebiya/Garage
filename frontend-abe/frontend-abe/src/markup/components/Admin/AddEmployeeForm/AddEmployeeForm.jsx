import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import employeeService from "../../../../services/employee.service";

function AddEmployeeForm() {
  // Form fields
  const [employee_email, setEmail] = useState("");
  const [employee_first_name, setFirstName] = useState("");
  const [employee_last_name, setLastName] = useState("");
  const [employee_phone, setPhoneNumber] = useState("");
  const [employee_password, setPassword] = useState("");
  const [active_employee, setActiveEmployee] = useState(1);
  const [company_role_id, setCompanyRoleId] = useState(1);

  // Error states
  const [emailError, setEmailError] = useState("");
  const [firstNameRequired, setFirstNameRequired] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  // Input handlers
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(""); // Clear error when user types
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setFirstNameRequired("");
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleRoleChange = (e) => {
    setCompanyRoleId(Number(e.target.value));
  };

  // Function to validate the form inputs
  const validateForm = () => {
    // Initialize a variable to track the validity of the form
    let isValid = true;

    // Check if the first name field is empty or contains only whitespace
    if (!employee_first_name.trim()) {
      setFirstNameRequired("First name is required");
      isValid = false;
    }

    // Check if the email field is empty or contains only whitespace
    if (!employee_email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else {
      // Define a regular expression for validating the email format
      const emailRegex = /^\S+@\S+\.\S+$/;
      // Check if the email matches the regular expression
      if (!emailRegex.test(employee_email)) {
        setEmailError("Invalid email format");
        isValid = false;
      }
    }

    // Check if the password field is empty or has fewer than 6 characters
    if (!employee_password || employee_password.length < 6) {
      // Set an error message for the password field
      setPasswordError("Password must be at least 6 characters long");
      // Mark the form as invalid
      isValid = false;
    }

    // Return the validity status of the form
    return isValid;
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const employeeData = {
      employee_email,
      employee_first_name,
      employee_last_name,
      employee_phone,
      employee_password,
      active_employee,
      company_role_id,
    };

    try {
      const response = await employeeService.createEmployee(employeeData);
      if (response.error) {
        setServerError(response.error);
      } else {
        setSuccess(true);
        resetForm();
        navigate("/");
      }
    } catch (error) {
      setServerError(error.message || "An error occurred");
    }
  };

  // Reset form fields
  const resetForm = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setPassword("");
    setActiveEmployee(1);
    setCompanyRoleId(1);

    // Clear errors
    setEmailError("");
    setFirstNameRequired("");
    setPasswordError("");
    setServerError("");
  };

  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Add a new employee</h2>
        </div>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    {serverError && (
                      <div className="validation-error" role="alert">
                        {serverError}
                      </div>
                    )}

                    <div className="form-group col-md-12">
                      <input
                        type="email"
                        name="employee_email"
                        value={employee_email}
                        onChange={handleEmailChange}
                        placeholder="Employee email"
                      />
                      {emailError && (
                        <div className="validation-error" role="alert">
                          {emailError}
                        </div>
                      )}
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_first_name"
                        value={employee_first_name}
                        onChange={handleFirstNameChange}
                        placeholder="Employee first name"
                      />
                      {firstNameRequired && (
                        <div className="validation-error" role="alert">
                          {firstNameRequired}
                        </div>
                      )}
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_last_name"
                        value={employee_last_name}
                        onChange={handleLastNameChange}
                        placeholder="Employee last name"
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_phone"
                        value={employee_phone}
                        onChange={handlePhoneChange}
                        placeholder="Employee phone (555-555-5555)"
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <select
                        name="company_role_id"
                        value={company_role_id}
                        onChange={handleRoleChange}
                        className="custom-select-box"
                      >
                        <option value="1">Employee</option>
                        <option value="2">Manager</option>
                        <option value="3">Admin</option>
                      </select>
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="password"
                        name="employee_password"
                        value={employee_password}
                        onChange={handlePasswordChange}
                        placeholder="Employee password"
                      />
                      {passwordError && (
                        <div className="validation-error" role="alert">
                          {passwordError}
                        </div>
                      )}
                    </div>

                    <div className="form-group col-md-12">
                      <button className="theme-btn btn-style-one" type="submit">
                        <span>Add employee</span>
                      </button>
                    </div>

                    {success && (
                      <div className="success-message" role="alert">
                        Employee added successfully!
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddEmployeeForm;
