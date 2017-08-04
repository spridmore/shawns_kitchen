'use strict';
angular
  .module("myApp")
  .service('authInterceptorService', ['$q', '$injector', '$location', 'localStorageService', function ($q, $injector, $state, localStorageService) {

  this.request = function (config) {
    config.headers = config.headers || {};

    var authData = localStorageService.get('authorizationData');
    console.log(authData);
    if (authData) {
      config.headers.Authorization = authData.token;
    }
    return config;
  }

  this.responseError = function (rejection) {
    if (rejection.status === 401) {
      var authService = $injector.get('authService');
      var authData = localStorageService.get('authorizationData');

      // if (authData) {
      //   if (authData.useRefreshTokens) {
      //     //   $location.path('/refresh');
      //     authService.refreshToken();
      //     return $q.reject(rejection);
      //   }
      // }
      authService.logOut();
      $location.path('/login');
    }
    return $q.reject(rejection);
  }
}]);
