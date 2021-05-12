import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import DeleteButton from './DeleteButton';
import swal from 'sweetalert';

const SavedGithubUsers = () => {
  const [githubUserData, setGithubUserData] = useState(null);

  useEffect(() => {
    fetch('/api/githubdata')
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setGithubUserData(res);
      })
      .catch((err) => {
        if (err) {
          swal('Error', 'Something went wrong.', 'error');
        }
      });
  }, []);

  return (
    <div className="githubUserData-cards">
      <h1 className="saved-users-header">Saved users</h1>
      {!githubUserData || githubUserData.length == 0 ? (
        <p className="no-saved-users-text">No saved users yet :(</p>
      ) : (
        githubUserData?.map((githubUserData) => {
          return (
            <Card id="saved-users-card" style={{ width: 310 }}>
              <Card.Img
                variant="top"
                src={githubUserData.avatar_url}
                id="saved-users-card-image"
              />
              <Card.Body>
                <Card.Title
                  id="saved-users-name"
                  style={{ textAlign: 'center' }}
                >
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
                <a href={githubUserData.html_url} target="_blank">
                  <Button
                    id="saved-users-profile-button"
                    variant="outline-primary"
                  >
                    View profile
                  </Button>
                </a>
                <DeleteButton githubUserData={githubUserData} />
              </Card.Body>
            </Card>
          );
        })
      )}
    </div>
  );
};

export default SavedGithubUsers;
