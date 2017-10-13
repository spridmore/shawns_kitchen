const { SearchHistory } = require('../models');

function index(req, res) {
  SearchHistory.findAll()
  .then(function(searchHistory) {
    console.log(searchHistory);
    res.status(200).send(searchHistory);
  })
  .catch(function(error) {
    console.log(error);
    res.status(400).send(error);
  });
}

function create(req, res) {
  SearchHistory.create({
    id: req.body.id,
    name: req.body.name,
    url: req.body.url,
    userId: req.body.userId,
  })
  .then(function(searchHistory) {
    console.log(searchHistory);
    res.status(200).send(searchHistory);
  })
  .catch(function(error) {
    console.log(error);
    res.status(400).send(error);
  })
}

function show(req, res) {
  SearchHistory.findById(req.params.id)
  .then(function (searchhistory) {
    console.log(searchHistory);
    res.status(200).json(searchhistory);
  })
  .catch(function (error) {
    console.log(error);
    res.status(500).json(error);
  });
}

function update(req, res) {
  SearchHistory.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(function (searchHistory) {
    console.log(searchHistory);
    res.status(200).json(searchHistory);
  })
  .catch(function (error) {
    console.log(error);
    res.status(500).json(error);
  });
}

function destroy(req, res) {
  SearchHistory.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function (searchHistory) {
    console.log(searchHistory);
    res.status(200).json(searchHistory);
  })
  .catch(function (error) {
    console.log(error);
    res.status(500).json(error);
  });
}

module.exports = { index, create, show, update, destroy };
