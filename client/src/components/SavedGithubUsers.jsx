import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import DeleteButton from './DeleteButton';

const SavedGithubUsers = () => {
  const [githubUserData, setGithubUserData] = useState(null);

  useEffect(() => {
    fetch('/api/githubdata')
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res);
        setGithubUserData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="githubUserData-cards">
      {githubUserData?.map((githubUserData) => {
        return (
          <Card style={{ width: 310 }}>
            <Card.Img
              variant="top"
              src={githubUserData.avatar_url}
              style={{
                height: 250,
                width: 250,
                display: 'flex',
                justifyContent: 'center',
                margin: 'auto',
                paddingTop: 10
              }}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}>
                {githubUserData.name}
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{ textAlign: 'center' }}
              >
                {githubUserData.login}
              </Card.Subtitle>
              <Card.Text>Profile URL: {githubUserData.html_url}</Card.Text>
              <Card.Text>Repos URL: {githubUserData.repos_url}</Card.Text>
              <a href={githubUserData.html_url}>
                <Button variant="outline-primary">View profile</Button>
              </a>
              <DeleteButton githubUserData={githubUserData} />
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default SavedGithubUsers;
