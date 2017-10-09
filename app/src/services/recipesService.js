app.service("recipesService", function ($http) {

  var _recipes = []
  var _recipeId = 0

  var Recipe = function (id, name, image, servings, instructions) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.servings = servings;
    this.instructions = instructions;
  }

  _recipes.push(new Recipe(_recipeId++,"Lemon-Garlic Shrimp Skewers","https://photos.bigoven.com/recipe/hero/lemon-garlicshrimpskewers-905868.jpg?h=500&w=500", 8, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))

  _recipes.push(new Recipe(_recipeId++,"Barracuda","https://photos.bigoven.com/recipe/hero/barracuda-e73015.jpg?h=500&w=500", 6, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))

  _recipes.push(new Recipe(_recipeId++,"Ultimate Chocolate Cake","https://photos.bigoven.com/recipe/hero/ultimate-chocolate-cake-2.jpg?h=500&w=500", 12, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))

  this.getRecipes = function() {
    return _recipes
  }

})
