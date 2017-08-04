angular
  .module("myApp")
  .controller("homeController", function($scope, $state, $stateParams, authService) {
    $scope.user = {}
    $scope.loginError = false
    $scope.registerError = false


    $scope.login = function() {
      $scope.loginError = false
      console.log($scope.user);
      if($scope.user.email && $scope.user.password) {
        authService.login($scope.user)
      }
      else {
        $scope.loginError = true
      }
    }

    $scope.logOut = function() {
      console.log($scope.user);
      authService.logOut()
    }

    $scope.register = function() {
      console.log($scope.user);
      $scope.registerError = false
      if($scope.user.first_name && $scope.user.last_name && $scope.user.email && $scope.user.password && $scope.user.confirmPassword && $scope.user.password === $scope.user.confirmPassword) {
        authService.register($scope.user)
      }
      else {
        $scope.loginError = true
      }
    }

  })
