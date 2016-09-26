app.controller('JoinRide', function(CurrentUser,$scope,$window,$state) {
	document.getElementById("pill2").style.backgroundColor = "white";
    document.getElementById("pill1").style.backgroundColor = "black";
	$scope.rideList = false;
	var user = CurrentUser.getUser();
	var array;
	$scope.list = [];
	$scope.extra = [0];
	$scope.extraDetails = function(index){
		$scope.extra[index] = true;
	}
	$scope.lesserDetails = function(index){
		$scope.extra[index] = false;
	}
	$scope.join = function(index){
		var array  = [];
    	var object = {
    		'name':$scope.list[index].name,
    		'source':$scope.list[index].source,
    		'destination':$scope.list[index].destination,
    		'seats':$scope.list[index].seats,
    		'date':$scope.list[index].date,
    		'time':$scope.list[index].time
    	};
    	for (var i = 0; i < $window.localStorage.length; i++){
   			if($window.localStorage.key(i).indexOf(user+'_joined') >= 0){
   				 array = $window.localStorage.getItem($window.localStorage.key(i)) ?
              				JSON.parse($window.localStorage.getItem($window.localStorage.key(i))) : [];
				
   			}
  		}
  		array.push(object);
  		console.log(array)
		$window.localStorage.setItem(user+'_joined', JSON.stringify(array));
    	$state.go('start');
	}
	$scope.disabled = function(){
    	if($scope.source === undefined || $scope.destination === undefined )
    		return true;
    	else if($scope.source === '' || $scope.destination === '' )
    		return true;
    	else 
    		return false;
    }
	$scope.showRides = function(){
		$scope.rideList = true;
		for (var i = 0; i < $window.localStorage.length; i++){
   			if($window.localStorage.key(i).indexOf('_created') >= 0){
   				 array = $window.localStorage.getItem($window.localStorage.key(i)) ?
              				JSON.parse($window.localStorage.getItem($window.localStorage.key(i))) : [];
              	for(var j=0; j<array.length; j++){
  					if(array[j].source === $scope.source && array[j].destination === $scope.destination){
  					$scope.list.push(array[j]);
  					}
  				}			
   			}
  		}
  		
  		console.log($scope.list)
	}
});	