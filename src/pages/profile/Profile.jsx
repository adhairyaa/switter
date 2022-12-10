import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Userbar from "../../components/userbar/Userbar";
import styles from "./profile.module.css";
import { getPosts } from "../../features/posts/postSlice";
import { getUsers } from "../../features/user/userSlice";
function Profile() {
  const userOnProfile = useParams();
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  
  
  if (status === "loading" || status === "idle") {
    return <div>loading</div>;
  } else {
    let currentUserOnProfile = posts.posts.filter(
      (post) => post.user.username===userOnProfile.username
    );
console.log(currentUserOnProfile)
console.log(userOnProfile)
// console.log(posts.posts[0].user.username)
    return (
      <div className={styles.profile}>
        <Navbar />
        <Userbar />

        <div className={styles.userProfile}>
          <img src="Landing.jpg" alt="profileImage"></img>
          <div className={styles.userName}>
            <p>dhairya</p>
            <p>@guest</p>
          </div>
          <p>hey i am dhairya</p>
          <div>
            <p>following</p>
            <p>followers</p>
          </div>
        </div>
        <div className={styles.userPosts}>
          {User.map((user) => (<div className={styles.userTweets}>
        <div className={styles.userInfo}>
          <img src="landing.jpg" alt='userimage'></img>
          <div>
          <p>{user.name}{"@"+ user.username}</p>
          <p>aa</p>
          <i class="fa-solid fa-heart"></i>
          </div>
        </div>

      </div>
      ))} 
        </div>
      </div>
    );
  }
}

export default Profile;
