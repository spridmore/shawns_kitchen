'use strict';
app.controller("recipesController", function($scope, $state, $stateParams, authService, localStorageService, recipesService) {

  $scope.recipes = recipesService.getRecipes()
})
