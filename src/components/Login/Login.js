import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../../images/Google.png";
import { useAuthContex } from "../../contex/AuthContexProvider";

const Login = () => {
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { signIn } = useAuthContex();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length === 0) {
      setError("Password is empty");
    } else if (password.length < 6) {
      setError("Password should be 6 character or more long");
      return;
    } else {
      signIn(email, password)
        .then((result) => {
          setError();
          form.reset();
          navigate("/");
        })
        .catch((err) => setError(err.code));
      console.log(email, password);
    }
  };

  return (
    <div className="login-register-component">
      <div className="form-content">
        <h3>Login</h3>
        <form action="#" onSubmit={handleSubmit}>
          <div className="single-input-item">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="single-input-item">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>

          <div className="error-message">
            {error && <p className="error-text">{error}</p>}
          </div>

          <div className="single-input-item">
            <input type="submit" name="submit" value={"Login"} />
          </div>

          <div className="notice">
            <small>
              New to Ema-john? <Link to="/register">Create New Account</Link>
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

export default Login;
