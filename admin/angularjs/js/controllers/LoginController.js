/**
 * Created by USER on 5/16/2015.
 */
/**
 * Created by USER on 5/16/2015.
 */
(function(){
    "use strict";
    angular
        .module("LoginApp")
        .controller("LoginController",
        function($scope,$location){
            $scope.users = [
                {
                    "username" : "kentoy",
                    "password" : "kentoy"
                },

                {
                    "username" : "admin",
                    "password" : "1234"
                }
            ];

            $scope.submit = function(user){

                $location.path('/dashboard');
                console.log("Kentoy Chuy");
                /*forEach(u in $scope.users)
                {
                    if(user.username == u.username && user.password == u.password){
                        $location.path('/dashboard');
                    }else{
                        console.log("Kentoy Chuy");
                    }

                }*/
            };

        });
}());
