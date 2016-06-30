angular
.module('pajbot')
.config(routesConfig);

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('main', {
    url: '/',
    template: '<h1>xD </h1>'
  });
}
