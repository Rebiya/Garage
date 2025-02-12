

// AddEmployeeForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import employeeService from "../../../../services/employee.service";

function AddEmployeeForm() {
  const initialState = {
    employee_email: "",
    employee_first_name: "",
    employee_last_name: "",
    employee_phone: "",
    employee_password: "",
    active_employee: 1,
    company_role_id: 1,
    emailError: "",
    firstNameRequired: "",
    passwordError: "",
    serverError: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const errors = {};

    if (!formData.employee_first_name) {
      errors.firstNameRequired = "First name is required";
      valid = false;
    }
    if (!formData.employee_email) {
      errors.emailError = "Email is required";
      valid = false;
    } else {
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(formData.employee_email)) {
        errors.emailError = "Invalid email format";
        valid = false;
      }
    }
    if (!formData.employee_password || formData.employee_password.length < 6) {
      errors.passwordError = "Password must be at least 6 characters long";
      valid = false;
    }

    if (!valid) {
      setFormData({ ...formData, ...errors });
      return;
    }

 employeeService
   .createEmployee(formData)
   .then((data) => {
     if (data.error) {
       setFormData({ ...formData, serverError: data.error });
     } else {
       setSuccess(true);
       setFormData({ ...initialState });
       navigate("/");
     }
   })
   .catch((error) => {
     setFormData({
       ...formData,
       serverError: error.message || "An error occurred",
     });
   });

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
                    <div className="form-group col-md-12">
                      {formData.serverError && (
                        <div className="validation-error" role="alert">{formData.serverError}</div>
                      )}
                      <input
                        type="email"
                        name="employee_email"
                        value={formData.employee_email}
                        onChange={handleChange}
                        placeholder="Employee email"
                      />
                      {formData.emailError && (
                        <div className="validation-error" role="alert">{formData.emailError}</div>
                      )}
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_first_name"
                        value={formData.employee_first_name}
                        onChange={handleChange}
                        placeholder="Employee first name"
                      />
                      {formData.firstNameRequired && (
                        <div className="validation-error" role="alert">{formData.firstNameRequired}</div>
                      )}
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_last_name"
                        value={formData.employee_last_name}
                        onChange={handleChange}
                        placeholder="Employee last name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_phone"
                        value={formData.employee_phone}
                        onChange={handleChange}
                        placeholder="Employee phone (555-555-5555)"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <select
                        name="company_role_id"
                        value={formData.company_role_id}
                        onChange={handleChange}
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
                        value={formData.employee_password}
                        onChange={handleChange}
                        placeholder="Employee password"
                      />
                      {formData.passwordError && (
                        <div className="validation-error" role="alert">{formData.passwordError}</div>
                      )}
                    </div>
                    <div className="form-group col-md-12">
                      <button className="theme-btn btn-style-one" type="submit">
                        <span>Add employee</span>
                      </button>
                    </div>
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
