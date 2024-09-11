// import React from "react";
import styles from "./Nav.module.scss";
import { FaHome, FaCalculator } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="">
            <FaHome />
          </a>
          <span>Home</span>
        </li>
        <li>
          <a href="">
            <FaCalculator />
          </a>
          <span>Home</span>
        </li>
        <li>
          <a href="">
            <FaHome />
          </a>
          <span>Home</span>
        </li>
        <li>
          <a href="">
            <FaCalculator />
          </a>
          <span>Home</span>
        </li>
        <li>
          <a href="">
            <FaHome />
          </a>
          <span>Home</span>
        </li>
        <li>
          <a href="">
            <FaCalculator />
          </a>
          <span>Portfolio</span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
