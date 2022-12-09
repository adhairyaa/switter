import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Userbar from '../../components/userbar/Userbar'
import styles from './profile.module.css'
function Profile() {
  return  (
    <div className={styles.profile}>
       <Navbar/>
       <Userbar/>
        <div className={styles.userProfile}>

        </div>
        <div className={styles.userPosts}>

        </div>
    </div>
  )
}

export default Profile