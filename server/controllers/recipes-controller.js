const Recipe = require('../models/recipe');
const connection = require('../config/db')

console.log(connection)

// connection.query('SELECT * FROM recipes WHERE id = 1').then(hotdog => {
//  console.log(hotdog)
// });

console.log(Recipe)

function index(req, res) {

  connection.query('SELECT * FROM recipes where id = 1').then(hotdog => {
    console.log("Index response: " + hotdog)
   });
}

function create(req, res) {
  console.log(Recipe)
  // Recipe.create({
  //   name: 'Moldy bread',
  //   servings: 99,
  // }).then(newRecipe => {
  //   console.log(newRecipe)
  // })
}

//   Recipe.create({
//     name: req.body.name,
//     servings: req.body.servings,
//     ingredient_id: req.body.ingredientId
//   })
//     .then(function(recipes){
//       res.status(200).send(recipes);
//     })
//     .catch(function(error){
//       res.status(400).send(error);
//     });
// }
 
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
