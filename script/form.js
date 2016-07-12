window.onload = function(){
//Name Validation
    document.getElementById("nam").addEventListener("blur" , function(){
      var na = document.getElementById("nam");
      var a = na.value;
      name = 1; 
      if (a === "") {
        document.getElementById("name").style.display = "block";
        name = 0;
      }
      else{
        document.getElementById("name").style.display = "none";
      }
    });

//Email Validation
    document.getElementById("ema").addEventListener("blur" , function(){   
      var na = document.getElementById("ema");
      var a = na.value; 
      email = 1;
      var atpos = a.indexOf("@");
      var dotpos = a.lastIndexOf(".");
      if (atpos<1 || dotpos<atpos+2 || dotpos+2>=a.length) {
        document.getElementById("email").style.display = "block";
        email = 0;
      }
      else{
        document.getElementById("email").style.display = "none";
      }
    });

//Selection
    document.getElementById("sel").addEventListener("blur" , function(){ 
      var na = document.getElementById("sel");
      select = 1;
      var a = na.value; 
      if (a === "") {
        document.getElementById("selection").style.display = "block";
        select = 0;
      }
      else{
        document.getElementById("selection").style.display = "none";
      }
    });

//Date Validation
  document.getElementById("datee").addEventListener("input" , function(){ 
    var na = document.getElementById("datee");
    var a = na.value; 
    date = 1;
    a = a.split("/");
    var d = new Date();
    var mon = d.getMonth()+1;
    var yr = d.getFullYear();
    var day = d.getDate();
    if( (yr > a[0]) || ( yr <= a[0] && mon > a[1]) || ( yr <= a[0] && mon <= a[1] && day > a[2]) ){
       document.getElementById("date").style.display = "block";
       date = 0;
    }
    else{
     document.getElementById("date").style.display = "none";
    
    }
  });


//Time Validation
  document.getElementById("dr1").addEventListener("input" , validate_time);
  document.getElementById("dr2").addEventListener("input" , validate_time);
  time = 1;
  function validate_time(){ 
    var dr1 = document.getElementById("dr1").value;
    var dr2 = document.getElementById("dr2").value;
    if (dr1 === "" || dr2 === "") {
      document.getElementById("time").style.display = "block";
      time = 0;
    }
    else{
      document.getElementById("time").style.display = "none";
    
    }
  }


  document.getElementById("radbox").addEventListener("mouseout" , function(){
    var Radio = document.getElementsByName("room");
    var a = "";
    rad = 1;
     for(var i = 0; i < Radio.length; i++)
     {
        if(Radio[i].checked)
        {
          a = Radio[i].value;
        }
      }
      if(a === ""){
        document.getElementById("radio").style.display = "block";
        rad = 0;
       }
      else{
        document.getElementById("radio").style.display = "none";
        
      }
    });


  
  document.getElementById("sub").addEventListener("click" , function(evt){
    if(name && email && select && date && time && rad){
      alert("form Incomplete");
      evt.preventDefault();
    }
    

    //name validation ----------

 	  var txt = "Reservation Details\n";
 	  var name = document.getElementById("nam").value;
 	  txt = txt + "\nName:\t\t\t\t\t\t" + name;
  
    //email validation-----------
 	  var emai = document.getElementById("ema").value;
    txt = txt + "\nEmail:\t\t\t\t\t\t" + emai;
  
    //Department Validation------
 	  var sel = document.getElementById("sel").value;
 	  txt = txt + "\nDepartment:\t\t\t\t\t" + sel;

    //Resesrvation Validation
 	  var Radio = document.getElementsByName("room");
    var rad = "";
 	  for(var i = 0; i < Radio.length; i++)
 	  {
      if(Radio[i].checked)
      {
       rad = Radio[i].value;
      }
    }
    txt = txt + "\nReservation:\t\t\t\t\t"+rad;

    var ch = "";
    var Chec = document.getElementsByName("check");
    for(var i = 0; i < Chec.length; i++)
    {
      if(Chec[i].checked)
      {
       ch = ch + Chec[i].value + "\n\t\t\t\t\t\t\t" ;
      }
    }

    txt = txt + "\nExtra Requirements:\t\t\t\t"+ch;
  

   //Date Validation------------
    var dat = document.getElementById("datee").value;

    txt = txt + "\nDate:\t\t\t\t\t\t" + dat;
    //---------------------------

    txt = txt + "\nTime:\t\t\t\t\t\t" + document.getElementById("dr1").value;
    txt = txt + ":" + document.getElementById("dr2").value;
  
 	  alert(txt);
 	  }	);
			
	
 
}