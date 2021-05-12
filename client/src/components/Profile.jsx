import React from 'react';
import SavedGithubUsers from './SavedGithubUsers';

const Profile = () => {
  return (
    <>
      <div className="home-container">
        <div className="profile-container">
          <div className="cover-photo-img">
            <div className="profile-avatar"></div>
          </div>
          <div className="profile-saved-users">
            <SavedGithubUsers />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
