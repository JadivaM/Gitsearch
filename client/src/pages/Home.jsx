import React from 'react';
import Search from '../components/Search';
import LoggedInNav from '../components/LoggedInNav';

const Home = () => {
  return (
    <>
      <LoggedInNav />
      <Search />
      <h1>Home!</h1>
    </>
  );
};

export default Home;
