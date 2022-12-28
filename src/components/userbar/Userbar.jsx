import React, { useEffect } from "react";
import styles from "./userbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/user/userSlice";
import { Link } from "react-router-dom";
function Userbar() {
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.usersData);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className={styles.userbar}>
      cool people to follow
      {status === "fulfilled" &&
        user.users.map((user) => (
          <Link to={`/profile/${user.username}`}>
            <div className={styles.userbarUsers}>
              <img src={user.userImage} alt="profileImg"></img>
              <div>
                <p>{user.name}</p>
                <p>{"@" + user.username}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default Userbar;
