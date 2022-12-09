import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Userbar from "../../components/userbar/Userbar";
import styles from "./feed.module.css";
import {useSelector, useDispatch} from 'react-redux'
import {getUsers} from "../../features/user/userSlice"
function Feed() {
const User2 = useSelector((state) => state.user);
const dispatch = useDispatch();
useEffect(()=>{
  dispatch(getUsers())
},[])
  const User = [
    {
      name: "guest",
      username: "username",
      image:
        "https://pbs.twimg.com/profile_images/1361031716870000640/1ZQ9ZQ1a_400x400.jpg",
      posts: [{ content: "hello", isLiked: true }]
    },
    {
      name: "guest",
      username: "username",
      image:
        "https://pbs.twimg.com/profile_images/1361031716870000640/1ZQ9ZQ1a_400x400.jpg",
      posts: [{ content: "hello", isLiked: true }]
    },
    {
      name: "guest",
      username: "username",
      image:
        "https://pbs.twimg.com/profile_images/1361031716870000640/1ZQ9ZQ1a_400x400.jpg",
      posts: [{ "content": "helloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", isLiked: true },{ "content":"bello", isLiked: true }]
    },
  ];
  console.log(User2+"user from redux")
  return (
    <div><Navbar/>
      <Userbar/>
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
      {User.map((user) => (<div className={styles.userTweets}>
        <div className={styles.userInfo}>
          <img src="landing.jpg" alt='userimage'></img>
          <div>
          <p>{user.name}{"@"+ user.username}</p>
          <p>{user.posts.content}aa</p>
          <i class="fa-solid fa-heart"></i>
          </div>
        </div>

      </div> 
      ))}
    </div>
    </div>
  );
}

export default Feed;
