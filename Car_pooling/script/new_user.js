app.controller('NewUser', function(CurrentUser,$scope,$window,$state) {
	$scope.errorContent = 'User already exist.'
	$scope.displayError = false;
	$scope.disabled = function(){
		if($scope.name === undefined || $scope.password === undefined)
			return true;
		else if($scope.name === '' || $scope.password === '')
			return true;
		else
			return false;
	}

 	$scope.addUser = function(){
 		$scope.displayError = false;
 		for (var i = 0; i < $window.localStorage.length; i++){
   			if($window.localStorage.key(i) === $scope.name){
   				$scope.displayError = true;
   			}
  		}
   		if($scope.displayError === false){
 			$window.localStorage.setItem($scope.name,$scope.password);
 			console.log("Logged in as "+$scope.name);
 			CurrentUser.setUser($scope.name);
 			$state.go("start");
 		}
 	}		
});	