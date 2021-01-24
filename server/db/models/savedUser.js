const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const savedUserSchema = new Schema({
  name: {
    type: String
  },
  login: {
    type: String
  },
  githubUrl: {
    type: String
  },
  repoUrl: {
    type: String
  },
  avatar: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const SavedUser = mongoose.model('SavedUser', savedUserSchema);

module.exports = SavedUser;
