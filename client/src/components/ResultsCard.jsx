import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ResultsCard = ({ users }) => {
  const handleSave = async () => {
    fetch(`https://api.github.com/user/following/${users.login}`, {
      method: 'PUT',
      headers: {
        'Content-Length': 0,
        Authorization: 'token 45b59ff28bda97971cdced394fdcff7e8bcb41ea'
      }
    });
  };

  return (
    <>
      <Card style={{ width: 310 }}>
        <Card.Img
          variant="top"
          src={users.avatar_url}
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
          <Card.Title style={{ textAlign: 'center' }}>{users.name}</Card.Title>
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ textAlign: 'center' }}
          >
            {users.login}
          </Card.Subtitle>
          <Card.Text>Profile URL: {users.html_url}</Card.Text>
          <Card.Text>Repos URL: {users.repos_url}</Card.Text>
          <a href={users.html_url}>
            <Button variant="primary">View profile</Button>
          </a>
          <Button
            variant="primary"
            style={{ marginLeft: 35 }}
            onClick={handleSave}
          >
            Save User
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ResultsCard;
