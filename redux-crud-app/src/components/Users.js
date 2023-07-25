
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, createUser, updateUser, deleteUser } from '../actions/userActions';

const Users = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleCreateUser = () => {
    const newUserData = {
      name: 'New User',
      email: 'newuser@example.com',
    };
    dispatch(createUser(newUserData));
  };

  const handleUpdateUser = (userId) => {
    const updatedUserData = {
      name: 'Updated User',
      email: 'updateduser@example.com',
    };
    dispatch(updateUser(userId, updatedUserData));
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Users</h2>
      <button onClick={handleCreateUser}>Create New User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>
            <p>{user.email}</p>
            <button onClick={() => handleUpdateUser(user.id)}>Update</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
