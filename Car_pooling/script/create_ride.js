app.controller('CreateRide', function(CurrentUser,$scope,$window,$state) {
	document.getElementById("pill1").style.backgroundColor = "white";
    document.getElementById("pill2").style.backgroundColor = "black";
    var user = CurrentUser.getUser();
    $scope.disabled = function(){
    	if($scope.source === undefined || $scope.destination === undefined || $scope.seats === undefined || $scope.date === undefined || $scope.time === undefined)
    		return true;
    	else if($scope.source === '' || $scope.destination === '' || $scope.seats === '' || $scope.date === '' || $scope.time === '')
    		return true;
    	else 
    		return false;
    }
    $scope.save = function(){
    	var array  = [];
    	var object = {
    		'name':user,
    		'source':$scope.source,
    		'destination':$scope.destination,
    		'seats':$scope.seats,
    		'date':$scope.date,
    		'time':$scope.time
    	};
    	for (var i = 0; i < $window.localStorage.length; i++){
   			if($window.localStorage.key(i).indexOf(user+'_created') >= 0){
   				 array = $window.localStorage.getItem($window.localStorage.key(i)) ?
              				JSON.parse($window.localStorage.getItem($window.localStorage.key(i))) : [];
				
   			}
  		}
  		array.push(object);
  		console.log(array)
		$window.localStorage.setItem(user+'_created', JSON.stringify(array));
    	$state.reload();
    }
});	