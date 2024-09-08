import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  useEffect(() => {
    axios.get(`/users/${id}`)
      .then(response => {
        setName(response.data.name);
        setEmail(response.data.email);
      })
      .catch(error => console.error("Error fetching user: ", error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/users/${id}`, { name, email })
      .then(() => history.push('/'))
      .catch(error => console.error("Error updating user: ", error));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-4">Update User</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
