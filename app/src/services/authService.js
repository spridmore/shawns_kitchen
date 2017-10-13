'use strict';
app.factory('authService', ['$http', '$q', '$state', 'localStorageService', function ($http, $q, $state, localStorageService) {

  var serviceBase = "http://localhost:3000/"
  var authServiceFactory = {};

  var _authentication = {
    isAuth: false,
    isAdmin: false
  };

  var _login = function (loginData) {
    console.log(loginData);

    if(loginData.email && loginData.password) {
      return $http.post("http://localhost:3000/users/login", loginData)
    }
  };

  var _logOut = function () {
    localStorageService.remove('authorizationData');

    _authentication.isAuth = false;
    _authentication.isAdmin = false;
    $state.go("app.home")
  };

  var _register = function(registerData) {
    console.log(registerData);

    if(registerData.password === registerData.confirmPassword) {

      $http.post("http://localhost:3000/users/register", registerData)
        .then(function(response) {
          console.log("Register Response: ", response);
          localStorageService.set('authorizationData',
          {
            user_id: response.data.id,
            token: response.data.token,
          });

          $state.go("app.profile")
        },
        function(error) {
          console.log(error);
        })
      }
  }

  var _setAuthData = function(data) {
    _authentication.isAuth = true;
    _authentication.isAdmin = data.is_admin;
  }

  // grabs and fills auth data to made accessible everywhere
  var _getAuthData = function () {
    var authData = localStorageService.get('authorizationData');
    if (authData) {
      console.log(authData);
      _authentication.hasInfo = authData.hasInfo;
      _authentication.isAdmin = authData.isAdmin;
      _authentication.studentId = authData.studentId;
      _authentication.userName = authData.userName;
      _authentication.isAuth = true;
    }
  };

  authServiceFactory.login = _login;
  authServiceFactory.logOut = _logOut;
  authServiceFactory.register = _register;
  authServiceFactory.getAuthData = _getAuthData;
  authServiceFactory.setAuthData = _setAuthData;
  authServiceFactory.authentication = _authentication;

  return authServiceFactory;
}]);
