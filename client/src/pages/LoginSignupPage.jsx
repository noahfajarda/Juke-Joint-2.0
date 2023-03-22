import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Auth from "../utils/auth";

import Signup from "../components/LoginSignupPage/Signup/Signup";

export default function LoginPage({ user }) {
  console.log(user);

  if (Auth.loggedIn()) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <div>test</div>
      <Signup />
    </div>
  );
}
