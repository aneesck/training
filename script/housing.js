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




	document.getElementById('lg').addEventListener("click", function(){
		body.classList.add('log');
		document.getElementById('right').classList.add('anim_lin');
		document.getElementById('emaillogin').classList.add('anim_rin');

	});

	document.getElementById('si').addEventListener("click", function(){
		body.classList.add('sin');
		document.getElementById('signmail').classList.add('anim_rin');		
	});
	document.getElementById('forgot').addEventListener("click", function(){
		body.classList.remove('log','sin','reset');
		body.classList.add('reset');
		document.getElementById('resetemail').classList.add('anim_rin');
		
	



	});
	document.getElementById('Loginback1').addEventListener("click", function(){
		document.getElementById('emaillogin').classList.remove('anim_rin');
		document.getElementById('emaillogin').classList.add('anim_rout');
		
		document.getElementById('right').classList.add('anim_lin');
		body.classList.remove('log','sin');
		
	});
	document.getElementById('Loginback2').addEventListener("click", function(){
		
		document.getElementById('right').classList.add('anim_lin');
		body.classList.remove('log','sin');
		
	});
	document.getElementById('Loginback3').addEventListener("click", function(){
		document.getElementById('emaillogin').classList.add('anim_lin');
		body.classList.remove('animation_leftslideout');
		body.classList.add('animation_leftslidein');
		body.classList.remove('reset');
		body.classList.add('log');
	});	
}