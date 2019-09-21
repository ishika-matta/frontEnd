app.service("service", function ($http,$state) {

    this.dashboardService=function(scopeObj){
        console.log("entered dashboard services....49");
        $http({
            method: 'GET',
            url: 'http://localhost:5000/getUsers',
            data: scopeObj,
        })
            .then(function (success) {
                const $email=success.data.result;
                
                console.log("success api  ", $email);
            }
                , function (error) {
                    console.log("error api  ", error);

                })      
    }
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
                $state.go('dashboard')
                console.log("...........");
            }
                , function (error) {
                    console.log("error api  ", error);

                })      
    }

    this.forgotPasswordService=function(scopeObj){
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
