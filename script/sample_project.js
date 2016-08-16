var app = angular.module(' ', ['obDateRangePicker']);

app.controller("DateRange", function($scope){

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
 

var date_slected, start_date_adder, start_date, end_date, closing_date;
comparison_result = false;

  $scope.check = function(){
    date_slected = new Date($scope.range1.start);
    start_date_adder = date_slected.getDay() - 1;
    start_date = new Date(date_slected.getTime() - start_date_adder * 24 * 60 * 60 * 1000);
    end_date = new Date(start_date.getTime() + 13 * 24 * 60 * 60 * 1000);
    compare_date = end_date.getTime();
    start_date = formatted_date(start_date);
    end_date = formatted_date(end_date);

    closing_date = new Date($scope.range2.start);
    comparison_result = closing_date > compare_date;

  return comparison_result;
  }

  var formatted_date = function(date) {
    var todayTime = new Date(date);
    var month = todayTime .getMonth() + 1;
    var day = todayTime .getDate();
    var year = todayTime .getFullYear();
    return month + "/" + day + "/" + year;
}

  $scope.print = function(){
   alert(end_date+'-'+start_date);
  }

});

