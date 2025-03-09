import React from "react";
import "../styles/Login.css";
import logo from "../assets/logo-monkey5.png";
import 'src/react-refresh-runtime.js';

function Login() {
  return (
    <div className="login-page">
      <div className="login-header">
        <img src={logo} alt="MONKEY5" className="login-logo" />
        <h2>Choose Your Role</h2>
      </div>

      <div className="role-container">
        <div className="role-card">
          <h3>Staff</h3>
          <p>Log in as staff</p>
          <button>Login</button>
        </div>

        <div className="role-card">
          <h3>Admin</h3>
          <p>Log in as admin</p>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
