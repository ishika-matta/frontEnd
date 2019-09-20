app.controller("registerController",function($scope,service){ 
    $scope.registerUser=function (){
        console.log("register user submit button hit");
        console.log("first name is : ",$scope.firstName);
        var scopeObj={};
            scopeObj.firstName=$scope.firstName;
            scopeObj.lastName=$scope.lastName;
            scopeObj.email=$scope.email;
            scopeObj.password=$scope.password;
        
        service.registerService(scopeObj);
    }
})


app.controller("loginController",function($scope,service){ 
    $scope.loginUser=function (){
        console.log($scope);
        console.log("login user submit button hit");
        var scopeObj={};
            scopeObj.email=$scope.email;
            scopeObj.password=$scope.password;
        
        service.loginService(scopeObj);
    }
})

app.controller("forgotPasswordController",function($scope,service){    
    $scope.forgotPassword=function (){
        var scopeObj={};
            scopeObj.email=$scope.email;
        console.log("forgot password submit button hit");
        service.forgotPasswordService(scopeObj);

    }
})

app.controller("resetPasswordController",function($scope,service){    
    $scope.forgotPassword=function (){
        var scopeObj={};
            scopeObj.password=$scope.password;
            scopeObj.confirmPassword=$scope.confirmPassword;
        console.log("reset password submit button hit");
        service.forgotPasswordService(scopeObj);

    }
})




