app.service('Dictionary', function($http, $q){
	var deferObject,
    myMethods = {
        getPromise: function() {
          	var promise       =  $http.get("json/units.json"),
            deferObject =  deferObject || $q.defer();
            promise.then(
           function(answer){
           	    deferObject.resolve(answer);
          	},
           function(reason){
       	        deferObject.reject(reason);
            });
            return deferObject.promise;
          }
       };
        return myMethods;
});		

app.factory('Equations', function(){
	var equation = {};
	equation.length = {
		convert : function(input_unit,output_unit,input_data,contents){
			return input_data / contents.length[input_unit].multiplier * contents.length[output_unit].multiplier;
		}
	};
		
	equation.temp = {
		convert : function(input_unit,output_unit,input_data,contents){
			return (((input_data - contents.temp[input_unit].adder) / contents.temp[input_unit].multiplier) 
				* contents.temp[output_unit].multiplier) + parseFloat(contents.temp[output_unit].adder);
		}	
	};	

	equation.time = {
		convert : function(input_unit,output_unit,input_data,contents){
			return input_data * contents.time[input_unit].multiplier / contents.time[output_unit].multiplier;
		}	
	};	
			
	equation.area = { 
		convert: function(input_unit,output_unit,input_data,contents){
			return input_data * contents.area[input_unit].multiplier / contents.area[output_unit].multiplier;
		}	
	};
	equation.units = {
		length: ["mm","cm","m","km"],
		temp: ["farenheit","kelvin","celcius"],
		time: ["seconds", "minutes", "hours", "days", "weeks"],
		area: ["square_meter", "square_km", "hectare", "square_foot", "acre"]
	};
return equation;	
});