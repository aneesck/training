app.factory('SharedData', function(){
	var shared = {};
	var dates = {
		startDate: "",
		closeDate: "",
		surveyDate: ""
	};
	shared.setValues = function(start,close,survey){
		dates.startDate = start;
		dates.closeDate = close;
		dates.surveyDate = survey;
	}
	shared.getValues = function(){
		return dates;
	}
	return shared;
});