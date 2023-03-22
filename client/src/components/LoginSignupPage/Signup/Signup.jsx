import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../../utils/auth";
import { ADD_USER } from "../../../utils/mutations";

// css
import "./Signup.css";

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

      const { data } = await AddUser({
        variables: formState,
      });
      console.log(data);
    } catch (e) {
      console.error("There was an error", e);
      showError("There Was An Error Signing Up. Please Try Again.");
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
      showError("One Or More Fields Were Not Entered. Please Try Again.");
    }
  };

  const showError = (text) => {
    const errorEl = document.querySelector("#signup-error");
    errorEl.textContent = text;
    let secondsLeft = 2;
    let timerInterval = setInterval(function () {
      secondsLeft--;
      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        errorEl.textContent = "";
      }
    }, 1000);
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
          placeholder="Username (Unique)"
          name="username"
          value={formState.username}
          onChange={handleChange}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input
          type="email"
          placeholder="Email (Unique)"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Password (1 up, 1 low, 1 num, 8-25 char)"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
      </div>
      <input type="submit" className="btn" value="Sign up" />
      <div id="signup-error"></div>
    </form>
  );
}
