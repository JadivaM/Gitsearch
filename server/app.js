require('./db/config');
const express = require('express'),
  path = require('path'),
  morgan = require('morgan'),
  cookieParser = require('cookie-parser'),
  userRouter = require('./routes/secure/users'),
  passport = require('./middleware/authentication/index'),
  githubDataRouter = require('./routes/secure/githubData'),
  openRoutes = require('./routes/open');

const app = express();

//Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

// Unauthenticated routes
app.use(openRoutes);

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Any authentication middleware and related routing would be here.

app.use('/api/*', passport.authenticate('jwt', { session: false }));

//Authenticated routes

app.use('/api/users', userRouter);
app.use('/api/githubdata', githubDataRouter);

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
