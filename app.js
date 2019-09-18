
const addRoutes=angular.module("ChatApp",['ui.router']);
addRoutes.config([
    '$stateProvider',
    '$urlRouterProvider',

function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: '/register.html',
        controller: registerController
      });

      $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: '/login.html',
        controller: loginController
      });

      $stateProvider
      .state('forgotPassword', {
        url: '/forgotPassword',
        templateUrl: '/forgotPassword.html',
        controller: forgotPasswordController
      });

      $stateProvider
      .state('resetPassword', {
        url: '/resetPassword',
        templateUrl: '/resetPassword.html',
        controller: resetPasswordController
      });

      $urlRouterProvider.otherwise('/register');
      }])