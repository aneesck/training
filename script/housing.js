window.onload = function(){
	var body = document.getElementById('bod');
	var header_button = document.getElementById('second');
	var loc = document.getElementById('pop');
	var login_button = document.getElementById('sixth');
	var search_box = document.getElementById('search_box');
	var background = document.getElementById('bg');
	var close = document.getElementById('close');


	header_button.addEventListener("click", function(){
		if(loc.style.display === 'block'){
			body.classList.add('button_inactive');
			body.classList.remove('button_active');
			setTimeout(function(){ loc.style.display = 'none'; }, 250);	
		}
		else{
			loc.style.display = 'block';
			body.classList.remove('button_inactive');
			body.classList.add('button_active');	
		}
	});	

	search_box.addEventListener("click", function(){
		body.classList.add('search_active');
	});

	close.addEventListener("click", function(){
		body.classList.remove('search_active');
	});

	login_button.addEventListener("click", function(){
		body.classList.add('login_active');
	});

	background.addEventListener("click", function(){
		body.classList.remove('search_active','login_active','button_active');
		body.classList.add('button_inactive','close_active');
		setTimeout(function(){ loc.style.display = 'none'; }, 250);	
	});	
}