app.factory('Requests', function($http,$q){
  	var deferObject,
    myMethods = {
        getPromise: function(url) {
          	var promise =  $http.get(url),
            deferObject =  deferObject || $q.defer();
            promise.then(
           function(answer){
           	    deferObject.resolve(answer);
          	},
           function(reason){
       	        deferObject.reject(reason);
            });
            return deferObject.promise;
          },
        post: function(location,value) {
        	var string;
        	 var promise = $http({	method: 'POST',	url: location, data: value }),
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