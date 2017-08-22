'use strict';
app.controller("loginController", function($scope, $state, $stateParams, authService, localStorageService) {
  $scope.user = {}
  $scope.loginError = false
  $scope.registerError = false

  $scope.login = function() {
    $scope.loginError = false
    console.log($scope.user);

    if($scope.user.email && $scope.user.password) {
      authService.login($scope.user)
        .then(function (response) {
          console.log("Response: ", response);
          localStorageService.set('authorizationData',
          {
            user_id: response.data.id,
            token: response.data.token,
          });

          authService.setAuthData(response.data)
          $state.go('app.profile');
        },
        function (error) {
          console.log("Error: ", error);
          $scope.loginError = true
          $scope.loginErrorMessage = "The email provided doesn't belong to an account. Please try agian."
        });
    }
    else {
      $scope.loginError = true
      $scope.loginErrorMessage = "Please ensure that all fields are filled out!"
    }
  }

  $scope.logOut = function() {
    console.log($scope.user);
    authService.logOut()
  }

  // DIAL IN LOGIN UX/UI
  $scope.register = function() {
    console.log($scope.user);
    $scope.registerError = false
    if($scope.user.first_name && $scope.user.last_name && $scope.user.email && $scope.user.password && $scope.user.confirmPassword) {
      if($scope.user.password === $scope.user.confirmPassword) {
        authService.register($scope.user)
      }
      else {
        $scope.loginError = true
        $scope.loginErrorMessage = "Oops! Looks like the passwords don't match."
      }
    }
    else {
      $scope.loginError = true
      $scope.loginErrorMessage = "Please ensure that all fields are filled out!"
    }
  }

})
