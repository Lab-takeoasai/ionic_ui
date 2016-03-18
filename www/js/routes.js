angular.module('routes', ['ionic', 'starter.controllers'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/app/playlists');

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

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback

});
