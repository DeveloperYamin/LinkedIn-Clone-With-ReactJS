import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/users/userSlice";
import "../styles/Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <section className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://media.istockphoto.com/photos/abstract-wave-picture-id1287065728?b=1&k=20&m=1287065728&s=170667a&w=0&h=d-AiO7_2elysdrypFIup7ZsvHwQ7dohK8kwv1o8swIs="
          alt=""
        />
        <Avatar src={user?.photoUrl} className="sidebar_avatar">{user.email[0].toUpperCase()}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>

        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2,448</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("ReactJS")}
        {recentItem("Programming")}
        {recentItem("Developer")}
        {recentItem("Design")}
      </div>
    </section>
  );
}

export default Sidebar;
