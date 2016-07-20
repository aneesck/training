window.onload = function(){
	document.getElementById('second').addEventListener("click", function(){
		var loc = document.getElementById('pop');
		if(loc.style.display === 'block'){
			document.getElementById('primary').style.display = 'inline';
			document.getElementById('secondary').style.display = 'none';
			document.getElementById('sam').style.animation = 'animr .25s';

			setTimeout(function(){ loc.style.display = 'none'; }, 250);
		}
		else{
			loc.style.display = 'block';
			document.getElementById('primary').style.display = 'none';
			document.getElementById('secondary').style.display = 'inline';
			document.getElementById('sam').style.animation = 'animf .25s';
			
		}

	});	

	document.getElementById('search_box').addEventListener("click", function(){
		document.getElementById('bod').style.overflow = 'hidden';
		document.getElementById('to_pop').style.display = 'block';
		document.getElementById('pop_click').style.animation = 'popup 1s';
		
	});

	document.getElementById('close').addEventListener("click", function(){
		document.getElementById('bod').style.overflow = 'visible';
		document.getElementById('to_pop').style.display = 'none';
	});





	
}