import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/profile/profile.action";
import Cookies from "js-cookie";

export default function Navbar() {
  const [val, setVal] = useState(false);
  const { user, loading, error } = useSelector((store) => store.profile);
  const dispatch = useDispatch();

  let token = Cookies.get("token");

  useEffect(() => {
    dispatch(getProfile(token))
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          src={user.avatar}
          alt="error"
          className={styles.img}
          onClick={() => setVal(!val)}
        />
        <div className={styles.menu} style={{ display: val ? "flex" : "none" }}>
          <Link>
            <button className={styles.btn}>My Store</button>
          </Link>
          <Link>
            <button className={styles.btn}>Profile</button>
          </Link>
          <Link>
            <button className={styles.btn}>Logout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
