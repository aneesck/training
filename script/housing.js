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
	var download_app = document.getElementById('third');
	var imageslide = document.getElementById('imageslide');

	
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


	download_app.addEventListener("mouseover", function(){
		body.classList.add('download');
	});
	download_app.addEventListener("mousedown", function(){
		body.classList.remove('download');
	});	
	document.getElementById('arrow_up').addEventListener("mouseover",function(){
		body.classList.add('download');
	});
	document.getElementById('arrow_up').addEventListener("mouseout",function(){
		body.classList.remove('download');
	});
	document.getElementById('downloaddrop').addEventListener("mouseover",function(){
		body.classList.add('download');
	});
	document.getElementById('downloaddrop').addEventListener("mouseout",function(){
		body.classList.remove('download');
	});
 }
 function scrol(position_index){

 	var interval1, interval2;
 	if(position_index >= imageslide.scrollLeft){
 		clearInterval(interval2);
		interval1 = setInterval(function(){
    		if(imageslide.scrollLeft === position_index){
        		clearInterval(interval1);
        	
    		}
   			imageslide.scrollLeft += 10;}, 1);
		}
	else{
		interval2 = setInterval(function(){
			clearInterval(interval1);
    		if(imageslide.scrollLeft === position_index){
        		clearInterval(interval2);
        	
    		}
   			imageslide.scrollLeft -= 10;}, 1);
		}	

 	if(imageslide.scrollLeft >= 6800){
		document.getElementById('rightarrow').style.display = 'none';
	}
	else{
		document.getElementById('rightarrow').style.display = 'block';

	}
	if(imageslide.scrollLeft === 0){
		document.getElementById('leftarrow').style.display = 'none';
	}
	else{
		document.getElementById('leftarrow').style.display = 'block';
	}
 }
 function scrolLeft(){
 	
 	var timesRun = 0;
	var interval = setInterval(function(){
    	timesRun += 10;
    	if(timesRun === 1000){
        	clearInterval(interval);
    	}
   		imageslide.scrollLeft += 10;}, 1);
	
 	document.getElementById('leftarrow').style.display = 'block';	
 	if(imageslide.scrollLeft >= 6800){
		document.getElementById('rightarrow').style.display = 'none';
	}
 }
  function scrolRight(){

 	var timesRun = 0;
	var interval = setInterval(function(){
    	timesRun += 10;
    	if(timesRun === 1000){
        	clearInterval(interval);
    	}
   		imageslide.scrollLeft -= 10;}, 1);

 	document.getElementById('rightarrow').style.display = 'block';
 	if(imageslide.scrollLeft === 0){
		document.getElementById('leftarrow').style.display = 'none';
	}
 }

 function requestLocation(){
 	 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     	processData(xhttp.responseText);
    }
  }
  xhttp.open("GET", "../training/json/ind.json", true);
  xhttp.send();
 }
function addInformation(e,i){ 
	var active_element = document.getElementsByClassName('active');
	if(active_element[0])
		active_element[0].classList.remove('active');
	e.classList.add('active');
	var active_box = document.getElementsByClassName('box_active');
	active_box[0].classList.remove('box_active');
	var active_box = document.getElementsByClassName('box');
	active_box[i].classList.add('box_active');
}



