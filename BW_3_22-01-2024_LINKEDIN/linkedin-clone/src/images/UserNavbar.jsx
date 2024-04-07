import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserNavbar = (props) => {
  const profile = useSelector((state) => state.profile);

  return (
    <Link to={"/profile"} className="text-decoration-none">
      <div className="d-flex flex-column  align-items-center  bord user ">
        <img
          className="rounded-circle shadow-4-strong resized-avatar"
          alt="avatar2"
          src={"https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"}
        />
        <p className="mercado-match fs-12 ">Tu</p>
      </div>
    </Link>
  );
};

export default UserNavbar;
