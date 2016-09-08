app.factory('SharedData', function($filter){
	var shared = {};
	var monthNames = ["January", "February", "March", "April", "May", "June",
  		"July", "August", "September", "October", "November", "December"];
	var dates = {
		weekOne:{
			start:"",
			end:"",
			year:""
		},
		weekTwo:{
			start:"",
			end:"",
			year:""
		},
		closingDate:"",
		date1:[],
		date2:[]
	};

	shared.setValues = function(start,close,survey){
		dates.weekOne = {
		    start:monthNames[new Date(start).getMonth()] +" "+ new Date(start).getDate(),
		    end:monthNames[new Date(new Date(start).getTime() + 6 * 24 * 60 * 60 * 1000).getMonth()] 
		        +" "+ new Date(new Date(start).getTime() + 6 * 24 * 60 * 60 * 1000).getDate(),
		    year:new Date(start).getFullYear()      
		}
		dates.weekTwo = {
		    start:monthNames[new Date(new Date(close).getTime() - 6 * 24 * 60 * 60 * 1000).getMonth()]
		         +" "+ new Date(new Date(close).getTime() - 6 * 24 * 60 * 60 * 1000).getDate(), 
		    end:monthNames[new Date(close).getMonth()] +" "+ new Date(close).getDate(),
		    year:new Date(close).getFullYear()
		}
		dates.closingDate = $filter('date')(new Date(new Date(survey)),'M/d');
		for(var i=0;i<7;i++){
		    dates.date1[i] = $filter('date')(new Date(new Date(start).getTime() 
		        + i * 24 * 60 * 60 * 1000 ),'M/d');
		    dates.date2[i] = $filter('date')(new Date(new Date(close).getTime() 
		        - 6 * 24 * 60 * 60 * 1000 + i * 24 * 60 * 60 * 1000 ),'M/d');
		}  
	}
	shared.getValues = function(){
		return dates;
	}
	return shared;
});



  
  
  