var app = angular.module(' ', ['ui.select2']);
app.controller('MyController', function($scope) {
    $scope.select2Options = {
        allowClear:true
    };
});