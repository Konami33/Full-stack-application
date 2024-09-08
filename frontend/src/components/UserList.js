import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users: ", error));
  }, []);

  return (
    <div>
      <h1 className="mb-4">User List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/update-user/${user.id}`} className="btn btn-primary btn-sm mr-2">Edit</Link>
                <Link to={`/delete-user/${user.id}`} className="btn btn-danger btn-sm">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add-user" className="btn btn-success">Add User</Link>
    </div>
  );
}

export default UserList;
