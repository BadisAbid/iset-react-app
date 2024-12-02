import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginRegister.css";

const LoginRegister = ({ role }) => {
  const [action, setAction] = useState("login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/signup`, {
        ...formData,
        role,
      });
      alert(response.data.message);
      if (response.data.success) setAction("login");
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/login`, {
        email: formData.email,
        password: formData.password,
        role,
      });
      const { token, message } = response.data;

      if (token) {
        localStorage.setItem("token", token); // Store token in localStorage
        alert(message);
        if (role === "student") navigate("/Student1");
        else if (role === "teacher") navigate("/Teacher1");
        else if (role === "admin") navigate("/Admin1");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className={`wrapper ${action === "register" ? "active" : ""}`}>
      {action === "login" && (
        <div className="form-box login">
          <form onSubmit={handleLogin}>
            <h1>{`${role.charAt(0).toUpperCase() + role.slice(1)} Login`}</h1>
            {error && <p className="error">{error}</p>}
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
              <FaEnvelope className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleChange}
              />
              <FaLock className="icon" />
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <a href="#" onClick={() => setAction("register")}>
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      )}

      {action === "register" && (
        <div className="form-box register">
          <form onSubmit={handleSignup}>
            <h1>{`Sign up as ${role.charAt(0).toUpperCase() + role.slice(1)}`}</h1>
            {error && <p className="error">{error}</p>}
            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                onChange={handleChange}
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
              <FaEnvelope className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleChange}
              />
              <FaLock className="icon" />
            </div>
            <button type="submit">Sign up</button>
            <div className="register-link">
              <p>
                Already have an account?{" "}
                <a href="#" onClick={() => setAction("login")}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginRegister;

