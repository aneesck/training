app.controller('MyController', function($scope,$http,Calculations,Requests,SharedData,$filter) {
  $scope.loading = true;
  $scope.weektotal = [];
  $scope.total = [];
  $scope.alerting = false;
  $scope.pushAlert = false;
  $scope.description = false;
  $scope.menuboxOpen = false;
  $scope.contents = "";
  $scope.submitPopup = false;
  $scope.contentsHeading = "";
  $scope.activity1Checked = [];
  $scope.activity2Checked = [];
  $scope.date1 = [];
  $scope.date2 = [];
  var sampleData = ["1","2","3","4"];
  $scope.weekDays = ["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"]
  
  var dates = SharedData.getValues();
  $scope.weekOne = dates.weekOne;
  $scope.weekTwo = dates.weekTwo;   
  $scope.closingDate = dates.closingDate;
  $scope.date1 = dates.date1;
  $scope.date2 = dates.date2;

  var submitData = {
    submitFlag:0,
    dataString:[{}]
  }

  var activity = function(){
    this.locationName = {};         
    this.activityName = {};
    this.time = [];
    this.activityTotal = "";
    this.actionArray = [];
    this.loadingAction = false;
  };

  $scope.activities1 = [new activity];
  $scope.activities2 = [new activity];
  var weeks = [$scope.activities1,$scope.activities2];
  
 
  var getLocations = Requests.getPromise("http://10.7.2.11:8080/mdtimesurvey/locations");
  getLocations.then(
    function(answer) {
      console.log(answer.data.data);
      $scope.locationArray = answer.data.data;
      $scope.loading = false;
    },
    function(reason) {
      console.log("Error in service"+reason);
      $scope.locationArray = sampleData;
      $scope.loading = false;
    }
  );

 	$scope.addActivity = function(week){
 		week.push(new activity);
 	}

  $scope.removeActivity=function(week,index){ 
    week.splice(index,1);
	}

	$scope.locationSelected =function(week,index){
    week[index].time = [];
		week[index].loadingAction = true;
		week[index].activityName = {};
		week[index].actionArray = [];

    var getActivityName = Requests.getPromise("http://10.7.2.11:8080/mdtimesurvey/loadactivities?location="+week[index].locationName.value);
    getActivityName.then(
      function(answer) {
        console.log(answer.data.data);
        week[index].actionArray = answer.data.data;
        week[index].loadingAction = false;
      },
      function(reason) {
        console.log("Error in service"+reason);
        week[index].actionArray = sampleData;
        week[index].loadingAction = false;
      }
    );
  }
		
  var evaluate = function(week){
    var weekNo = weeks.indexOf(week) + 1;
    var start = (weekNo - 1) * 7;
   	week = Calculations.calculateActivityTotal(week);
   	$scope.total = Calculations.calculateTotal($scope.total,week,start);
   	$scope.weektotal[weekNo] = Calculations.calculateWeekTotal($scope.weektotal[weekNo],week);
	}	
  $scope.$watch('activities1',function(){evaluate($scope.activities1);},true);
  $scope.$watch('activities2',function(){evaluate($scope.activities2);},true);

	$scope.print = function(submit){
  	submitData.submitFlag = submit;
  	submitData.dataString = JSON.stringify($scope.activities1.concat($scope.activities2));
    var data = JSON.stringify(submitData);console.log(data);
    var dataStoreLocation =Requests.post("http://10.7.2.11:8080/mdtimesurvey/save",data);
    dataStoreLocation.then(
      function(answer) {
        console.log(answer);
        $scope.contents = "Success";
        $scope.contentsHeading = "Data Saved";
        $scope.alerting = true;
        $scope.pushAlert = true;
      },
      function(reason) {
        console.log("Error in service"+reason);
        $scope.contents = "An error occurred while connecting to the server, please check your connectivity and try again. Contact administrator if the error persists.";
        $scope.contentsHeading = "Connection Error";
        $scope.alerting = true;
        $scope.pushAlert = true;
      }
    );
	}

	$scope.clearText = function(week,index){
		for(var i=0; i<week.length; i++ )
		week[i].time[index]="";
	}

	$scope.removeActivityName = function(week,index){
		week[index].time = [];
		week[index].activityName = {};
	}
  
	$scope.removeLocationName = function(week,index){
		week[index].time = [];
		week[index].activityName = {};
		week[index].locationName = {};
	}
  
 	$scope.displayError = function(start,end){
		for(var i=start;i<end;i++){
			if($scope.total[i] > 24)
				return true;
		}
  	return false;
  }
  	
  $scope.disableButton = function(){
    if($scope.displayError(0,7) || $scope.displayError(7,14))
      return true;
    if(angular.isNumber($scope.weektotal[1]))
      return false;
    return (!angular.isNumber($scope.weektotal[2]));
  }  
  $scope.compareSelect = function(week,index){
  	if(week[index].activityName.value !== undefined){
	 		var selectedString = week[index].locationName.value
	  			+week[index].activityName.value.label;
	 		for(var i=0;i<week.length;i++){
	  		if((week[i].locationName.value !== undefined) &&
	  				(week[i].activityName.value !== undefined) && (i !== index)){
		  		var compareString = week[i].locationName.value+
		  				week[i].activityName.value.label;
		  		if(selectedString === compareString){
		  			$scope.contents = "This Location/Activity cannot be repeated twice this week.";
            $scope.contentsHeading = "Selection Not possible";
		  			$scope.alerting = true;
            $scope.pushAlert = true;
		  			week[index].activityName={};
		  		}
		  	}	
	  	}
	  }	
  }
});

