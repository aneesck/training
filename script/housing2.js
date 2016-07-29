function processData(data){
	var first_head = document.getElementById("popular_localities");
	var second_head = document.getElementById('top_developers');
	var third_head = document.getElementById('featured_projects');
	var list = document.getElementById('localities');
 		
 	first_head.innerHTML = '';
 	second_head.innerHTML = '';
	third_head.innerHTML = '';

 	var heading1 = document.createElement('div');
 		
 	
 	
 	first_head.appendChild(heading1);

 	var heading1_ul = document.createElement('ul');
 		

 	var i= 0;
 	var arr = JSON.parse(data);
 	
 	var keyword = document.getElementById('search_keyword').value;
 	keyword = keyword.toLowerCase();;


 	while(arr[i] ){
 		var name = arr[i].name.toLowerCase();
 		if(arr[i].class === 'regions' && name.indexOf(keyword) !== -1){
 			var li = document.createElement('li');
 			heading1.innerHTML = 'LOCALITIES';
 			heading1.setAttribute("class","head");
 			li.innerHTML = arr[i].name;
 			heading1_ul.appendChild(li);
 		}	
 		i++;
 	}
 	first_head.appendChild(heading1_ul);

 	var heading2 = document.createElement('div');
 	
 	
 	second_head.appendChild(heading2);
 		
 	var heading2_ul = document.createElement('ul');
 	i = 0;
 	while(arr[i]){
 		var name = arr[i].name.toLowerCase();
 		if(arr[i].class === 'buy' && name.indexOf(keyword) !== -1)
 		{
 			var li = document.createElement('li');
 			li.innerHTML = arr[i].name;
 			heading2_ul.appendChild(li);
 			heading2.innerHTML = 'PROJECTS';
 			heading2.setAttribute('class','head');
 		}
 		i++;
 	}
 	second_head.appendChild(heading2_ul);
}
     