app.controller('OldUser', function($scope,$window) {
	$scope.errorContent = 'User not registered.'
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
   				if ($window.localStorage.key(i) === $scope.name && $scope.password !== undefined){
   					$scope.errorContent = 'Incorrect password.'
   					if($window.localStorage.getItem($scope.name) !== $scope.password)
   						return true;
   				}
   			}
   			return true;		
   		}
	}
});	