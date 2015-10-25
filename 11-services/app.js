angular.module("app",[])

.controller("appCtrl",function($scope, Users)
    {
        $scope.users = Users.usuarios();
    })

.service("Users", function()
    {
        this.usuarios = function(){
            return [
                {
                    id : 0,
                    nombre : "sergio",
                    edad : "32 años"
                },
                {
                    id : 1,
                    nombre : "juan",
                    edad : "24 años"
                },
                {
                    id : 2,
                    nombre : "pedro",
                    edad : "30 años"
                },
                {
                    id : 3,
                    nombre : "Ana",
                    edad : "20 años"
                }
            ]
        }
    }
)


