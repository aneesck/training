var app = angular.module(' ', ['ui.select']);
app.controller('MyController', function($scope,$http,Calculations,Requests) {
  $scope.loading = true;
  $scope.weektotal = [];
  $scope.total = [];
  $scope.alerting = false;
  $scope.contents = "";
  $scope.weekDays = ["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"];
  $scope.date1 = ["3/4","3/5","3/6","3/7","3/8","3/9","3/10"];
  $scope.date2 = ["3/11","3/12","3/13","3/14","3/15","3/16","3/17"];
  $scope.activity1Checked = [];
  $scope.activity2Checked = [];

  var sampleData = ["1","2","3","4"];

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
 
  var askForPromise = Requests.getPromise("http://10.7.2.11:8080/mdtimesurvey/locations");
  askForPromise.then(
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
	  $scope.evaluate(week);
	}

	$scope.locationSelected =function(week,index){
    week[index].time = [];
		week[index].loadingAction = true;
		week[index].activityName = {};
		week[index].actionArray = [];

    var askForPromise = Requests.getPromise("http://10.7.2.11:8080/mdtimesurvey/loadactivities?location="+week[index].locationName.value);
    askForPromise.then(
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
		
  $scope.evaluate = function(week){
    var weekNo = weeks.indexOf(week) + 1;
    var start = (weekNo - 1) * 7;
   	week = Calculations.calculateActivityTotal(week);
   	$scope.total = Calculations.calculateTotal($scope.total,week,start);
   	$scope.weektotal[weekNo] = Calculations.calculateWeekTotal($scope.weektotal[weekNo],week);
	}	

	$scope.print = function(submit){
  	submitData.submitFlag = submit;
  	submitData.dataString = JSON.stringify($scope.activities1.concat($scope.activities2));
    var data = JSON.stringify(submitData);console.log(data);
    var askForPromise =Requests.post("http://10.7.2.11:8080/mdtimesurvey/save",data);
    askForPromise.then(
      function(answer) {
        console.log(answer);
        $scope.contents = "Success";
      },
      function(reason) {
        console.log("Error in service"+reason);
        $scope.contents = "Error";
      }
    );
    $scope.alerting = true;
	}

	$scope.clearText = function(week,index){
		for(var i=0; i<week.length; i++ )
		week[i].time[index]="";
		$scope.evaluate(week);
	}

	$scope.removeActivityName = function(week,index){
		week[index].time = [];
		week[index].activityName = {};
		$scope.evaluate(week);
	}
  
	$scope.removeLocationName = function(week,index){
		week[index].time = [];
		week[index].activityName = {};
		week[index].locationName = {};
		$scope.evaluate(week);
	}
  
 	$scope.displayError = function(start,end){
		for(var i=start;i<end;i++){
			if($scope.total[i] > 24)
				return true;
		}
  	return false;
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
		  			$scope.contents = "Combination already selected";
		  			$scope.alerting = true;
		  			week[index].activityName={};
		  		}
		  	}	
	  	}
	  }	
  }
});

