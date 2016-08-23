app.factory('Calculations', function(){
	var calculation = {};
	calculation.calculateActivityTotal = function(newActivities){ 
		for(var j=0; j<newActivities.length; j++){
	   			newActivities[j].activityTotal = 0;;
		   		for(var i=0; i<7; i++){
		   			if(newActivities[j] !== undefined){
			   			if((!isNaN(newActivities[j].time[i])) && newActivities[j].time[i] !== '' ) {
			   				newActivities[j].activityTotal= newActivities[j].activityTotal+parseFloat(newActivities[j].time[i]);
			   			}
			   		}	
		   		}
		   		if(newActivities[j].activityTotal === 0)
		   			newActivities[j].activityTotal = "";	
	   		}
   		return newActivities;
   	}	

   	calculation.calculateTotal = function(total,newActivities,lower){
	   	for(var i = 0,k = lower; i<7; i++,k++){
	   			total[k] = 0;
	   			for(var j=0; j<newActivities.length; j++){
	   				if(newActivities[j] !== undefined){
		   				if((!isNaN(newActivities[j].time[i])) && newActivities[j].time[i] !== '' ) {
			   				total[k]= total[k]+parseFloat(newActivities[j].time[i]);
			   			}
			   		}	
	   			}
	   			if(total[k] === 0)
		   			total[k] = "";	
	   		}
   		return total;	
   	}

   	calculation.calculateWeekTotal = function(weektotal,newActivities){
   		weektotal=0;
   			for(var j=0; j<newActivities.length; j++){
   				if(newActivities[j] !== undefined){
	   				if((!isNaN(newActivities[j].activityTotal)) && newActivities[j].activityTotal !== '' ) {
		   				weektotal= weektotal+parseFloat(newActivities[j].activityTotal);
		   			}
		   		}	
   			}
   			if(weektotal === 0)
	   			weektotal = "";
	   	return weektotal;	
   	}
   	return calculation;
 });  	
