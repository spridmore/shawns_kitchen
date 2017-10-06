angular
.module("myApp")
.service("profileService", function($http) {

    this.getUsers = function() {
        return $http.get('http://localhost:3000/users');
    }

    this.createUser = function(firstName, lastName, email, password) {
        return $http({
            url: 'http://localhost:3000/users/register',
            method: "POST",
            data: { "first_name" : firstName, "last_name" : lastName, "email" : email, "password" : password }
        }).then(function(response){
            
        })
    }
})
