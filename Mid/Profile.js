import React, { useState } from "react";

const Profile = ({ goBack }) => {
  const [name, setName] = useState("Kadyr");

  const editName = (newName) => {
    setName(newName);
  };

  return (
    <div>
      <h1>Profile</h1>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => editName(e.target.value)}
        />
      </label>
      <button onClick={() => goBack()}>Back to Feed</button>
    </div>
  );
};

export default Profile;
