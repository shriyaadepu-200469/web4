import React, { useEffect, useState } from 'react';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/api/users`)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Users</h1>
      <ul className="list-disc pl-6">
        {users.map((user) => (
          <li key={user.id} className="mb-1">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
