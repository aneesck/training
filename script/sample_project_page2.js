var app = angular.module(' ', ['ui.select']);
app.controller('MyController', function($scope) {
     $scope.itemArray = [
        {id: 1, name: 'first'},
        {id: 2, name: 'second'},
        {id: 3, name: 'third'},
        {id: 4, name: 'fourth'}
    ];

    
    
    $scope.activitytotal = [];

    $scope.activities = [{
    	locationName: {},
    	activityName: {},
    	time: []
    }];

    $scope.activity = [{}];
   	$scope.addActivity = function(){
   		$scope.activity.push({});
   	}

    $scope.removeActivity=function($index){ 
  $scope.activity.splice($index,1);    
}






    
    $scope.weektotal = [];
    $scope.value = [[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    $scope.total = [[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
 

   	$scope.evaluate1 = function(){
   		// alert($scope.location1.value.name);
   		for(var j=0; j<$scope.activity.length; j++){
   		$scope.activitytotal[j] = 0;
	   		for(var i=0; i<7; i++){
	   			if( (!isNaN($scope.activities[j].time[i])) && $scope.activities[j].time[i] !== '' ) {
	   				$scope.activitytotal[j]= $scope.activitytotal[j]+parseFloat($scope.activities[j].time[i]);
	   			}
	   		}
	   		if($scope.activitytotal[j] === 0)
	   			$scope.activitytotal[j] = "";	
   		}

   		for(var i = 0; i<7; i++){
   			$scope.total[i] = 0;
   			for(var j=0; j<$scope.activity.length; j++){
   				if( (!isNaN($scope.activities[j].time[i])) && $scope.activities[j].time[i] !== '' ) {
	   				$scope.total[i]= $scope.total[i]+parseFloat($scope.activities[j].time[i]);
	   			}
   			}
   			if($scope.total[i] === 0)
	   			$scope.total[i] = "";	
   		}

 
   			$scope.weektotal[1]=0;
   			for(var j=0; j<$scope.activity.length; j++){
   				if( (!isNaN($scope.activitytotal[j])) && $scope.activitytotal[j] !== '' ) {
	   				$scope.weektotal[1]= $scope.weektotal[1]+parseFloat($scope.activitytotal[j]);
	   			}
   			}
   			if($scope.weektotal[1] === 0)
	   			$scope.weektotal[1] = "";
   		

   	}	





$scope.evaluate2 = function(){
   		for(var j=3; j<5; j++){
   		$scope.activitytotal[j] = 0;
	   		for(var i=1; i<8; i++){
	   			if( (!isNaN($scope.value[j][i])) && $scope.value[j][i] !== '' ) {
	   				$scope.activitytotal[j]= $scope.activitytotal[j]+parseFloat($scope.value[j][i]);
	   			}
	   		}
	   		if($scope.activitytotal[j] === 0)
	   			$scope.activitytotal[j] = "";	
   		}

   		for(var i = 1; i<8; i++){
   			$scope.total[2][i] = 0;
   			for(var j=3; j<5; j++){
   				if( (!isNaN($scope.value[j][i])) && $scope.value[j][i] !== '' ) {
	   				$scope.total[2][i]= $scope.total[2][i]+parseFloat($scope.value[j][i]);
	   			}
   			}
   			if($scope.total[2][i] === 0)
	   			$scope.total[2][i] = "";	
   		}

 
   			$scope.weektotal[2]=0;
   			for(var j=3; j<5; j++){
   				if( (!isNaN($scope.activitytotal[j])) && $scope.activitytotal[j] !== '' ) {
	   				$scope.weektotal[2]= $scope.weektotal[2]+parseFloat($scope.activitytotal[j]);
	   			}
   			}
   			if($scope.weektotal[2] === 0)
	   			$scope.weektotal[2] = "";
   		

   	}



   	
});