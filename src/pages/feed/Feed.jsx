import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Userbar from "../../components/userbar/Userbar";
import styles from "./feed.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {getPosts} from '../../features/posts/postSlice'
function Feed() {
  const  {posts}  = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  console.log(posts.posts);

  return (
    <div>
      <Navbar />
      <Userbar />
      <div className={styles.feed}>
        <div className={styles.postTweet}>
          <div>
            <img src="landing.jpg" alt="profile" />
            <input placeholder="whats happening.."></input>
          </div>
          <button>Sweet</button>
        </div>
        {posts.posts.posts.map((user) => (
          <Link to={`/profile/${user.user.username}`}> 
          <div className={styles.userTweets}>
            <div className={styles.userInfo}>
              <img src="landing.jpg" alt="userimage"></img>
              <div>
                <p>
                  {user.user.name}
                  {"@" + user.user.username}
                </p>
                <p>{user.content}</p>
                <i class="fa-solid fa-heart">{user.likes.length}</i>
              </div>
            </div>
          </div></Link>
        ))}
      </div>
    </div>
  );
}

export default Feed;
