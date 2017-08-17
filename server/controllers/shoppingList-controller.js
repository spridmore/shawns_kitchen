const ShoppingList = require('../models').ShoppingList;
const Ingredient = require('../models').Ingredient;

module.exports = {
    //Get a list of all shoppinglists using model.findAll()
    index(req, res) {
      ShoppingList.findAll({
        include: Ingredient
      })
        .then(function (shoppinglists) {
          res.status(200).json(shoppinglists);
        })
        .catch(function (error) {
          res.status(500).json(error);
        });
    },
  //Get an shoppingList by the unique ID using model.findById()
  show(req, res) {
    ShoppingList.findById(req.params.id, {
      include: Ingredient
    })
    .then(function (shoppinglists) {
      res.status(200).json(shoppinglists);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  },  
    //Create a new ShoppingList using model.create()
    create(req, res) {
      ShoppingList.create({
        listName: req.body.listName,
        userId: req.body.userId,
    })
        .then(function (newShoppingList) {
          res.status(200).json(newShoppingList);
        })
        .catch(function (error){
          res.status(500).json(error);
        });
    },

   //Edit an existing ShoppingList details using model.update()
  update(req, res) {
    ShoppingList.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(function (updatedRecords) {
      res.status(200).json(updatedRecords);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  },

  //Delete an existing ShoppingList by the unique ID using model.destroy()
  delete(req, res) {
    ShoppingList.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (deletedRecords) {
      res.status(200).json(deletedRecords);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }
};