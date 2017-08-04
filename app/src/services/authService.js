'use strict';
angular
  .module("myApp")
  .factory('authService', ['$http', '$q', '$state', 'localStorageService', function ($http, $q, $state, localStorageService) {

  var serviceBase = "http://localhost:3000/"
  var authServiceFactory = {};

  var _authentication = {
    isAuth: false,
    isAdmin: false
  };

  var _login = function (loginData) {
    console.log(loginData);
    var deferred = $q.defer();

    $http.post("http://localhost:3000/users/login", loginData)
      .then(function (response) {
        console.log("Response: ", response);
          localStorageService.set('authorizationData',
          {
            user_id: response.data.id,
            token: response.data.token,
            email: loginData.email
          });
          _getAuthData()

        _authentication.isAuth = true;
        _authentication.isAdmin = response.data.is_admin;

        deferred.resolve(response);
        $state.go('home');
      },
      function (error, status) {
        _logOut();
        deferred.reject(error);
      });

    return deferred.promise;
  };

  var _logOut = function () {
    localStorageService.remove('authorizationData');

    _authentication.isAuth = false;
    _authentication.isAdmin = false;
    $state.go("home")
  };

  var _register = function(registerData) {
    console.log(registerData);
    $http.post("http://localhost:3000/users/register", registerData)
      .then(function(response) {
        console.log("Register Response: ", response);
        localStorageService.set('authorizationData',
        {
          user_id: response.data.id,
          token: response.data.token,
          email: response.data.email
        });

        $state.go("profile")
      },
      function(error) {
        console.log(error);
      })
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
  authServiceFactory.authentication = _authentication;

  return authServiceFactory;
}]);
