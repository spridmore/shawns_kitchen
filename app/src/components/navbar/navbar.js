'use strict';
app.directive('navbar', function () {
   return {
     restrict: 'E',
     templateUrl: '../src/components/navbar/navbar.html',
     controller: 'loginController'
   };
});
