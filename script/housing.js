window.onload = function(){
	document.getElementById('second').addEventListener("click", function(){
		var loc = document.getElementById('pop');
		if(loc.style.display === 'block'){
			loc.style.display = 'none';
			//document.getElementById('sam').style.animation = 'animr .5s'
		}
		else{
			loc.style.display = 'block';
			//document.getElementById('sam').style.animation = 'animf .5s'
			
		}

		
	});
}