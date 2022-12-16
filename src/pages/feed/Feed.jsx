import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Userbar from "../../components/userbar/Userbar";
import styles from "./feed.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {getPosts} from '../../features/posts/postSlice'
import LikeButton from "../../components/likebutton/LikeButton";
import AddTweet from "../../components/addTweet/AddTweet";
function Feed() {
  const  {posts ,status}  = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  

  return (
    <div>
      <Navbar />
      <Userbar />
      {(status==="fulfilled")&&(
      <div className={styles.feed}>
        <AddTweet />
        {posts.posts.map((post) => (
           
          <div className={styles.userTweets}>
            <div className={styles.userInfo}>
              <img src="landing.jpg" alt="userimage"></img>
              <Link to={`/profile/${post.user.username}`}><div>
                <p>
                  {post.user.name}
                  {"@" + post.user.username}
                </p>
                <p>{post.content}</p>
               <div><LikeButton post={post}/>{post.likes.length}</div> 
              </div></Link>
              
            </div>
          </div>
        ))}
      </div>)}
    </div>
  );
}

export default Feed;
