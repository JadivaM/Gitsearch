import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

const DeleteButton = ({ githubUserData }) => {
  const handleRemove = async () => {
    try {
      fetch(`https://api.github.com/user/following/${githubUserData.login}`, {
        method: 'DELETE',
        headers: {
          'Content-Length': 0,
          Authorization: 'token 45b59ff28bda97971cdced394fdcff7e8bcb41ea'
        }
      });
      await axios({
        method: 'DELETE',
        url: `/api/githubdata/${githubUserData._id}`,
        withCredentials: true
      });
      swal(
        'Removed from profile!',
        `You are no longer following ${githubUserData.login} on Github`,
        'success'
      );
    } catch (err) {
      swal('Error', 'Something went wrong.', 'error');
    }
  };

  return (
    <Button
      variant="outline-danger"
      style={{ marginLeft: 20 }}
      onClick={handleRemove}
      id="saved-users-delete-button"
    >
      Remove User
    </Button>
  );
};

export default DeleteButton;
