var registerModule=angular.module("ChatApp",[]);
registerModule.controller("registerController",registerController)
function registerController($scope){
    console.log("inside register");
    $scope.firstName="dcac";
    $scope.lastName=lastName;
    $scope.email=email;
    $scope.password=password;
    $scope.submitForm=function(){
        console.log("form submitted");

    }
}