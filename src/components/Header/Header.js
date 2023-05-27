import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { useAuthContex } from "../../contex/AuthContexProvider";

const Header = () => {
  const { user, logOut } = useAuthContex();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err.code));
  };

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/orders">Orders</NavLink>
        <NavLink to="/inventory">Inventory</NavLink>
        <NavLink to="/about">About</NavLink>
        {user?.uid ? (
          <button onClick={handleLogOut} className="logout-btn">
            Log Out
          </button>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
