(function() {

     var app = angular.module("app", ["ngRoute"]);

     app.config(function($routeProvider) {
          $routeProvider
               .when("/main", {
                    templateUrl: "main.html",
                    controller: "MainController"
               })
               .when("/user/:username", { // : == parameter
                    templateUrl: "user.html",
                    controller: "UserController"
               })
               .otherwise({redirectTo: "/main"});
     });

}());