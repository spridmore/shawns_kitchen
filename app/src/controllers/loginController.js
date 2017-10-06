'use strict';
app.controller("loginController", function ($scope, $state, $stateParams, authService, localStorageService) {
  $scope.user = {}
  $scope.loginError = true
  $scope.registerError = false
  $scope.users = []
  var accountTotal = 0

  $scope.login = function () {
    $scope.loginError = false
    if ($scope.user.email && $scope.user.password && $scope.user.confirmPassword && $scope.user.password == $scope.user.confirmPassword) {
      authService.getUsers().then(function(storedUsers) {
        $scope.users = storedUsers.data
        for (var i = 0; i < $scope.users.length; i++) {
          if ($scope.users[i].email == $scope.user.email) {
            authService.login($scope.user)
            var selectedAccountEmail = $scope.users[i].email
            var selectedAccountPassword = $scope.users[i].password
            console.log($scope.user.password, selectedAccountPassword)
          }
        }
        if (selectedAccountEmail == $scope.user.email) {
          if (selectedAccountPassword == $scope.user.password){
            $scope.loginError = true;
            $scope.loginErrorMessage = "Login successful";
            $scope.user = {};
          }
          else {
            $scope.loginError = true;
            $scope.loginErrorMessage = "Incorrect password."
          }
        }
        else {
          $scope.loginError = true;
          $scope.loginErrorMessage = "No user with that email exists. Please enter an email and a password to register."
        }

      })
    }
    else if ($scope.user.password != $scope.user.confirmPassword) {
      $scope.loginError = true;
      $scope.loginErrorMessage = "Oops! Double check that the password fields match."
    }
    else {
      $scope.loginError = true;
      $scope.loginErrorMessage = "To login, the email, password, and confirm password fields must be completed."
    }
    //   authService.login($scope.user)
    //     .then(function (response) {
    //       console.log("Response: ", response);
    //       localStorageService.set('authorizationData',
    //         {
    //           user_id: response.data.id,
    //           token: response.data.token,
    //         });

    //       authService.setAuthData(response.data)
    //       $state.go('app.profile');
    //     },
    //     function (error) {
    //       console.log("Error: ", error);
    //       $scope.loginError = true
    //       $scope.loginErrorMessage = "The email provided doesn't belong to an account. Please try agian."
    //     });
    // }
    // else {
    //   $scope.loginError = true
    //   $scope.loginErrorMessage = "Please ensure that all fields are filled out!"
    // }
  }

  $scope.logOut = function () {
    console.log($scope.user);
    authService.logOut()
  }

  // DIAL IN LOGIN UX/UI
  $scope.register = function () {
    authService.getUsers().then(function (storedUsers) {
      $scope.users = storedUsers.data;

      $scope.registerError = false
      if ($scope.user.email && $scope.user.password && $scope.user.confirmPassword) {
        if ($scope.user.password === $scope.user.confirmPassword) {
          for (var i = 0; i < $scope.users.length; i++) {
            if ($scope.users[i].email == $scope.user.email) {
              accountTotal += 1;
            }
          }
          if (accountTotal == 0) {
            authService.register($scope.user)
            $scope.user = {}
            $scope.loginError = true;
            $scope.loginErrorMessage = "You're in! Welcome!"
          }
          else {
            $scope.loginError = true;
            $scope.loginErrorMessage = "Oops! Double check that the password fields match."
            accountTotal = 0
          }
        }

        else {
          $scope.loginError = true
          $scope.loginErrorMessage = "Oops! Looks like the passwords don't match."
        }
      }
      else {
        $scope.loginError = true
        $scope.loginErrorMessage = "Please ensure that at least email, password, and confirm password fields are filled out!"
      }
    }
    )
  }
})