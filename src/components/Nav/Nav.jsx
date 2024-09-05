// import React from "react";
import styles from "./Nav.module.scss";
import { FaHome, FaCalculator } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <FaHome />
        </li>
        <li>
          <FaCalculator />
        </li>
        <li>
          <FaHome />
        </li>
        <li>
          <FaCalculator />
        </li>
        <li>
          <FaHome />
        </li>
        <li>
          <FaCalculator />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
