import React from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "./feed.module.css";

function Feed() {
  const User = [
    {
      name: "guest",
      username: "username",
      image:
        "https://pbs.twimg.com/profile_images/1361031716870000640/1ZQ9ZQ1a_400x400.jpg",
      posts: [{ content: "hello", isLiked: true }],
    },
    {
      name: "guest",
      username: "username",
      image:
        "https://pbs.twimg.com/profile_images/1361031716870000640/1ZQ9ZQ1a_400x400.jpg",
      posts: [{ content: "hello", isLiked: true }],
    },
    {
      name: "guest",
      username: "username",
      image:
        "https://pbs.twimg.com/profile_images/1361031716870000640/1ZQ9ZQ1a_400x400.jpg",
      posts: [{ content: "hello", isLiked: true }],
    },
  ];
  return (
    <div className={styles.feed}>
      <div className={styles.postTweet}>
        <div>
          <img
            src="landing.jpg"
            alt="profile"
          />
          <input placeholder="whats happening.."></input>
        </div>
        <button>Sweet</button>
      </div>
    </div>
  );
}

export default Feed;
