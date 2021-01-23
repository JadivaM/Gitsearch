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
      <Form inline onSubmit={handleSubmit}>
        <FormControl
          size="lg"
          onChange={handleSearch}
          type="text"
          placeholder="Search for a username"
          className="mr-sm-2"
        />
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
      <div className="search-results">
        <ResultsCard users={users} />
      </div>
    </>
  );
};

export default Search;
