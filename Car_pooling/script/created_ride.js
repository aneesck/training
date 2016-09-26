app.controller('CreatedRide', function(CurrentUser,$scope,$window,$state) {
	var user = CurrentUser.getUser();
	var array;

	for (var i = 0; i < $window.localStorage.length; i++){
   			if($window.localStorage.key(i).indexOf(user+'_created') >= 0){
   				 array = $window.localStorage.getItem($window.localStorage.key(i)) ?
              				JSON.parse($window.localStorage.getItem($window.localStorage.key(i))) : [];			
   			}
  		}
  	$scope.list = array;	
  	$scope.extra = [0];
	$scope.extraDetails = function(index){
		$scope.extra[index] = true;
	}
	$scope.lesserDetails = function(index){
		$scope.extra[index] = false;
	}
});	