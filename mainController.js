// Code goes here
(function() {

     var app = angular.module("app");

     var MainController = function($scope, $interval, $location) {

          var countdownInterval = null;
          var decrementCountdown = function() {
               $scope.countdown -= 1;
               if ($scope.countdown < 1) {
                    $scope.search();
               }
          };

          var startCountdown = function() {
               countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
          };

          $scope.search = function() {
               if (countdownInterval) {
                    $interval.cancel(countdownInterval);
                    $scope.countdown = null;
               }
               // route to
               $location.path("/user/" + $scope.username)
          };

          $scope.username = "uchy4";
          $scope.countdown = 5;
          startCountdown();

     };

     app.controller("MainController", ["$scope", "$interval",
          "$location", MainController
     ]);

}());