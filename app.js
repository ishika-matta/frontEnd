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
        url: '/resetPassword/:token',
        templateUrl: 'templates/resetPassword.html',
        controller: 'resetPasswordController'
      })


      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'templates/dashboard.html',
        controller: 'dashboardController'
      });

      $urlRouterProvider.otherwise('/register');
      }])