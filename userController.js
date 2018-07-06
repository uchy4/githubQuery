// Code goes here
(function() {

     var app = angular.module('app');

     var UserController = function($scope, github, $routeParams) {

          var onUserComplete = function(data) {
               $scope.user = data;
               github.getRepos($scope.user).then(onRepos);
          };

          var onRepos = function(data) {
               $scope.repos = data;
          };

          $scope.username = $routeParams.username;
          $scope.repoSortOrder = "+language";
          github.getUser($scope.username).then(onUserComplete);
     };

     app.controller("UserController", ["$scope", "github", "$routeParams", UserController
     ]);

}());