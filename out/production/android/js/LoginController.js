var loginControllers = angular.module('loginControllers',[]);
loginControllers.controller('loginController',function($scope,$rootScope,$location){
  $rootScope.user = "saravanan"
  $rootScope.pwd = "varshu"
  $scope.userName = "saravanan"
  $scope.password = "varshu"
  $scope.loginClick = function(){
    console.log($scope.user +" "+ $scope.pwd);
    if($scope.userName == $scope.user && $scope.password == $scope.pwd){
      $rootScope.user = $scope.user;
      $location.path("/home");
     }
    }
  })
