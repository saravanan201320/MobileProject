var homeControllers = angular.module('homeControllers',[]);
homeControllers.controller('homeController',function($scope,$ionicSideMenuDelegate,$location){
  $scope.test="sivakumar";
  $scope.navIcon = false;
  $scope.ionArrowLeft = true;
  $scope.toggleLeftSideMenu = function() {
      $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.navIconBtn = function() {
      $scope.navIcon = true;
      $scope.ionArrowLeft = false;
  }
  $scope.ionArrowLeftBtn = function() {
      $scope.navIcon = false;
      $scope.ionArrowLeft = true;
  }
  $scope.homeBtnClicked = function() {
    $location.path('/home');
  }
  $scope.locateMeClicked = function(){
    $location.path('/locateMe');
  }

});
