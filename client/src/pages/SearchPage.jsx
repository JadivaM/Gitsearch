import React from 'react';
import Search from '../components/Search';
import LoggedInNav from '../components/LoggedInNav';

const SearchPage = () => {
  return (
    <>
      <div className="search-page-main-container">
        <LoggedInNav />
        <div className="title">
          <h1
            style={{ textAlign: 'center', paddingTop: 20, paddingBottom: 20 }}
          >
            Search for a Github user
          </h1>
        </div>
        <div className="search-container">
          <Search />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
