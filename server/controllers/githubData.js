const mongoose = require('mongoose'),
  GithubData = require('../db/models/githubData');

// ***********************************************//
// Create a task
// ***********************************************//
exports.createGithubData = async (req, res) => {
  const githubData = await new GithubData({
    ...req.body,
    owner: req.user._id
  });
  try {
    githubData.save();
    res.status(201).json(githubData);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// ***********************************************//
// Get all tasks
// /tasks?completed=true
// /tasks?limit=10&skip=10
// /tasks?sortBy=createdAt:asc
// /tasks?sortBy=dueDate:desc
// ***********************************************//
exports.getAllGithubData = async (req, res) => {
  const match = {},
    sort = {};

  if (req.query.completed) match.completed = req.query.completed === 'true';

  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(':');
    sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
  }
  try {
    await req.user
      .populate({
        path: 'githubData',
        match,
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort
        }
      })
      .execPopulate();
    res.json(req.user.githubData);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

// ***********************************************//
// Delete a task
// ***********************************************//
exports.deleteGithubData = async (req, res) => {
  try {
    const githubData = await GithubData.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!githubData)
      return res.status(404).json({ error: 'githubData not found' });
    res.json({ message: 'githubData has been deleted.' });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};
