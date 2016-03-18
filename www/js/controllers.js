angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


})

// more performance list
// http://ionicframework.com/docs/api/directive/collectionRepeat/
.controller('ActionViewCtrl', function($scope, $ionicActionSheet, $ionicBackdrop, $timeout, $ionicModal, $ionicPopover) {

  // Popover View
  $ionicPopover.fromTemplateUrl('../templates/actionviews/popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });
  $scope.showPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };

  // Modal View
  $ionicModal.fromTemplateUrl('../templates/actionviews/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.showModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  // Refresh & backDrop
  $scope.doRefresh = function() {
    $ionicBackdrop.retain();
    $timeout(function() {
      $ionicBackdrop.release();
    }, 1000);
    $scope.$broadcast('scroll.refreshComplete'); // stop spinning
  };

  // ActionSheet
  $scope.showActionSheet = function() {
    var hideSheet = $ionicActionSheet.show({
      buttons: [
        { text: '<b>Share</b> This' },
        { text: 'Move' }
      ],
      destructiveText: 'Delete',
      titleText: 'This is a test of ActionSheet',
      cancelText: 'Cancel',
      cancel: function() {},
      buttonClicked: function(index) {
        return true;
      }
    });
  };
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
