app.controller('StartPage', function(CurrentUser,$scope,$state) {
	$scope.currentUser = CurrentUser.getUser();
	$scope.logout = function(){
		console.log($scope.currentUser+" logged out");
		$scope.currentUser = '';
		CurrentUser.setUser($scope.currentUser);
		$state.go('home');
	}
});	