# TA Assessment

- This assessment requires communicating with the Github API making requests to search for users, save them to the database, when saving a user you will follow the saved user on Github, display all saved users on the users profile, and also unfollow the github user on github. To style various components React Bootstrap was used including the navigation bar and cards that render the user information and Sweet Alert to show success and error alerts.

## How to use

- You can sign up and log in with your name, email, and creating a password.
- Once you are signed up you will receive a welcome email.
- If you need to reset your password, you can click on forgot password link to be able to input your email and be sent an update password link.
- You can then navigate to the search page by clicking on the search button in the navigation bar.
- In the search page you are able to input a users name on github and the results will be rendered on a card.
- Once the result is rendered, you may click on 'save' button to save the user to your profile.
- To navigate to the stored Github users, you can navigate back to home by clicking on the home button in the navigation bar.
- You will then be able to see all of the saved users and unsave any users you wish to remove.
- You can also logout of your account to keep your information safe.

## API information

- The API's used include the Github API ('https://docs.github.com/en/rest') and the Sendgrid API to send emails ('https://sendgrid.com/docs/).

## Libraries

- JWT to generate authorization tokens,
- Bcrypt to hash user passwords.
- Validator to validate data.
- Passport for authenticating with a JSON Web Token.

## Setup

- `git clone` this repo
- `cd` into it.
- `yarn install`
- `cd client && yarn install`
- `cp .env.sample .env`

## Available build commands

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.

Open [http://localhost:3000](http://localhost:3000) to view your local React app in the browser. The page will reload if you make edits.

## Postman testing

- Endpoint testing has been saved to a collection.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/fb7c97049acd33cec57b)
