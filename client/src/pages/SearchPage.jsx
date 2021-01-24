import React from 'react';
import Search from '../components/Search';
import LoggedInNav from '../components/LoggedInNav';

const SearchPage = () => {
  return (
    <>
      <LoggedInNav />
      <div className="search-background-img">
        <Search />
      </div>
    </>
  );
};

export default SearchPage;
