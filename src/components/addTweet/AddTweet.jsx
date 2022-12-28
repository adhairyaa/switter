import { useState } from "react";
import styles from "./addTweet.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../features/posts/postSlice";
function AddTweet() {
  const [postInput, setPostInput] = useState("");
  const dispatch = useDispatch();
  const { loginedUser } = useSelector((state) => state.auth);
  return (
    <div className={styles.postTweet}>
      <div>
        <img src="landing.jpg" alt="profile" />
        <input
          placeholder="whats happening.."
          onChange={(e) => setPostInput(e.target.value)}
          value={postInput}
          id="postInput"
        ></input>
      </div>
      <button
        onClick={() => {
          setPostInput("");
          dispatch(addPost({ userId: loginedUser._id, postData: postInput }));
        }}
      >
        Sweet
      </button>
    </div>
  );
}

export default AddTweet;
