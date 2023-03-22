// do stuff here
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../../utils/auth";
import { ADD_USER } from "../../../utils/mutations";

export default function Signup() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const [AddUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    checkAllFormFields();

    try {
      console.log(formState);
    } catch (e) {
      console.error("There was an error", e);
    }
  };

  const checkAllFormFields = () => {
    if (
      !formState.firstName ||
      !formState.lastName ||
      !formState.username ||
      !formState.email ||
      !formState.password
    ) {
      console.log("One Or More Fields Were Not Entered. Please Try Again.");
    }
  };

  return (
    <form action="#" className="sign-up-form" onSubmit={handleFormSubmit}>
      <h2 className="title">Sign Up</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formState.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formState.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formState.username}
          onChange={handleChange}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Password (1 cap, 1 low, 1 num)"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="number"
          placeholder="Budget"
          name="budget"
          value={formState.budget}
          onChange={handleChange}
        />
      </div>
      <input type="submit" className="btn" value="Sign up" />
      <div id="signup-error"></div>
    </form>
  );
}
