app.controller("resetPasswordController",resetPasswordController)
function resetPasswordController($scope){
    $scope.resetPassword=function (){
        // $scope.email="";
        // $scope.password="";
        // $scope.confirmPassword="";
        console.log($scope);
        console.log("reset password submit button hit");
    }
}