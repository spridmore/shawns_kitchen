const shoppinglists = require('./shoppingList-controller');
const searchhistory = require('./searchHistory-controller');
const reviews = require('./reviews-controller');
const recipes = require('./recipes-controller');
const ingredients = require('./ingredients-controller');

module.exports = {
  shoppinglists: shoppinglists,
  searchhistory: searchhistory,
  reviews: reviews,
  recipes: recipes,
  ingredients: ingredients
};
