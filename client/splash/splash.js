'use strict';
angular.module('mojsart.main.splash', ['ui.router'])

.config(function ($stateProvider) {

  $stateProvider
  .state('mojsart.splash', {
    url: '/splash',
    templateUrl: 'splash/splash.tpl.html',
    controller: 'SplashController'
  });
})

.controller('SplashController', function ($scope) {
  console.log('inside info controller');
  // $scope.songinfo = ['Info','About','Songs', 'goes', 'here'];
});