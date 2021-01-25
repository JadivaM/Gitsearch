const router = require('express').Router(),
  {
    createGithubData,
    getAllGithubData,
    deleteGithubData
  } = require('../../controllers/githubData');

router.post('/', createGithubData);

router.get('/', getAllGithubData);

router.delete('/:id', deleteGithubData);

module.exports = router;
