import React, { useEffect, useContext } from 'react';
import swal from 'sweetalert';
import { AppContext } from '../context/AppContext';
import SavedGithubUsersCard from './SavedGithubUsersCard';
import axios from 'axios';

const Profile = () => {
  const { githubUserData, setGithubUserData } = useContext(AppContext);

  useEffect(() => {
    axios
      .get('/api/githubdata')
      .then((res) => {
        setGithubUserData(res.data);
      })
      .catch((err) => {
        if (err) {
          swal('Error', 'Something went wrong.', 'error');
        }
      });
  }, [setGithubUserData]);

  return (
    <div className="profile-saved-users">
      <div className="githubUserData-cards">
        <h1 className="saved-users-header">Saved users</h1>
        {!githubUserData || githubUserData.length === 0 ? (
          <p className="no-saved-users-text">No saved users yet :(</p>
        ) : (
          <SavedGithubUsersCard
            setGithubUserData={setGithubUserData}
            githubUserData={githubUserData}
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
