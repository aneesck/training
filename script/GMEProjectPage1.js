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
comparisonResult = false;

  $scope.check = function(){
    dateSlected = new Date($scope.range1.start);
    startDateAdder = dateSlected.getDay() - 1;
    startDate = new Date(dateSlected.getTime() - startDateAdder * 24 * 60 * 60 * 1000);
    endDate = new Date(startDate.getTime() + 13 * 24 * 60 * 60 * 1000);
    compareDate = endDate.getTime();
    startDate = formatted_date(startDate);
    endDate = formatted_date(endDate);

    closingDate = new Date($scope.range2.start);
    comparisonResult = closingDate > compareDate;
    closingDate = formatted_date(closingDate);

  return comparisonResult;
  }

  var formatted_date = function(date) {
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

