const { Recipe } = require('../models');

function index(req, res) {
  Recipe.findAll()
  .then(function (recipe) {
    console.log(recipe);
    res.status(200).json(recipe);
  })
  .catch(function (error) {
    console.log(error);
    res.status(500).json(error);
  });
};

function create(req, res) {
  Recipe.create({
    name: req.body.name,
    servings: req.param.servings
  })
  .then(function(recipe) {
    console.log(recipe);
    res.status(201).send(recipe)
  })
  .catch(function(error) {
    console.log(error);
    res.status(400).send(error);
  })
};

function show(req, res) {
  Recipe.findById(req.params.id)
  .then(function (recipe) {
    console.log(recipe);
    res.status(200).json(recipe);
  })
  .catch(function (error) {
    console.log(error);
    res.status(500).json(error);
  });
}

function update(req, res) {
  Recipe.update(req.body, {
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
  Recipe.destroy({
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
