import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
        Home
      </NavLink>
      <NavLink to="/posts" className={({ isActive }) => (isActive ? styles.active : "")}>
        Posts
      </NavLink>
    </nav>
  );
};

export default NavBar;
