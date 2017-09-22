const Reviews = require('../models').review;

function index(req, res) {
  Reviews.all()
    .then(function(reviews) {
      res.status(200).send(reviews);
    })
    .catch(function(error) {
      res.status(400).send(error);
    });
}

function create(req, res) {
  Reviews.create({
    title: req.body.title,
    description: req.body.description,
    rating: req.body.rating,
    recipeId: req.body.recipeId,
    userId: req.body.userId,
  })
    .then(function(reviews) {
      res.status(200).send(reviews);
    })
    .catch(function(error) {
      res.status(400).send(error);
    });
}

function show(req, res) {
  Reviews.findById(req.params.id)
    .then(function (review) {
      res.status(200).json(review);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
}

function update(req, res) {
  Reviews.update(req.body, {
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
  Reviews.destroy({
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
