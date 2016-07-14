function ajax_post(){
    var hr = new XMLHttpRequest();
    var url = "form.html";
    
   
    hr.open("POST", url, true);
    hr.send(); 
    document.getElementById("form").innerHTML = "processing...";
     hr.onreadystatechange = function() {
        if(hr.readyState == 4 && hr.status == 200) {
            var return_data = hr.responseText;
            return_data = return_data.slice(330,900);
            return_data = return_data.toUpperCase();
            document.getElementById("form").innerHTML = return_data;
        }
    }
}