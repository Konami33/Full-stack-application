import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/users', { name, email })
      .then(() => history.push('/'))
      .catch(error => console.error("Error adding user: ", error));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-4">Add User</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-success">Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
