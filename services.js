app.service("service", function ($http) {
    this.registerService = function (scopeObj) {
        console.log("inside services   ", scopeObj);
        $http({
            method: 'POST',
            url: 'http://localhost:5000/register',
            data: scopeObj,
        })
            .then(function (success) {
                console.log("success api  ", success);
            }
                , function (error) {
                    console.log("error api  ", error);

                })
    }

    this.loginService=function(scopeObj){
        $http({
            method: 'POST',
            url: 'http://localhost:5000/login',
            data: scopeObj,
        })
            .then(function (success) {
                console.log("success api  ", success);
            }
                , function (error) {
                    console.log("error api  ", error);

                })      
    }

    this.forgotPasswordService=function(scopeObj){
        console.log("eewxwx");
        $http({
            method: 'POST',
            url: 'http://localhost:5000/forgotPassword',
            data: scopeObj,
        })
            .then(function (success) {
                console.log("success api  ", success);
            }
                , function (error) {
                    console.log("error api  ", error);

                })      
    }
})
