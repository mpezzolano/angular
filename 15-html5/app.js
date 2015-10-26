angular.module("app", ["ngRoute"])

.config(function($routeProvider,$locationProvider){
        $routeProvider.when("/home", {
           templateUrl : "templates/home.html",
           controller  : "homeCtrl"
        })
        .when("/login", {
           templateUrl : "templates/login.html",
           controller  : "loginCtrl"
        })
        .when("/register", {
            templateUrl : "templates/register.html",
            controller  : "registerCtrl"
        })
        .otherwise({ redirectTo : "/" });

        $locationProvider.html5Mode(true);

})

.controller("homeCtrl", function()
    {

    })


.controller("loginCtrl", function()
    {

    })

.controller("registerCtrl", function()
    {

    })