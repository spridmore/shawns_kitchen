const Ingredient = require('../models').Ingredient;

function index(req, res) {
  Ingredient.all()
    .then(function(ingredients) {
      res.status(200).send(ingredients);
    })
    .catch(function(error) {
      res.status(400).send(error);
    })
}

function create(req, res) {
  Ingredient.create({
    name: req.body.name,
    quantity: req.params.quantity,
  })
    .then(function(ingredients) {
      res.status(200).send(ingredients);
    })
    .catch(function(error) {
      res.status(400).send(error);
    })
}

function show(req, res) {
  Ingredient.findById(req.params.id)
    .then(function (ingredients) {
      res.status(200).json(ingredients);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
}

function update(req, res) {
  Ingredient.update(req.body, {
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
  Ingredient.destroy({
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
