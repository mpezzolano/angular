angular.module("app",[])


.controller("appCtrl", function($scope){
    $scope.usuarios = [
        {
            "nombre" : "juan",
            "edad"   : "28"
        },
        {
            "nombre" : "juan",
            "edad"   : "28"
        }
    ];
})