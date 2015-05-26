/*(function() {
    "use strict";
    angular.module('userServices',['ngResource'])
        .factory('UsersFactory', function($resource){
            return $resource('/users',{},{
                query: {method: 'GET', isArray: 'true'},
                create: {method: 'POST'}
            })
        })
        .factory('UserFactory',function($resource){
            return $resource('/users/:id',{}, {
                show: {method: 'GET'},
                update: {method: 'PUT', params: {'id': '@id'}},
                delete: {method: 'DELETE', params: {'id': '@id'}}
            })
        })
});
*/
angular.module('userService', [])

    .factory('User', function($http){

        return {
            get: function(){
                return $http.get('http://192.168.1.183:8080/AES/api/usermanagement/users'); //http://192.168.1.183:8080/AES/api/usermanagement/users
            },
            view: function(userid){
                return $http.get('http://192.168.1.183:8080/AES/api/usermanagement/users/'+userid);
            },
            save: function(userData){
                return $http({
                    method: 'POST',
                    dataType: 'json',
                    url: 'http://192.168.1.183:8080/AES/api/usermanagement/register',
                    headers: {'Content-Type': 'application/json'}, //'application/x-www-form-urlencoded'
                    data: JSON.stringify(userData)
                });
            },
            update: function(userData){
                return $http({
                    method: 'POST',
                    dataType: 'json',
                    url: 'http://192.168.1.183:8080/AES/api/usermanagement/update',
                    headers: {'Content-Type': 'application/json'}, //'application/x-www-form-urlencoded'
                    data: JSON.stringify(userData)
                });
            },
            destroy: function(id){
                return $http.get('http://192.168.1.183:8080/AES/api/usermanagement/delete/'+ id);
            }
        };
    });

angular.module('courseService', [])

    .factory('Course', function($http){

        return {
            get: function(){
                return $http.get('http://192.168.1.183:8080/AES/api/coursemanagement/courses'); 
            },
           view: function(id){
                return $http.get('http://192.168.1.183:8080/AES/api/coursemanagement/courses/'+id);
            },
            save: function(courseData){
                return $http({
                    method: 'POST',
                    dataType: 'json',
                    url: 'http://192.168.1.183:8080/AES/api/coursemanagement/add',
                    headers: {'Content-Type': 'application/json'}, //'application/x-www-form-urlencoded'
                    data: JSON.stringify(courseData)
                });
            },
            update: function(userData){
                return $http({
                    method: 'POST',
                    dataType: 'json',
                    url: 'http://192.168.1.183:8080/AES/api/coursemanagement/update',
                    headers: {'Content-Type': 'application/json'}, //'application/x-www-form-urlencoded'
                    data: JSON.stringify(userData)
                });
            },
            destroy: function(id){
                return $http.get('http://192.168.1.183:8080/AES/api/coursemanagement/delete/'+ id);
            }
        };
    });




