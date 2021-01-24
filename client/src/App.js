import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import { AppContextProvider } from './context/AppContext';
import './App.css';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/search" component={SearchPage} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
