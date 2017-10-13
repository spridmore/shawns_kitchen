const ShoppingList = require('../models').ShoppingList;
const Ingredient = require('../models').Ingredient;

//Get a list of all shoppinglists using model.findAll()
function index(req, res) {
  ShoppingList.findAll({
    include: Ingredient
  })
  .then(function (shoppingList) {
    console.log(shoppingList);
    res.status(200).json(shoppingList);
  })
  .catch(function (error) {
    console.log(error);
    res.status(500).json(error);
  });
}

//Create a new ShoppingList using model.create()
function create(req, res) {
  ShoppingList.create({
    listName: req.body.listName,
    userId: req.body.userId,
  })
  .then(function (shoppingList) {
    console.log(shoppingList);
    res.status(200).json(shoppingList);
  })
  .catch(function (error){
    console.log(error);
    res.status(500).json(error);
  });
}

//Get an shoppingList by the unique ID using model.findById()
function show(req, res) {
  ShoppingList.findById(req.params.id, {
    include: Ingredient
  })
  .then(function (shoppingList) {
    console.log(shoppingList);
    res.status(200).json(shoppingList);
  })
  .catch(function (error){
    console.log(error);
    res.status(500).json(error);
  });
}

 //Edit an existing ShoppingList details using model.update()
function update(req, res) {
  ShoppingList.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(function (shoppingList) {
    console.log(shoppingList);
    res.status(200).json(shoppingList);
  })
  .catch(function (error){
    console.log(error);
    res.status(500).json(error);
  });
}

//Delete an existing ShoppingList by the unique ID using model.destroy()
function destroy(req, res) {
  ShoppingList.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function (shoppingList) {
    console.log(shoppingList);
    res.status(200).json(shoppingList);
  })
  .catch(function (error){
    console.log(error);
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
