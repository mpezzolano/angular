define(["modules/app"], function(app){

        app.factory("users"),function($resource){
            return $resource("app/resources/users.json",{},
                {
                    getUsers:{
                        method : "GET",
                        isArray: true
                    }
                }

        )}
    }


)