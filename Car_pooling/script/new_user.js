app.controller('NewUser', function($scope,$window) {
	$scope.errorContent = 'User already exist.'
	$scope.disabled = function(){
		if($scope.name === undefined || $scope.password === undefined)
			return true;
		else if($scope.name === '' || $scope.password === '')
			return true;
		else
			return false;
	}
	$scope.displayError = function(){
		if($scope.name === undefined)
			return false;
   		else{
   			for (var i = 0; i < $window.localStorage.length; i++){
   				if ($window.localStorage.key(i) === $scope.name)
   					return true;
   			}
   			return false;		
   		}
	}

 	$scope.addUser = function(){
 		$window.localStorage.setItem($scope.name,$scope.password);
	}
});	