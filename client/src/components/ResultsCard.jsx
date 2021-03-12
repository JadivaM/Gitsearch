import React from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

const ResultsCard = ({ users }) => {
  const handleSave = async () => {
    try {
      fetch(`https://api.github.com/user/following/${users.login}`, {
        method: 'PUT',
        headers: {
          'Content-Length': 0,
          Authorization: 'token 45b59ff28bda97971cdced394fdcff7e8bcb41ea'
        }
      });
      await axios({
        method: 'POST',
        url: '/api/githubdata',
        withCredentials: true,
        data: users,
        body: JSON.stringify({
          avatar_url: users.avatar_url,
          name: users.name,
          login: users.login,
          html_url: users.html_url,
          repos_url: users.repos_url
        })
      });
      swal(
        'Saved to profile!',
        `You are now following ${users.login} on Github!`,
        'success'
      );
    } catch (err) {
      swal('Error', 'Something went wrong.', 'error');
    }
  };

  return (
    <>
      <div className="search-page-results">
        <div className="search-page-results-information">
          <Card style={{ width: 450, height: 500, border: 'none' }}>
            <Card.Body
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Card.Title style={{ textAlign: 'center', fontSize: '2rem' }}>
                {users.name}
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{ textAlign: 'center' }}
              >
                {users.login}
              </Card.Subtitle>
              <Card.Text>Profile: {users.html_url}</Card.Text>
              <Card.Text>Repositories: {users.repos_url}</Card.Text>

              <div className="search-page-results-buttons">
                <a href={users.html_url}>
                  <Button
                    style={{
                      backgroundColor: '#0f3c49',
                      border: 'none',
                      boxShadow: 'none'
                    }}
                  >
                    View profile
                  </Button>
                </a>
                <Button
                  style={{
                    backgroundColor: '#0f3c49',
                    border: 'none',
                    boxShadow: 'none'
                  }}
                  onClick={handleSave}
                >
                  Save User
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="search-page-results-image">
          <img src={users.avatar_url} alt="Github user avatar" />
        </div>
      </div>
    </>
  );
};

export default ResultsCard;
