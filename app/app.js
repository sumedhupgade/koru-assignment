var app = angular.module('KoruApp', [
    'ngRoute'
  ])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: './home/views/homePage.html',
        controller: 'homePageController'
      })
      .otherwise({
        redirectTo: '/home'
      });
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }]);
