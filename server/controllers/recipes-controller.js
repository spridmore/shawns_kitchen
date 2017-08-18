const Recipe = require('../models').Recipe;

function index(req, res) {
  Recipe.all()
    .then(function(recipes){
      res.status(200).send(recipes);
    })
    .catch(function(error){
      res.status(400).send(error);
    });
}

function create(req, res) {
  Recipe.create({
    name: req.body.name,
    servings: req.body.servings,
    ingredientId: req.body.ingredientId
  })
    .then(function(recipes){
      res.status(200).send(recipes);
    })
    .catch(function(error){
      res.status(400).send(error);
    });
}

function show(req, res) {
  Recipe.findById(req.params.id)
    .then(function (recipe) {
      res.status(200).json(recipe);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
}

function update(req, res) {
  Recipe.update(req.body, {
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
  Recipe.destroy({
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
