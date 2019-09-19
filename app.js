var app = angular.module("chatApp",['ui.router']);
app.config([
    '$stateProvider',
    '$urlRouterProvider',

function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: 'templates/register.html',
        controller: 'registerController'
      })

  
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginController'
      })

      .state('forgotPassword', {
        url: '/forgotPassword',
        templateUrl: 'templates/forgotPassword.html',
        controller: 'forgotPasswordController'
      })

      .state('resetPassword', {
        url: '/resetPassword',
        templateUrl: 'templates/resetPassword.html',
        controller: 'resetPasswordController'
      });

      $urlRouterProvider.otherwise('/register');
      }])