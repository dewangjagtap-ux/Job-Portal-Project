import { useState } from "react";

const Admin = () => {
  const [users, setUsers] = useState([]);

  const addUser = () => {
    setUsers([...users, { name: "New Student", role: "Student" }]);
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      <button onClick={addUser}>Add Dummy User</button>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
