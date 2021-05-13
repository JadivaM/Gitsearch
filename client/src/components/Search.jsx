import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import ResultsCard from '../components/ResultsCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="search-container">
        <div className="search-bar" style={{ marginTop: 0 }}>
          <Form id="search-input" inline onSubmit={handleSubmit}>
            <FormControl
              id="search-form"
              style={{
                boxShadow: 'none'
              }}
              onChange={handleSearch}
              type="text"
              className="mr-sm-2"
            />
            <Button
              type="submit"
              id="search-page-search-button"
              className="mobile-search-btn"
            >
              Search
            </Button>
            <Button
              type="submit"
              id="search-page-search-button"
              className="mobile-search-icon"
            >
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </div>
        <div className="search-results">
          <ResultsCard users={users} />
        </div>
      </div>
    </>
  );
};

export default Search;
