import React from "react";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div>Profile</div>
      <div className="bg-primary">
        <Outlet />
      </div>
    </>
  );
};

export default Profile;
