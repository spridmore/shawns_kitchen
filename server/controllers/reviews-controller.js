const { Review } = require('../models');

function index(req, res) {
  Review.findAll()
  .then(function(reviews) {
    console.log(reviews);
    res.status(200).send(reviews);
  })
  .catch(function(error) {
    console.log(error);
    res.status(400).send(error);
  });
}

function create(req, res) {
  Review.create({
    title: req.body.title,
    description: req.body.description,
    rating: req.body.rating,
    recipeId: req.body.recipeId,
    userId: req.body.userId,
  })
    .then(function(review) {
      console.log(review);
      res.status(200).send(review);
    })
    .catch(function(error) {
      console.log(error);
      res.status(400).send(error);
    });
}

function show(req, res) {
  Review.findById(req.params.id)
  .then(function (review) {
    console.log(review);
    res.status(200).json(review);
  })
  .catch(function (error) {
    console.log(error);
    res.status(500).json(error);
  });
}

function update(req, res) {
  Review.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(function (updatedRecord) {
    res.status(200).json(updatedRecord);
  })
  .catch(function (error) {
    res.status(500).json(error);
  });
}

function destroy(req, res) {
  Review.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function (deletedRecord) {
      res.status(200).json(deletedRecord);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
}

module.exports = { index, create, show, update, destroy };
