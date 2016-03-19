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
.controller('ActionViewCtrl', function($scope, $ionicActionSheet, $ionicBackdrop, $timeout, $ionicModal, $ionicPopup, $ionicPopover) {

  // An alert dialog
 $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Don\'t eat that!',
     template: 'It might taste good'
   });
   alertPopup.then(function(res) {
     console.log(res);
   });
 };
 // A confirm dialog
 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Consume Ice Cream',
     template: 'Are you sure you want to eat this ice cream?'
   });
   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };
 // An elaborate, custom popup
 $scope.showPopup = function() {
   $scope.data = {};
   var myPopup = $ionicPopup.show({
     template: '<input type="password" ng-model="data.wifi">',
     title: 'Enter Wi-Fi Password',
     subTitle: 'Please use normal things',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
           if (!$scope.data.wifi) {
             //don't allow the user to close unless he enters wifi password
             e.preventDefault();
           } else {
             return $scope.data.wifi;
           }
         }
       }
     ]
   });

   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });
 };

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
