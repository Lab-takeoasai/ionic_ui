angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('ActivelistsCtrl', function($scope, $ionicListDelegate) {
  var items = [];
  for (var i = 0; i < 25; i++) {
    items.push({title: 'Item ' + String(i), id: i});
  }
  $scope.items = items;


  // delete & reorder
  var isDeleteHidden = true;
  var isReorderHidden = true;
  $scope.toggleReorderButtons = function() {
    isReorderHidden = !$ionicListDelegate.showReorder(isReorderHidden);
  };
  $scope.reorderItem = function(item, fromIndex, toIndex) {
    items.splice(fromIndex, 1);
    items.splice((fromIndex < toIndex ? toIndex -1 : toIndex), 0, item);
  };
  $scope.toggleDeleteButtons = function() {
    isDeleteHidden = !$ionicListDelegate.showDelete(isDeleteHidden);
  };
  $scope.deleteItem = function(item) {
    items.splice(items.indexOf(item), 1);
  };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
