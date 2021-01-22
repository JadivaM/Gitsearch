import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormControl, Button } from 'react-bootstrap';

const Searchbar = () => {
  const history = useHistory();
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Form inline onSubmit={handleSubmit}>
        <FormControl
          onChange={handleSearch}
          type="text"
          placeholder="Search for Github users"
          className="mr-sm-2"
        />
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </>
  );
};

export default Searchbar;
