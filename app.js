'use strict';
(function() {
  angular.module('ngDialogs', ['ngRoute','ngDialog'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main.html',
        controller: 'myController'
      });
  }]).controller('myController', function($scope){
    
  })
})();
