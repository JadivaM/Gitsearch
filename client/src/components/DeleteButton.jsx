import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

const DeleteButton = ({
  setGithubUserData,
  githubUserDataLogin,
  githubUserDataId
}) => {
  const handleRemove = async () => {
    try {
      fetch(`https://api.github.com/user/following/${githubUserDataLogin}`, {
        method: 'DELETE',
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`
        }
      });
      await axios({
        method: 'DELETE',
        url: `/api/githubdata/${githubUserDataId}`,
        withCredentials: true
      });
      swal(
        'Removed from profile!',
        `You are no longer following ${githubUserDataLogin} on Github`,
        'success'
      );
      const usersDataRes = await axios.get('/api/githubdata');
      setGithubUserData(usersDataRes.data);
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
