import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div class="card" style={{ width: 18 + "rem" }}>
        <img src={user.picture} alt={user.name} />
        <div class="card-body">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
    )
  );
};

export default Profile;
