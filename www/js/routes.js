angular.module('routes', ['ionic', 'starter.controllers'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/app/headers');

  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  // Header
  .state('app.headers', {
    url: '/headers',
    views: {
      'menuContent': {templateUrl: 'templates/headers/index.html'}
    }
  })

  // Buttons
  .state('app.buttons', {
    url: '/buttons',
    views: {
      'menuContent': {
        templateUrl: 'templates/buttons/index.html'
      }
    }
  })

  // Lists
  .state('app.lists', {
    url: '/lists',
    views: {
      'menuContent': {
        templateUrl: 'templates/lists/index.html'
      }
    }
  })
  .state('app.activelists', {
    url: '/activelists',
    views: {
      'menuContent': {
        templateUrl: 'templates/lists/active.html',
        controller: 'ActivelistsCtrl'
      }
    }
  })

  // Card
  .state('app.cards', {
    url: '/cards',
    views: {
      'menuContent': {
        templateUrl: 'templates/cards/index.html'
      }
    }
  })

  // Form
  .state('app.forms', {
    url: '/forms',
    views: {
      'menuContent': {
        templateUrl: 'templates/forms/index.html'
      }
    }
  })

  // ActionView
  .state('app.actionviews', {
    url: '/actionviews',
    views: {
      'menuContent': {
        templateUrl: 'templates/actionviews/index.html',
        controller: 'ActionViewCtrl'
      }
    }
  })


});
