import React from 'react';
import Searchbar from '../components/Searchbar';
import LoggedInNav from '../components/LoggedInNav';

const Search = () => {
  return (
    <>
      <LoggedInNav />
      <div className="github-img">
        <div className="search-container">
          <h1 style={{ textAlign: 'center', padding: 30, fontWeight: 600 }}>
            Search for Github users
          </h1>
          <div className="search-bar">
            <Searchbar />
          </div>
        </div>
      </div>
      <h3>Search results</h3>
    </>
  );
};

export default Search;
