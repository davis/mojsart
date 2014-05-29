(function (angular) {
  "use strict";

  angular.module('mojsart.main', [
    'ui.router',
    'mojsart.main.sidebar',
    'mojsart.main.graph',
    'mojsart.main.infopanel',
    'fx.animations',
    'ngAnimate'
  ])

  .config(function ($stateProvider) {
    $stateProvider
    .state('mojsart.main', {
      url: '/main',
      views:{
        // '': {templateUrl: 'main/main.tpl.html'},
        'sidebar': {templateUrl: 'main.sidebar/sidebar.tpl.html', controller:'SideBarController'},
        'infopanel': {templateUrl: 'main.infopanel/infopanel.tpl.html', controller:'InfoController'},
        'graph':{templateUrl: 'main.graph/graph.tpl.html', controller:'GraphController'}
      },
      controller: 'MainController',
    });
  })

  .controller('MainController', function ($state, $scope, $http) {
    $scope.title = 'Mojsart';

    $scope.getSongs = function () {
      $http.get('/song')
      .success(function(json) {
        // console.log(json);
        $scope.sharedState.data = json;
      });
    };

    // TODO: make it so that we don't need to "initialize" like this
    $scope.sharedState = {};
    $scope.getSongs();

  });
})(angular);
