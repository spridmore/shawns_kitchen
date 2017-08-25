'use strict';
app.directive('footer', function () {
   return {
     restrict: 'E',
     templateUrl: '../src/components/footer/footer.html',
     controller: 'loginController'
   };
});
