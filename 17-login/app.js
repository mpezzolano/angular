angular.module("app",["ui.router","ngMessages","ngStorage"])

.config(function($stateProvider, $urlRouterProvider){

        $stateProvider
            .state("app", {
                abstract: true,
                templateUrl: "templates/navigation.html",
                controller: "navigationCtrl"
            })
            .state("app.dashboard",{
                url:"/dashboard",
                templateUrl: "templates/dashboard.html",
                controller: "dashboardCtrl",
                authenticate:true
            })
            .state("app.users",{
                url:"/users",
                templateUrl: "templates/users.html",
                controller: "usersCtrl",
                authenticate:true
            })
            .state("app.login",{
                url:"/login",
                templateUrl: "templates/login.html",
                controller: "loginCtrl",
                authenticate:false
            })



     $urlRouterProvider.otherwise("/login");
})

.controller("navigationCtrl", function($scope, $state){

})

.controller("dashboardCtrl", function($scope, $state){

})

.controller("userCtrl", function($scope, $state){

})

.controller("loginCtrl", function($scope, $state){

})







