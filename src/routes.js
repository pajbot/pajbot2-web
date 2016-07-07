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
            templateUrl: 'sidenav/sidenav.html',
        },
        '': {
            templateUrl: 'main/main.html',
        }
    }
  })
  .state('channel', {
    url: '/c/:channelName',
    views: {
        'sideNav': {
            templateUrl: 'sidenav/sidenav.html',
        },
        '': {
            templateUrl: 'channel/channel.html',
        },
    },
    abstract: true
  })
  .state('channel.main', {
    url: '',
    views: {
        'sideNav': {
            templateUrl: 'sidenav/sidenav.html',
        },
        '': {
            templateUrl: 'channel/main/main.html',
        },
    },
  })
  .state('channel.dashboard', {
    url: 'dashboard',
    views: {
        'sideNav': {
            templateUrl: 'sidenav/sidenav.html',
        },
        '': {
            templateUrl: 'dashboard/dashboard.html',
        },
    },
    abstract: true
  })
  .state('channel.dashboard.main', {
    url: '',
    templateUrl: 'dashboard/main/main.html',
  })
  ;
}
