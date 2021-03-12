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
        <div className="search-bar" style={{ marginTop: 0 }}>
          <Form inline onSubmit={handleSubmit}>
            <FormControl
              size="lg"
              onChange={handleSearch}
              type="text"
              placeholder="Discover users"
              className="mr-sm-2"
            />
            <Button
              type="submit"
              style={{
                backgroundColor: '#0f3c49',
                border: 'none',
                boxShadow: 'none'
              }}
            >
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
