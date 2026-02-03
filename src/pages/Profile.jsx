import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    role: "",
    skills: ""
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Profile</h1>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="role" placeholder="Role" onChange={handleChange} />
      <input name="skills" placeholder="Skills" onChange={handleChange} />

      <hr />

      <p>Name: {profile.name}</p>
      <p>Role: {profile.role}</p>
      <p>Skills: {profile.skills}</p>

      <button>Logout</button>
    </div>
  );
};

export default Profile;
