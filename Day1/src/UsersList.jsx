import { useEffect, useState } from 'react';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []); // Only run on mount

  return (
    <div>
      <h2>📋 User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} – {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
