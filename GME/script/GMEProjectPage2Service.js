app.factory('Calculations', function(){
	var calculation = {};
	calculation.calculateActivityTotal = function(newActivities){ 
		angular.forEach(newActivities, function(value, key){
	   		value.activityTotal = 0;;
		   	for(var i=0; i<7; i++){
		   		if(value !== undefined){
			   		if((!isNaN(value.time[i])) && value.time[i] !== '' ) {
			   			value.activityTotal= value.activityTotal+parseFloat(value.time[i]);
			   		}
				}	
	   		}
	   		if(value.activityTotal === 0)
	   			value.activityTotal = "";	
		});
   		return newActivities;
   	}	

   	calculation.calculateTotal = function(total,newActivities,lower){
	   	for(var i = 0,k = lower; i<7; i++,k++){
	   		total[k] = 0;
	   		angular.forEach(newActivities, function(value, key){
	   			if(value !== undefined){
		   			if((!isNaN(value.time[i])) && value.time[i] !== '' ) {
		  				total[k]= total[k]+parseFloat(value.time[i]);
					}
		   		}	
	   		});
	   		if(total[k] === 0)
		   		total[k] = "";	
	   	}
   		return total;	
   	}

   	calculation.calculateWeekTotal = function(weektotal,newActivities){
   		weektotal=0;
   		angular.forEach(newActivities, function(value, key){
   			if(value !== undefined){
	   			if((!isNaN(value.activityTotal)) && value.activityTotal !== '' ) {
		   			weektotal= weektotal+parseFloat(value.activityTotal);
		   		}
		   	}	
   		});
   		if(weektotal === 0)
	   		weektotal = "";
	   	return weektotal;	
   	}
   	return calculation;
 });  	
