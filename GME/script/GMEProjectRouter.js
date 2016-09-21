var app = angular.module(' ', ['ui.router']);
	app.config(function($stateProvider, $urlRouterProvider) {
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
