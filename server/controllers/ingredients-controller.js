const { Ingredient } = require('../models');

function index(req, res) {
  Ingredient.findAll()
  .then(function(ingredients) {
    console.log(ingredients);
    res.status(200).send(ingredients);
  })
  .catch(function(error) {
    console.log(error);
    res.status(400).send(error);
  })
}

function create(req, res) {
  Ingredient.create({
    name: req.body.name,
    quantity: req.params.quantity,
  })
  .then(function(ingredient) {
    console.log(ingredient);
    res.status(200).send(ingredient);
  })
  .catch(function(error) {
    console.log(error);
    res.status(400).send(error);
  })
}

function show(req, res) {
  Ingredient.findById(req.params.id)
  .then(function (ingredient) {
    console.log(ingredient);
    res.status(200).json(ingredient);
  })
  .catch(function (error) {
    console.log(error);
    res.status(500).json(error);
  });
}

function update(req, res) {
  Ingredient.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(function (ingredient) {
    console.log(ingredient);
    res.status(200).json(ingredient);
  })
  .catch(function (error) {
    console.log(error);
    res.status(500).json(error);
  });
}

function destroy(req, res) {
  Ingredient.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function (ingredient) {
    console.log(ingredient);
    res.status(200).json(ingredient);
  })
  .catch(function (error) {
    console.log(error);
    res.status(500).json(error);
  });
}

module.exports = { index, create, show, update, destroy };
