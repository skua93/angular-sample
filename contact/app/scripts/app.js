'use strict';

/**
 * @ngdoc overview
 * @name contactApp
 * @description
 * # contactApp
 *
 * Main module of the application.
 */
angular
  .module('contactApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'indexCtrl',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'

      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'addCtrl'

      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
