angular.module("app",[])

.controller("appCtrl", function($scope){
    $scope.color ="#1b1b1b";
    $scope.reverseName = function(){
        $scope.nombre = $scope.nombre.split("").reverse().join("");
    }

})

    }

)