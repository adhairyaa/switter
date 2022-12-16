import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Userbar from "../../components/userbar/Userbar";
import styles from "./profile.module.css";
import { getPosts } from "../../features/posts/postSlice";
import { getUsers } from "../../features/user/userSlice";
// import landing from "./landing.jpg";
function Profile() {
  const userOnProfile = useParams();
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.usersData);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPosts());
  }, [dispatch]);

  if (status === "loading" || status === "idle") {
    return (
      <div>
        <Navbar />
        <Userbar />
        loading...
      </div>
    );
  } else {
    let currentPosts = posts.posts.filter(
      (post) => post.user.username === userOnProfile.username
    );

    let currentUserOnProfile = user.users.filter(
      (user) => user.username === userOnProfile.username
    );
    console.log(currentPosts);
    console.log(currentUserOnProfile)

    return (
      <div className={styles.profile}>
        <Navbar />
        <Userbar />

        <div className={styles.userProfile}>
          <img src={currentUserOnProfile[0].userImage} alt="profileImage"></img>
          <div className={styles.userName}>
            <p>{currentUserOnProfile[0].name}</p>
            <p>@{currentUserOnProfile[0].username}</p>
          </div>
          <p>{currentUserOnProfile[0].bio}</p>
          <div>
            <p>followers{currentUserOnProfile[0].followers}</p>
            <p>following{currentUserOnProfile[0].following}</p>
          </div>
        </div>
        {currentPosts[0].content===null?<p>nothing to show here...</p>:(
        currentPosts.map((user) => (
          <div className={styles.userTweets}>
            <div className={styles.userInfo}>
              <img src={user.user.userImage} alt="userimage"></img>
              <div>
                <p>{"@" + user.user.username}</p>
                <p>{user.content}</p>
                <i class="fa-solid fa-heart"></i>
                {user.likes.length}
              </div>
            </div>
          </div>
        )))}
        
      </div>
    );
  }
}

export default Profile;
