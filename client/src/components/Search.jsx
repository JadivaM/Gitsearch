import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import ResultsCard from '../components/ResultsCard';

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
        <h1 style={{ textAlign: 'center', paddingTop: 20 }}>
          Search for a Github user
        </h1>
        <div className="search-bar">
          <Form inline onSubmit={handleSubmit}>
            <FormControl
              size="lg"
              onChange={handleSearch}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button variant="primary" type="submit">
              Search
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
