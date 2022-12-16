
import { useSelector } from "react-redux";


function LikeButton({ post }) {

  const { loginedUser } = useSelector((state) => state.auth);
  return (
    <div
      style={{
        color: post.likes.includes(loginedUser._id) ? "#6d67e4" : "black",
      }}
    //   onClick={dispatch(likeButtonClicked({
    //    userId: loginedUser._id,
    //    postId:post._id
    //   }))} 
       >
      <i class="fa-solid fa-heart"></i>
    </div>
  );
}

export default LikeButton;
