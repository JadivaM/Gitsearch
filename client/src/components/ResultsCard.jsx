import React from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

const ResultsCard = ({ users }) => {
  const handleSave = async () => {
    try {
      fetch(`https://api.github.com/user/following/${users.login}`, {
        method: 'PUT',
        headers: {
          'Content-Length': 0,
          Authorization: 'token process.env.GITHUB_TOKEN'
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
          <Card id="search-results-card">
            {users.avatar_url ? (
              <Card.Img
                variant="top"
                src={users.avatar_url}
                alt="Github user avatar"
                id="search-page-mobile-avatar"
              />
            ) : null}
            <Card.Body id="search-results-card-body">
              {users.name ? (
                <Card.Title id="search-results-card-title">
                  {users.name}
                </Card.Title>
              ) : null}
              {users.login ? (
                <Card.Subtitle
                  id="search-results-card-username"
                  className="mb-2 text-muted"
                  style={{ textAlign: 'center' }}
                >
                  {users.login}
                </Card.Subtitle>
              ) : null}
              {users.html_url ? (
                <Card.Text id="search-results-card-profile-url">
                  Profile: {users.html_url}
                </Card.Text>
              ) : null}
              {users.html_url ? (
                <div className="search-page-results-buttons">
                  <Link to={{ pathname: users.html_url }} target="_blank">
                    <Button
                      style={{
                        backgroundColor: '#0f3c49',
                        border: 'none',
                        boxShadow: 'none'
                      }}
                    >
                      View profile
                    </Button>
                  </Link>
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
              ) : null}
            </Card.Body>
          </Card>
        </div>
        <div className="search-page-results-image">
          {users.avatar_url ? (
            <img src={users.avatar_url} alt="Github user avatar" />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ResultsCard;
