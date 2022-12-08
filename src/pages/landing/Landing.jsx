import React from 'react'
import styles from "./landing.module.css"
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className={styles.landing}>
        <img src="landing.jpg" alt="landing" className={styles.landingImg} />
        <div className={styles.landing_text}>
            <Link to="/Feed"><p style={{color:"#6D67E4"}} className={styles.landing_name}>Switter</p></Link>
            <p className={styles.landing_title}>Your next social Life.</p>

        <div className={styles.landing_button}>
        <button>Log In</button>
        <button>Sign Up</button>
        </div>
        </div>



    </div>
  )
}

export default Landing