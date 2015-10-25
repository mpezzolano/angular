angular.module("app", ["ngRoute"])

.config(function($routeProvider){
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