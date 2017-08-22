'use strict';
app.controller('appController', function ($scope, authService) {
   $scope.logOut = authService.logOut;
   $scope.isAdmin = authService.authentication.isAdmin
   
});
