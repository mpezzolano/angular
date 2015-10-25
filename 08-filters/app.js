angular.module("app",[])


.controller("appCtrl", function($scope){
    $scope.usuarios = [
        {nombre : "juan",telefono : '12345', edad : '32'},
        {nombre : "pablo",telefono : '1325', edad : '21'},
        {nombre : "Sergio",telefono : '678543', edad : '33'},
        {nombre : "Pedro",telefono : '432', edad : '50'},
        {nombre : "andres",telefono : '55555', edad : '40'},
        {nombre : "lucia",telefono : '55566565', edad : '20'},
    ];
})