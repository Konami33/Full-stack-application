import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function DeleteUser() {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios.delete(`/users/${id}`)
      .then(() => history.push('/'))
      .catch(error => console.error("Error deleting user: ", error));
  }, [id, history]);

  return <h1>Deleting User...</h1>;
}

export default DeleteUser;
