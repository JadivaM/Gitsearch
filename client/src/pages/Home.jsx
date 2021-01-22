import React from 'react';
import Searchbar from '../components/Searchbar';
import LoggedInNav from '../components/LoggedInNav';

const Home = ({ setSearchResults }) => {
  return (
    <>
      <LoggedInNav />
      <Searchbar setSearchResults={setSearchResults} />
      <h1>Home!</h1>
    </>
  );
};

export default Home;
