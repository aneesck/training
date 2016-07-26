window.onload = function(){
	var body = document.getElementById('bod');
	var header_button = document.getElementById('second');
	var loc = document.getElementById('pop');
	var login_button = document.getElementById('sixth');
	var search_box = document.getElementById('search_box');
	var background = document.getElementById('bg');
	var close = document.getElementById('close');
	var right = document.getElementById('right');
	var login = document.getElementById('emaillogin');
	var sign = document.getElementById('signemail');
	var reset = document.getElementById('resetemail');
	var col = document.getElementById('collections');
	var td = document.getElementById('topdevelopers');
	var fl = document.getElementById('featuredlocalities');
	var top = document.getElementById('top');
	var gl = document.getElementById('gl');
	var hd = document.getElementById('hd');


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
		body.classList.remove('search_active','login_active','button_active','menu_visibility');
		body.classList.add('button_inactive','close_active');
		setTimeout(function(){ loc.style.display = 'none'; }, 250);	
	});	

	
	document.getElementById('lg').addEventListener("click", function(){
		right.classList.remove('anim_lin');
		right.classList.add('anim_lout');
		login.classList.remove('anim_rout');
		login.classList.add('anim_rin');
		body.classList.add('log');
	});

	document.getElementById('si').addEventListener("click", function(){
		right.classList.remove('anim_lin');
		right.classList.add('anim_lout');
		sign.classList.remove('anim_rout');
		sign.classList.add('anim_rin');	
		body.classList.add('sin');
	});

	document.getElementById('forgot').addEventListener("click", function(){
		login.classList.remove('anim_rin');
		login.classList.add('anim_lout');
		reset.classList.remove('anim_rout');
		reset.classList.add('anim_rin');
		body.classList.remove('log','sin','reset');
		body.classList.add('reset');
	});
	
	document.getElementById('Loginback1').addEventListener("click", function(){
		right.classList.remove('anim_lout');
		right.classList.add('anim_lin');
		login.classList.remove('anim_rin');
		login.classList.add('anim_rout');
		body.classList.remove('log','sin');
	});
	document.getElementById('Loginback2').addEventListener("click", function(){
		right.classList.remove('anim_lout');
		right.classList.add('anim_lin');
		sign.classList.remove('anim_rin');
		sign.classList.add('anim_rout');
		body.classList.remove('log','sin');
	 });
	
	document.getElementById('Loginback3').addEventListener("click", function(){
		reset.classList.remove('anim_rin');
		reset.classList.add('anim_rout');
		login.classList.remove('anim_lout');
		login.classList.add('anim_lin');
		body.classList.remove('reset');
		body.classList.add('log');
	});	

	document.getElementById('seventh').addEventListener("click", function(){
		document.getElementById('menubar').classList.add('anim_rin');
		body.classList.add('menu_visibility');
	});	

	// col.addEventListener("click", function(){	
	// 	fl.classList.remove('display_list');
	// 	td.classList.remove('display_list');
	// 	col.classList.toggle('display_list');
	// });

	// td.addEventListener("click", function(){
	// 	fl.classList.remove('display_list');
	// 	col.classList.remove('display_list');
	// 	td.classList.toggle('display_list');
	// });

	// fl.addEventListener("click", function(){
	// 	col.classList.remove('display_list');
	// 	td.classList.remove('display_list');
	// 	fl.classList.toggle('display_list');
		
	// });

	// top.addEventListener("click", function(){
	// 	gl.classList.remove('display_sublist');
	// 	hd.classList.remove('display_sublist');
	// 	top.classList.toggle('display_sublist');
	// });

	// hd.addEventListener("click", function(){
	// 	gl.classList.remove('display_sublist');
	// 	top.classList.remove('display_sublist');
	// 	document.getElementById('hd').classList.toggle('display_sublist');
	// });

	// gl.addEventListener("click", function(){
	// 	top.classList.remove('display_sublist');
	// 	hd.classList.remove('display_sublist');
	// 	gl.classList.toggle('display_sublist');
	// });
}