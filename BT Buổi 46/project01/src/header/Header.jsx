import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <span>DuyAn Authentic</span>
      </NavLink>
      <NavLink to="/cart">
        <i className="fa-solid fa-cart-shopping"></i>
      </NavLink>
    </header>
  );
}
