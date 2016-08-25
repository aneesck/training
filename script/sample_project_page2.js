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
    $scope.alerting = false;
    $scope.contents = "";
 
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
  		$scope.contents = str1+str2;
  		$scope.alerting = true;
  	}

  	$scope.clearText = function(index){
  		for(var i=0; i<$scope.activities1.length; i++ )
  			$scope.activities1[i].time[index]="";
  		$scope.evaluate1();
  	}

  	$scope.clearText2 = function(index){
  		for(var i=0; i<$scope.activities2.length; i++ )
  			$scope.activities2[i].time[index]="";
  		$scope.evaluate2();
  	}
  	$scope.removeActivityName = function(index){
  		$scope.activities1[index].time = [];
  		$scope.activities1[index].activityName = {};
  		$scope.evaluate1();
  	}
  	$scope.removeLocationName = function(index){
  		$scope.activities1[index].time = [];
  		$scope.activities1[index].activityName = {};
  		$scope.activities1[index].locationName = {};
  		$scope.evaluate1();
  	}
  	$scope.removeActivityName2 = function(index){
  		$scope.activities2[index].time = [];
  		$scope.activities2[index].activityName = {};
  		$scope.evaluate2();
  	}
  	$scope.removeLocationName2 = function(index){
  		$scope.activities2[index].time = [];
  		$scope.activities2[index].activityName = {};
  		$scope.activities2[index].locationName = {};
  		$scope.evaluate2();
  	}
  	$scope.displayError = function(){
  		for(var i=0;i<7;i++){
  			if($scope.total[i] > 24)
  				return true;
  		}
  		return false;
  	}
  	$scope.displayError2 = function(){
  		for(var i=7;i<14;i++){
  			if($scope.total[i] > 24)
  				return true;
  		}
  		return false;
  	}
  	$scope.compareSelect = function(index){
  		if($scope.activities1[index].activityName.value !== undefined){
	  		var selectedString = $scope.activities1[index].locationName.value.name
	  			+$scope.activities1[index].activityName.value.name;
	  		for(var i=0;i<$scope.activities1.length;i++){
	  			if(($scope.activities1[i].locationName.value !== undefined) &&
	  			 						($scope.activities1[i].activityName.value !== undefined) && (i !== index)){
		  			var compareString = $scope.activities1[i].locationName.value.name+
		  								$scope.activities1[i].activityName.value.name;
		  			if(selectedString === compareString){
		  				$scope.contents = "Combination already selected";
		  				$scope.alerting = true;
		  				$scope.activities1[index].activityName={};
		  			}
		  		}	
	  		}
	  	}	
  	}
  	$scope.compareSelect2 = function(index){
  		if($scope.activities1[index].activityName.value !== undefined){
	  		var selectedString = $scope.activities2[index].locationName.value.name
	  			+$scope.activities2[index].activityName.value.name;
	  		for(var i=0;i<$scope.activities2.length;i++){
	  				if(($scope.activities2[i].locationName.value !== undefined) &&
	  			 						($scope.activities2[i].activityName.value !== undefined) && (i !== index)){
		  			var compareString = $scope.activities2[i].locationName.value.name+
		  								$scope.activities2[i].activityName.value.name;
		  			if(selectedString === compareString){
		  				$scope.contents = "Combination already selected";
		  				$scope.alerting = true;
		  				$scope.activities2[index].activityName={};
		  			}
		  		}	
	  		}
	  	}	
  	}
});

