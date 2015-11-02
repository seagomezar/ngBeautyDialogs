'use strict';
(function() {
  angular.module('ngBeautyDialogs', ['ngRoute', 'ngDialog'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'HomeController'
      });
  }]);
})();
