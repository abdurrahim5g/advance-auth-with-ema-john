import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../../images/Google.png";
import "./Register.css";
import { useAuthContex } from "../../contex/AuthContexProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { signUp, signInWithProvider } = useAuthContex();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password.length === 0) {
      setError("Password is empty");
    } else if (password.length < 6) {
      setError("Password should be 6 character or more long");
      return;
    } else if (password !== confirm) {
      setError("Your Password & Confirm Password dosen't match");
      return;
    } else {
      signUp(email, password)
        .then((result) => {
          setError();
          form.reset();
          navigate("/");
        })
        .catch((err) => setError(err.code));
      console.log(email, password, confirm);
    }
  };

  // sign in with provider / popup
  const googleProvider = new GoogleAuthProvider();
  const handleProviderSignIn = (provider) => {
    signInWithProvider(provider)
      .then((result) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err.code);
      });
  };

  return (
    <div className="login-register-component">
      <div className="form-content">
        <h3>Sign Up</h3>
        <form action="#" onSubmit={handleSubmit}>
          <div className="single-input-item">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="single-input-item">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="single-input-item">
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" name="confirm" id="confirm" />
          </div>

          <div className="error-message">
            {error && <p className="error-text">{error}</p>}
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
        </form>

        <div className="google-login">
          <button onClick={() => handleProviderSignIn(googleProvider)}>
            <img src={google} alt="Google Login" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
