import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ResultsCard = ({ users }) => {
  return (
    <>
      <Card style={{ width: 350 }}>
        <Card.Img variant="top" src={users.avatar_url} />
        <Card.Body>
          <Card.Title>{users.name}</Card.Title>
          <Card.Text>Username: {users.login}</Card.Text>
          <Card.Text>Profile: {users.html_url}</Card.Text>
          <Card.Text>Repos: {users.repos_url}</Card.Text>
          <a href={users.html_url}>
            {' '}
            <Button variant="primary">View profile</Button>
          </a>
          <Button variant="primary" style={{ marginLeft: 90 }}>
            Save User
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ResultsCard;
