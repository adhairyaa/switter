import React from "react";
import styles from "./navbar.module.css";
function Navbar() {
  return (
    
      <div className={styles.navbar}>
        <i class="fa-sharp fa-solid fa-cookie"></i>
        <div className={styles.navbar_items}>Home</div>
        <div className={styles.navbar_items}>Explore</div>
        <div className={styles.navbar_items}>Notifications</div>
        <div className={styles.navbar_items}>Profile</div>
        <div className={styles.userData}>
        <p>guest</p>
        <p>username</p>
        
      </div>
      </div>
      
    
  );
}

export default Navbar;
