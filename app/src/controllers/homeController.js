'use strict';
app.controller("homeController", function($scope, $state, $stateParams, authService, localStorageService, recipesService) {

  $scope.recipes = recipesService.getRecipes() 
})
