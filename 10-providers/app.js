angular.module("app",[])

.controller("appCtrl",function($scope,navigatorInfo)
    {
        console.log(navigatorInfo.getBrowser)
    })

.provider("navigatorInfo",function(){

    return{
     getBrowser: function(){

        if(navigator.appName == "Microsoft Internet Explorer"){
            return "msie";
        }

        //Chrome
        if((navigator.userAgent.toLowerCase().indexOf('chrome') > -1) && (navigator.userAgent.toLowerCase().indexOf('safari') > -1) && (navigator.appName == "Netscape")){
            return "chrome";
        }
        //Firefox
        if((navigator.userAgent.toLowerCase().indexOf('firefox') > -1) && (navigator.appName == "Netscape")){
            return "firefox";
        }
        //Safari
        if((navigator.userAgent.toLowerCase().indexOf('safari') > -1) && !(navigator.userAgent.toLowerCase().indexOf('chrome') > -1) && (navigator.appName == "Netscape")){
            return "safari";
        }

        //Opera
        if(navigator.appName == "Opera"){
            return "opera";
        }
     },
     $get: function(){
       return { getBrowser: this.getBrowser() }
     }
    }

})

.config(function(navigatorInfoProvider)
    {
        console.log(navigatorInfoProvider.getBrowser());
    }
)