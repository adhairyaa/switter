import React from "react";

import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const { loginedUser } = useSelector((state) => state.auth);
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_items}>
        <i class="fa-sharp fa-solid fa-cookie"></i>
        <Link to="/feed">
          <div className={styles.navbar_items}>Home</div>
        </Link>
        <Link to="/feed">
          <div className={styles.navbar_items}>Explore</div>
        </Link>
        <Link to="/feed">
          <div className={styles.navbar_items}>Notifications</div>
        </Link>
        <Link to={`/profile/${loginedUser.username}`}>
          {" "}
          <div className={styles.navbar_items}>Profile</div>
        </Link>
      </div>
      <div className={styles.userData}>
        <img src={loginedUser.userImage} alt="profile" />
        <div>
          <p>{loginedUser.name}</p>
          <p>{loginedUser.username}</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
