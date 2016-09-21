var app = angular.module(' ', ['ui.router']);
	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/home");
		$urlRouterProvider.when('/start', '/start/driver');
	    $stateProvider
	.state('home', {
      url: "/home",
      templateUrl: "home.html"
    })   
    .state('driver', {
      url: "/driver",
      templateUrl: "driver.html"
    })
    .state('rider', {
      url: "/rider",
      templateUrl: "rider.html"
    })
    .state('signup', {
      url: "/signup",
      templateUrl: "signup.html"
    })
    .state('login', {
      url: "/login",
      templateUrl: "login.html"
    })
    .state('start', {
      url: "/start",
      templateUrl: "start.html"
    })
    .state('start.driver', {
      url: "/driver",
      templateUrl: "driver.html",
      controller: function(){
      	document.getElementById("tab1").style.backgroundColor = "white";
      	document.getElementById("tab2").style.backgroundColor = "black";
      }
    })
    .state('start.rider', {
      url: "/rider",
      templateUrl: "rider.html",
      controller: function(){
      	document.getElementById("tab2").style.backgroundColor = "white";
      	document.getElementById("tab1").style.backgroundColor = "black";
      }
    })
    });