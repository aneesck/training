var app = angular.module(" ",[]);
app.controller("conv", function($scope, Dictionary, Equations){
	
	$scope.selected_tab = 1;
	$scope.input_data = 0;
	$scope.output_data = 0;
	$scope.tabs = ['length', 'temp', 'time', 'area'];
	
	$scope.all_units = Equations.units;

	$scope.units = $scope.all_units[$scope.tabs[0]];
	$scope.input_unit =  $scope.units[0];
	$scope.output_unit = $scope.units[1];
	
	var askForPromise = Dictionary.getPromise();
 		askForPromise.then(
        function(answer) {
        	$scope.contents = answer.data;
        },
       function(reason) {
         	console.log("Error in service"+reason);
        }
      );
		
	$scope.selectTab = function(tab){
		$scope.selected_tab = tab;
		$scope.units = $scope.all_units[$scope.tabs[tab-1]];
		$scope.input_unit = $scope.units[0];
		$scope.output_unit = $scope.units[1];
		$scope.input_data = 0;
		$scope.output_data = 0;
	}

	$scope.isVisible = function(tab){
		return $scope.selected_tab === tab;
	}

	$scope.convert = function(){  
		$scope.output_data = Equations[$scope.tabs[$scope.selected_tab-1]]
			.convert($scope.input_unit, $scope.output_unit, $scope.input_data,$scope.contents);
	}
});
