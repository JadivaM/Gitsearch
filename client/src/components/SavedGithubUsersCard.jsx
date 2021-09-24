import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const SavedGithubUsersCard = ({ setGithubUserData, githubUserData }) => {
  return (
    <>
      {githubUserData?.map((githubUserData) => (
        <Card key={githubUserData._id} id="saved-users-card">
          <Card.Img
            variant="top"
            src={githubUserData.avatar_url}
            id="saved-users-card-image"
          />
          <Card.Body id="saved-users-card-information">
            <Card.Title id="saved-users-name" style={{ textAlign: 'center' }}>
              {githubUserData.name}
            </Card.Title>
            <Card.Subtitle
              id="saved-users-username"
              className="mb-2 text-muted"
              style={{ textAlign: 'center' }}
            >
              {githubUserData.login}
            </Card.Subtitle>
            <Card.Text id="saved-users-profile-url">
              Profile URL: {githubUserData.html_url}
            </Card.Text>
            <Link to={{ pathname: 'githubUserData.html_url' }} target="_blank">
              <Button id="saved-users-profile-button" variant="outline-primary">
                View profile
              </Button>
            </Link>
            <DeleteButton
              setGithubUserData={setGithubUserData}
              githubUserDataId={githubUserData._id}
              githubUserDataLogin={githubUserData.login}
            />
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default SavedGithubUsersCard;
