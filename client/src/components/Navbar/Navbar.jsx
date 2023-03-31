import React from "react";
import styles from "./Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <p>Logo</p>
      </div>
      <div className={styles.bx_1}>
        <div className={styles.cartvalue}>
          <FaShoppingCart color="#24bed1" size={"30px"} />
        </div>
        <div className={styles.count}>
          <p>0</p>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/236/236832.png"
          alt="error"
          className={styles.img}
        />
      </div>
    </div>
  );
}
