'use strict';
(function() {

  function HomeController($scope, ngDialog) {
    $scope.successDialog = function() {
      ngDialog.open({
        template: 'successDialog.html',
        showClose: false
      });
    };
    $scope.errorDialog = function() {
      ngDialog.open({
        template: 'errorDialog.html',
        showClose: false
      });
    };
    $scope.loadingDialog = function() {
      ngDialog.open({
        template: 'loadingDialog.html',
        showClose: false
      });
    };
    $scope.infoDialog = function() {
      ngDialog.open({
        template: 'infoDialog.html',
        showClose: false
      });
    };
  }
  angular.module('ngBeautyDialogs')
    .controller('HomeController', HomeController);
})();
