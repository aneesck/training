var app = angular.module(' ', ['ui.router']);
	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/home");
		$urlRouterProvider.when('/start', '/start/new_ride');
    $urlRouterProvider.when('/start/new_ride', '/start/new_ride/create');
    $urlRouterProvider.when('/start/select_ride', '/start/select_ride/created');
	    $stateProvider
	.state('home', {
      url: "/home",
      templateUrl: "views/home.html"
    })   
    .state('signup', {
      url: "/signup",
      templateUrl: "views/signup.html",
      controller: "NewUser"
    })
    .state('login', {
      url: "/login",
      templateUrl: "views/login.html",
      controller: "OldUser"
    })
    .state('start', {
      url: "/start",
      templateUrl: "views/start.html",
      controller: "StartPage"
    })
    .state('start.new', {
      url: "/new_ride",
      templateUrl: "views/new_ride.html",
      controller: function(){
      	document.getElementById("tab1").style.backgroundColor = "white";
      	document.getElementById("tab2").style.backgroundColor = "black";
      }
    })
    .state('start.new.create', {
      url: "/create",
      templateUrl: "views/create_ride.html",
      controller: 'CreateRide'
      
    })
    .state('start.new.join', {
      url: "/join",
      templateUrl: "views/join_ride.html",
      controller: 'JoinRide'
    })
    .state('start.select', {
      url: "/select_ride",
      templateUrl: "views/select_ride.html",
      controller: function(){
      	document.getElementById("tab2").style.backgroundColor = "white";
      	document.getElementById("tab1").style.backgroundColor = "black";
      }
    })
    .state('start.select.created', {
      url: "/created",
      templateUrl: "views/created_ride.html",
      controller: 'CreatedRide'
    })
    .state('start.select.joined', {
      url: "/joined",
      templateUrl: "views/joined_ride.html",
      controller: 'JoinedRide'
    })
    });