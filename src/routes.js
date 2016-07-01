angular
.module('pajbot')
.config(routesConfig);

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'main/main.html',
    views: {
        'sideNav': {
            template: 'MENU',
        },
    }
  })
  .state('dashboard', {
    url: '/dashboard',
    views: {
        'sideNav': {
            template: 'MENU',
        },
        '': {
            templateUrl: 'dashboard/dashboard.html',
        },
    },
    abstract: true
  })
  .state('dashboard.main', {
    url: '',
    templateUrl: 'dashboard/main/main.html',
  })
  .state('dashboard.test', {
    url: '/test',
    template: '<h1>dashboard test</h1>',
  })
  ;
}
