import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <>
        <h1 className="text-center">Please Login</h1>
      </>
    );
  }
  return (
    <>
      <h1 className="text-center">Welcome {user.username}</h1>
    </>
  );
}

export default Profile;
