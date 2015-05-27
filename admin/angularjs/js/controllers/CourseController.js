/**
 * Created by USER on 5/20/2015.
 */
(function() {
    "use strict";
    angular
        .module('courseManagement')
        .controller('CourseListController', function($scope, $location){
           
     	    User.get().success(function(data){
               $scope.courses = data;
            });

            $scope.editCourse = function(id){
                $location.path('/courses/edit/'+id);
            };

            $scope.deleteCourse = function(id){
                //code here
                Course.destroy(id)
                    .success(function(data,status,headers){
                        Course.get().success(function(data){
                            $scope.courses = data;
                        });
                    })
                    .error(function(data, status, headers){
                        console.log(data+"\n"+status+"\n"+headers);
                    })
            };

            $scope.viewCourse = function(id){
                $location.path('/courses/'+id);
            };
        });
        
    angular
        .module("courseManagement")
        .controller("CourseEditController",['$scope', 'Course', '$stateParams', function ($scope, Course, $stateParams){
            //profile view here
            $scope.courseData = {};
            Course.view($stateParams.id).success(function(data){
                        $scope.courseData = data;
                        console.log($scope.courseData);
            });
            $scope.submit = function(){
                var courseDataJSON = JSON.stringify($scope.courseData);
                Course.update($scope.courseData)
                    .success(function(data, status, headers){
                        Course.get().success(function(getData){
                            $scope.courses = getData;
                            console.log("nilusot");
                            console.log(courseDataJSON);
                        })
                        $scope.clear();
                    })
                    .error(function(data, status, headers){
                        console.log(courseDataJSON);
                    })
            };

            $scope.clear = function(){
                $scope.courseData.title = "";
                $scope.courseData.description = "";

            };

        }]);
        
    angular
        .module("courseManagement")
        .controller("CourseAddController",CourseAddController);

    function CourseAddController($scope, $http, Course){

        $scope.courseData = {};
        $scope.submit = function(){
            var courseDataJSON = JSON.stringify($scope.courseData);
            Course.save($scope.courseData)
                .success(function(data, status, headers){
                    Course.get().success(function(getData){
                        $scope.courses = getData;
                        console.log("nilusot");
                        console.log(courseDataJSON);
                    })
                    $scope.clear();
                })
                .error(function(data, status, headers){
                    console.log(courseuseDataJSON);
                })
        };

        $scope.clear = function(){
            $scope.courseData.title = "";
            $scope.courseData.description = "";

        };
    }
    
}());

