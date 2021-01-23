import React from 'react';
import Search from '../components/Search';
import LoggedInNav from '../components/LoggedInNav';

const Home = () => {
  return (
    <>
      <LoggedInNav />
      <div className="searchBackgroundImage">
        <Search />
      </div>
    </>
  );
};

export default Home;
