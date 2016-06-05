angular.module("todoApp",[])
  .controller("todoAppController", function($scope, $http){

    $scope.getTodo = function(){
      $http.get('/app/getTodo').then (function successCallback(response){
        $scope.tasks = response.data; //check
      }, function errorCallback (response){
          console.log("HTTP Effor in getTodo function");
      });
    }

    $scope.addTodo = function(){
      $http.post('/app/addTodo',{task: $scope.newTask})
        .then (function successCallback(response){
        $scope.repos = response.data;
        $scope.newTask = "";
        $scope.getTodo(); //retrives and populated all the records from the database
      }, function errorCallback(response){
        console.log("HTTP Error in addTodo function");
      });
    }

    $scope.deleteTodo = function(id){
      $http.put('/app/deleteTodo',{id:id})
        .then(function successCallback(response){
          $scope.getTodo();
        }, function errorCallback(response){
          console.log("Error in delete");
        })
    }

    $scope.updateTodo = function(task){
      $http.put('/app/updateTodo',{task:task})
        .then (function successCallback(response){
          console.log("Updated successfully");
        }, function errorCallback(response){
          console.log("Error in update");
        });
    }

  })
