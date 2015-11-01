require.configr({
    baseUrl: "./app",
    waitSeconds: 20,
    paths: {
        'angular': '../bower_components/angular/angular',
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        'ui-return': '../bower_components/angular-ui-router/release/angular-ui-router',
        'ngstorage': '../bower_components/ngstorage/ngStorage.min',

    },
    shim: {
        'angular' : { 'exports' : 'angular' },
        'angular-resource' : { deps : ['angular'] },
        'ui-router' : { deps: ['angular']  }
    }
})

require(["angular","routes/routes"], function (angular,router)
    {
        return angular.bootstrap(document,["app"]);
    }
)



