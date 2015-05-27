/**
 * Created by USER on 5/15/2015.
 */
(function(){
    "use strict";
    angular
        .module("userManagement")
        .controller("UserAddController",
        UserAddController);

    function UserAddController(){
        var vm = this;
        var defaultForm = {
            username : ""
        };
        vm.clear = function(){
            vm.newUserForm.$setPristine();
            vm.user = defaultForm;
        };
    }
}());
