import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Results from './pages/Results';
import { AppContextProvider } from './context/AppContext';
import './App.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute
            exact
            path="/"
            component={Home}
            render={(props) => (
              <Home setSearchResults={setSearchResults} {...props} />
            )}
          />
          <PrivateRoute
            exact
            path="/results"
            component={Results}
            render={(props) => (
              <Results searchResults={searchResults} {...props} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
