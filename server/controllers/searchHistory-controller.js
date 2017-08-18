const SearchHistory = require('../models').SearchHistory;

function index(req, res) {
  SearchHistory.all()
    .then(function(searchhistory) {
      res.status(200).send(searchhistory);
    })
    .catch(function(error) {
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
    .then(function(searchhistory) {
      res.status(200).send(searchhistory);
    })
    .catch(function(error) {
      res.status(400).send(error);
    })
}

function show(req, res) {
  SearchHistory.findById(req.params.id)
    .then(function (searchhistory) {
      res.status(200).json(searchhistory);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
}

function update(req, res) {
  SearchHistory.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(function (updatedRecords) {
      res.status(200).json(updatedRecords);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
}

function destroy(req, res) {
  SearchHistory.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function (deletedRecords) {
      res.status(200).json(deletedRecords);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
}

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
};
