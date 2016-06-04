angular.module("todoApp",[])
  .controller("todoAppController", function($scope, $http){

    $scope.getTodo = function(){
      http({
        method:'GET',
        url:'/app/getTodo'
      }).then (function successCallback(response){
        $scope.tasks = response.data; //check
      }, function errorCallback (response){
          console.log("HTTP Effor in getTodo function");
      });
    }

    $scope.addTodo = function(){
      console.log("new task"+$scope.newTask);
      $http.post('/app/addTodo',{task: $scope.newTask})
        .then (function successCallback(response){
        $scope.repos = response.data;
        $scope.newTask = "";
        $scope.getTodo(); //retrives and populated all the records from the database
      }, function errorCallback(response){
        console.log("HTTP Error in addTodo function");
      });
    }

  })
