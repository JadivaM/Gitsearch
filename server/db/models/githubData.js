const mongoose = require('mongoose');

const githubDataSchema = new mongoose.Schema(
  {
    avatar_url: {
      type: String
    },
    name: {
      type: String
    },
    login: {
      type: String
    },
    html_url: {
      type: String
    },
    repos_url: {
      type: String
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

const GithubData = mongoose.model('GithubData', githubDataSchema);

module.exports = GithubData;
