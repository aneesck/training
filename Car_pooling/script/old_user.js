app.controller('OldUser', function(CurrentUser,$scope,$window,$state) {
	$scope.errorContent = 'User not registered.';
	$scope.displayError = false;
	$scope.disabled = function(){
		if($scope.name === undefined || $scope.password === undefined)
			return true;
		else if($scope.name === '' || $scope.password === '')
			return true;
		else
			return false;
	}
	$scope.login = function(){
 		$scope.displayError = false;
 		var found = 0;
 		for (var i = 0; i < $window.localStorage.length; i++){
   			if($window.localStorage.key(i) === $scope.name){
   				found =1;
   				if($window,localStorage.getItem($scope.name) !== $scope.password){
   					$scope.errorContent = 'Incorrect password.'
   					$scope.displayError = true;
   				}	
   			}
   		}
   		if(!found){
   			$scope.errorContent = 'User not registered.';
   			$scope.displayError = true;
   		}	
   		if($scope.displayError === false){
            console.log("Logged in as "+$scope.name);
            CurrentUser.setUser($scope.name);
 			   $state.go("start");
         }
 		
 	}
});	