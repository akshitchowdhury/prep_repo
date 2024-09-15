import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data); // Store fetched users in the state
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 object-cover rounded-full mx-auto"
            />
            <h2 className="text-xl font-semibold mt-4 text-center">{user.name}</h2>
            <p className="text-gray-700 text-center">{user.email}</p>
            <p className="text-gray-500 text-center">{user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
