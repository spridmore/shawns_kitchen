'use strict';
angular
  .module("myApp")
  .service('authService', function ($http, localStorageService) {
    //.factory('authService', ['$http', '$q', '$state', 'localStorageService', function ($http, $q, $state, localStorageService) {
 
    var serviceBase = "http://localhost:3000/"
    var authServiceFactory = {};
    var users = [];

    var _getUsers = function() {
      return $http.get('http://localhost:3000/users')
    }

    var _authentication = {
      isAuth: false,
      isAdmin: false
    };

    var _login = function (user) {
      $http.post('http://localhost:3000/users/login', user)
    };

    var _logOut = function () {
      localStorageService.remove('authorizationData');

      _authentication.isAuth = false;
      _authentication.isAdmin = false;
      $state.go("app.home")
    };

    var _register = function (registerData) {
      if (registerData.password === registerData.confirmPassword) {
        $http.post('http://localhost:3000/users/register', registerData)
        //make sure to figure out what process.env.JWT_SECRET points to
          .then(function (registerData) {
            console.log("inside _register .then");
            console.log("Register Response: ", registerData);
            localStorageService.set('authorizationData',
            {
              user_id: registerData.data.id,
              token: registerData.data.token,
            });

            //$state.go("app.profile")
          },
          function (error) {
            console.log(error.data.error);
          })
      }
    }
    var _setAuthData = function (data) {
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

    authServiceFactory.getUsers = _getUsers;
    authServiceFactory.login = _login;
    authServiceFactory.logOut = _logOut;
    authServiceFactory.register = _register;
    authServiceFactory.getAuthData = _getAuthData;
    authServiceFactory.setAuthData = _setAuthData;
    authServiceFactory.authentication = _authentication;

    return authServiceFactory;
  });
