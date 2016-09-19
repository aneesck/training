var app = angular.module(' ', ['obDateRangePicker','ui.select','ngRoute','ngScrollbars']);
	app.config(function($routeProvider) {
	    $routeProvider
	    .when("/", {
	        templateUrl : "GMEProjectPage1.html",
	        controller : "DateRange"
	    })
	    .when("/page2", {
	        templateUrl : "GMEProjectPage2.html",
	        controller : "MyController"
	    });
	});
