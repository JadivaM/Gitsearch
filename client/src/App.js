import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import WelcomePage from './pages/WelcomePage';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import ResetPassword from './pages/ResetPassword';
import UpdatePassword from './pages/UpdatePassword';
import { AppContextProvider } from './context/AppContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/welcome" component={WelcomePage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/resetpassword" component={ResetPassword} />
          <Route exact path="/updatepassword" component={UpdatePassword} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/search" component={SearchPage} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
