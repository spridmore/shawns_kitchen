const Ingredient = require('../models').Ingredient;

module.exports = {
  index(req, res) {
    return Ingredient
      .all()
      .then(recipes => res.status(200).send(ingredients))
      .catch(error => res.status(400).send(error));
  },
  show(req, res) {
    Ingredient.findById(req.params.id)
      .then(function (recipe) {
        res.status(200).json(ingredients);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },
  create(req, res) {
    return Ingredient
      .create({
        name: req.body.name,
        quantity: req.params.quantity,
      })
      .then(ingredients => res.status(200).send(ingredients))
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
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
  },

  delete(req, res) {
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
};