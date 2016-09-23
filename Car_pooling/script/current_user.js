app.factory('CurrentUser', function($filter){
	var shared = {};
	var username;
	shared.setUser = function(name){
		username =  name;
	}
	shared.getUser = function(){
		return username;
	}
	shared.clearUser = function(){
		username = '';
	}
	return shared;
});



  
  
  