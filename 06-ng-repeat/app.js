angular.module("app",[])

.controller("appCtrl", function($scope){
    $scope.usuarios = [
        {
            "nombre" : "Juan",
            "edad"   : "28"
        },
        {
            "nombre" : "Pablo",
            "edad"   : "25"
        }
    ];

})