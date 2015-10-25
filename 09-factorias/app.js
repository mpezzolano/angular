angular.module("app",[])

.controller("appCtrl",function($scope, Users)
    {
       $scope.users = Users.get();
    })

.factory("Users", function()
    {
        return {
            get : function(){
                return [
                    {nombre:'juan', telefono:'123343', edad:'32'},
                    {nombre:'pablo', telefono:'1456343', edad:'33'},
                    {nombre:'roman', telefono:'312334', edad:'20'},
                    {nombre:'sergio', telefono:'1456343', edad:'43'},
                    {nombre:'julio', telefono:'212334', edad:'20'},
                    {nombre:'bill', telefono:'7456343', edad:'43'},
                ]
            }
        }
    }
)