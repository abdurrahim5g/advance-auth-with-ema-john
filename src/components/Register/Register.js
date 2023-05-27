import React from "react";
import { Link } from "react-router-dom";
import google from "../../images/Google.png";
import "./Register.css";

const Register = () => {
  return (
    <div className="login-register-component">
      <div className="form-content">
        <h3>Sign Up</h3>
        <form action="#">
          <div className="single-input-item">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="single-input-item">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="single-input-item">
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" name="confirm" id="confirm" />
          </div>

          <div className="single-input-item">
            <input type="submit" name="submit" value={"Sign Up"} />
          </div>

          <div className="notice">
            <small>
              Already have an account? <Link to="/login">Login</Link>
            </small>
          </div>

          <div className="divider">
            <span className="line"></span>
            <span className="or">or</span>
            <span className="line"></span>
          </div>

          <div className="google-login">
            <button>
              <img src={google} alt="Google Login" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
