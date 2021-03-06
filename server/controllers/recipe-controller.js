const model = require('../models/');

function index(req, res) {
  console.log("inside recipe index")
  model.recipe.findAll()
    .then(function (users) {
      console.log(users);
      res.status(200).json(users);
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).json(error);
    });
}

function create(req, res) {
  console.log("inside recipe create funct ")
  return model.recipe
    .create({
      name: req.body.name,
      servings: req.param.servings
    })
    .then(Recipe => res.status(201).send(Recipe))
    .catch(Recipe => res.status(400).send(error));
    for(var i = 0; i < recipe_list.length; i++){
      console.log(recipe_list[i].dataValues.name)
    };
};

function show(req, res) {
  model.recipe.findById(req.params.id)
    .then(function (recipe_list) {
      res.status(200).json(recipe_list);
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
