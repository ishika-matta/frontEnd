app.service("service", function ($http,$state) {

    this.dashboardService=function(scopeObj,callback){
        console.log("entered dashboard services....49");
        $http({
            method: 'GET',
            url: 'http://localhost:5000/getUsers',
            data: scopeObj,
        })
            .then(function (success) {
              
                console.log("success api  ", success);
                callback(null,success.data.result)
            }
                , function (error) {
                    console.log("error api  ", error);
                    callback(err);

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
                $state.go('dashboard');
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


    this.resetPasswordService = function (scopeObj,token) {
       
           
           $http({
               method: 'POST',
               url: 'http://localhost:5000/resetPassword',
               headers: {
                   'token': token
                 },
               data: scopeObj
           })
           .then(function (success) {
            console.log("success api  ", success);
        }
            , function (error) {
                console.log("error api  ", error);

            })

        }
    })
