/**
 * Created by USER on 5/20/2015.
 */
(function() {
    "use strict";
    angular
        .module('courseManagement')
        .controller('CourseListController', function($scope, $location){
            /*
            Course.get().success(function(data){
                $scope.courses = data;
            });
            */
            $scope.courses = [
                {
                    "id" : 1,
                    "title" : "Introduction to Project Management",
                    "description" : "An introduction to Project Management and Related Stuff"
                },
                {
                    "id" : 2,
                    "title" : "J2EE Essentials",
                    "description" : "Basics of J2EE including Servlet, Bean and JSP"
                },
                {
                    "id" : 3,
                    "title" : "Spring MVC",
                    "description" : "Spring Framework Introduction"
                }
            ];
            $scope.editCourse = function(id){
                $location.path('/courses/edit/'+id);
            };

            $scope.deleteCourse = function(id){
                //code here
            };

            $scope.viewCourse = function(id){
                $location.path('/courses/'+id);
            };
        });
}());
