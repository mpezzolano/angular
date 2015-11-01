define(["modules/app","controllers/homeCtrl","controllers/loginCtrl"], function(app){

    return app.config(function($stateProvider,$urlRouterProvider){

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: './app/templates/home.html?bust=' + app_version,
                controller: "homeCtrl"
            })
            .state('login', {
                url: "/login",
                templateUrl: './app/templates/login.html?bust=' + app_version,
                controller: "loginCtrl"
            })

        $urlRouterProvider.otherwise('/');
    })


})
