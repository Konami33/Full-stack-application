import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteUser() {
  const { id } = useParams();
  const navigate = useNavigate();  // Replaced useHistory with useNavigate

  useEffect(() => {
    axios.delete(`/users/${id}`)
      .then(() => navigate('/'))  // Replaced history.push with navigate
      .catch(error => console.error("Error deleting user: ", error));
  }, [id, navigate]);  // Replaced history with navigate in the dependency array

  return <h1>Deleting User...</h1>;
}

export default DeleteUser;
