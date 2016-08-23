var app = angular.module(' ', ['ui.select']);
app.controller('MyController', function($scope,Calculations) {
     $scope.itemArray = [
        {id: 1, name: 'first'},
        {id: 2, name: 'second'},
        {id: 3, name: 'third'},
        {id: 4, name: 'fourth'}
    ];

    $scope.weektotal = [];
    $scope.total = [];
 
    $scope.activities1 = [{
    	locationName: {},
    	activityName: {},
    	time: [],
    	activityTotal:""
    }];

     $scope.activities2 = [{
    	locationName: {},
    	activityName: {},
    	time: [],
    	activityTotal:""
    }];

   	$scope.addActivity = function(){
   		var activity = {
	    	locationName: {},         
	    	activityName: {},
	    	time: [],
	    	activityTotal:""
    	};
   		$scope.activities1.push(activity);
   	}

    $scope.removeActivity=function(index){ 
	  	$scope.activities1.splice(index,1);
	  	$scope.evaluate1();
	}

	$scope.addActivity2 = function(){
   		var activity = {
	    	locationName: {},
	    	activityName: {},
	    	time: [],
	    	activityTotal:""
    	};
   		$scope.activities2.push(activity);
   	}

    $scope.removeActivity2=function(index){ 
	  	$scope.activities2.splice(index,1);
	  	$scope.evaluate2();
	}

   	$scope.evaluate1 = function(){
   		$scope.activities1 = Calculations.calculateActivityTotal($scope.activities1);
   		$scope.total = Calculations.calculateTotal($scope.total,$scope.activities1,0);
   		$scope.weektotal[1] = Calculations.calculateWeekTotal($scope.weektotal[1],$scope.activities1);
  	}	

  	$scope.evaluate2 = function(){
   		$scope.activities2 = Calculations.calculateActivityTotal($scope.activities2);
   		$scope.total = Calculations.calculateTotal($scope.total,$scope.activities2,7);
   		$scope.weektotal[2] = Calculations.calculateWeekTotal($scope.weektotal[2],$scope.activities2);
  	}	

  	$scope.print = function(){
  		var str1 = JSON.stringify($scope.activities1,null,2);
  		var str2 = JSON.stringify($scope.activities2,null,2);
  		alert(str1+str2);console.log(str1+str2);
  	}


});