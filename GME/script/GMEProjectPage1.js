app.controller("DateRange", function($scope,SharedData){
  $scope.range1 = {
    start: '',
    end: ''
  };

 $scope.format1 = 'MM/DD/YYYY';

  $scope.range2 = {
    start: '',
    end: ''
  };
  $scope.format2 = 'MM/DD/YYYY';    
 

  var dateSlected, startDateAdder, startDate, endDate, closingDate;
  $scope.comparisonResult = false;

  $scope.check = function(){
    dateSlected = new Date($scope.range1.start);
    startDateAdder = dateSlected.getDay() - 1;
    startDate = new Date(dateSlected.getTime() - startDateAdder * 24 * 60 * 60 * 1000);
    endDate = new Date(startDate.getTime() + 13 * 24 * 60 * 60 * 1000);
    compareDate = endDate.getTime();
    startDate = formattedDate(startDate);
    endDate = formattedDate(endDate);
    $scope.range1.start = startDate;
    $scope.range1.end = endDate;

    closingDate = new Date($scope.range2.start);
    $scope.comparisonResult = closingDate > compareDate;
    closingDate = formattedDate(closingDate);
  
  }

  var formattedDate = function(date) {
    var todayTime = new Date(date);
    var month = todayTime .getMonth() + 1;
    var day = todayTime .getDate();
    var year = todayTime .getFullYear();
    return month + "/" + day + "/" + year;
}

  $scope.print = function(){
    SharedData.setValues(startDate,endDate,closingDate);
  }

});

