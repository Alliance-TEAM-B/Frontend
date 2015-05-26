/**
 * Created by USER on 5/16/2015.
 */
(function(){
    "use strict";


    angular
        .module("userManagement")
        .controller("UserListController",function($scope,$location,User){

            User.get().success(function(data){
               $scope.users = data;
            });

            $scope.editUser = function(userid){
                $location.path('/users/edit/'+userid);
            };

            $scope.deleteUser = function(userid){
                User.destroy(userid)
                    .success(function(data,status,headers){
                        User.get().success(function(data){
                            $scope.users = data;
                        });
                    })
                    .error(function(data, status, headers){
                        console.log(data+"\n"+status+"\n"+headers);
                    })
            };

            $scope.viewUser = function(userid){
                $location.path('/users/'+userid);
            };
        });


    angular
        .module("userManagement")
        .controller("UserEditController",['$scope', 'User', '$stateParams', function ($scope,User, $stateParams){
            //profile view here
            $scope.userData = {};
            User.view($stateParams.userid).success(function(data){
                        $scope.userData = data;
                        console.log($scope.userData);
            });
            $scope.submit = function(){
                var userDataJSON = JSON.stringify($scope.userData);
                User.update($scope.userData)
                    .success(function(data, status, headers){
                        User.get().success(function(getData){
                            $scope.users = getData;
                            console.log("nilusot");
                            console.log(userDataJSON);
                        })
                        $scope.clear();
                    })
                    .error(function(data, status, headers){
                        console.log(userDataJSON);
                    })
            };

            $scope.clear = function(){
                $scope.userData.username = "";
                $scope.userData.password = "";
                $scope.userData.firstName = "";
                $scope.userData.lastName = "";
                $scope.userData.role = "";
                $scope.userData.email = "";
                $scope.userData.businessUnit = "";
                $scope.userData.birthDate = "";
                $scope.userData.type = "";

            };

        }]);



    angular
        .module("userManagement")
        .controller("UserAddController",UserAddContdroller);

    function UserAddController($scope, $http, User){

        $scope.userData = {};
        $scope.submit = function(){
            var userDataJSON = JSON.stringify($scope.userData);
            User.save($scope.userData)
                .success(function(data, status, headers){
                    User.get().success(function(getData){
                        $scope.users = getData;
                        console.log("nilusot");
                        console.log(userDataJSON);
                    })
                    $scope.clear();
                })
                .error(function(data, status, headers){
                    console.log(userDataJSON);
                })
        };

        $scope.clear = function(){
            $scope.userData.username = "";
            $scope.userData.password = "";
            $scope.userData.firstName = "";
            $scope.userData.lastName = "";
            $scope.userData.role = "";
            $scope.userData.email = "";
            $scope.userData.businessUnit = "";
            $scope.userData.birthDate = "";
            $scope.userData.type = "";

        };
    }
}());
