import React from 'react';
import Search from '../components/Search';
import LoggedInNav from '../components/LoggedInNav';
import Profile from '../components/Profile';
const Home = () => {
  return (
    <>
      <LoggedInNav />
      <div className="home-container">
        <Profile />
        <Search />
      </div>
    </>
  );
};

export default Home;
