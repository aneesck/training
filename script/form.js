
 var n = 1, e = 1, select = 1, d = 1, t = 1, rad = 1;

window.onload = function(){
 
//Name Validation
    document.getElementById("nam").addEventListener("blur" , function(){
      var na = document.getElementById("nam");
      var a = na.value;
      if (a === "") {
        document.getElementById("name").style.display = "block";
        n = 1;
      }
      else{
        document.getElementById("name").style.display = "none";
        n = 0; 
      }
    });

//Email Validation
    document.getElementById("ema").addEventListener("blur" , function(){   
      var na = document.getElementById("ema");
      var a = na.value; 
      var atpos = a.indexOf("@");
      var dotpos = a.lastIndexOf(".");
      if (atpos<1 || dotpos<atpos+2 || dotpos+2>=a.length) {
        document.getElementById("email").style.display = "block";
        e = 1;
      }
      else{
        document.getElementById("email").style.display = "none";
        e = 0;
      }
    });

//Selection
    document.getElementById("sel").addEventListener("click" , function(){ 
      var na = document.getElementById("sel");
      var a = na.value; 
      if (a === "") {
        document.getElementById("selection").style.display = "block";
        select = 1;
      }
      else{
        document.getElementById("selection").style.display = "none";
         select = 0;
      }
    });

//Date Validation
  document.getElementById("datee").addEventListener("input" , function(){ 
    var na = document.getElementById("datee");
    var a = na.value; 
    a = a.split("-");
    var currDate = new Date();
    var mon = currDate.getMonth()+1;
    var yr = currDate.getFullYear();
    var day = currDate.getDate();
    if( (yr > a[0]) || ( yr <= a[0] && mon > a[1]) || ( yr <= a[0] && mon <= a[1] && day > a[2]) ){
       document.getElementById("date").style.display = "block";
       d = 1;
    }
    else{
     document.getElementById("date").style.display = "none";
     d = 0;
    
    }
  });


//Time Validation
 function validate_time(evr){  
    var dr1 = "", dr2 = "";
     dr1 = document.getElementById("dr1").value;
     dr2 = document.getElementById("dr2").value;
    if (dr1 === "" || dr2 === "") {
      document.getElementById("time").style.display = "block";
      t = 1;
    }
    else{
      document.getElementById("time").style.display = "none";
      t = 0;
    
    }
  }
  document.getElementById("dr1").addEventListener("click" , validate_time);
  document.getElementById("dr2").addEventListener("click" , validate_time);
 


  document.getElementById("radbox").addEventListener("mouseout" , function(){
    var Radio = document.getElementsByName("room");
    var a = "";
     for(var i = 0; i < Radio.length; i++)
     {
        if(Radio[i].checked)
        {
          a = Radio[i].value;
        }
      }
      if(a === ""){
        document.getElementById("radio").style.display = "block";
        rad = 1;
       }
      else{
        document.getElementById("radio").style.display = "none";
        rad = 0;
      }
    });


  
  document.getElementById("sub").addEventListener("click" , function(evt){
    if(n || e || select || d ||t || rad){
      alert("form Incomplete");
      evt.preventDefault();
      return false;
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
    radio = "";
 	  for(var i = 0; i < Radio.length; i++)
 	  {
      if(Radio[i].checked)
      {
       radio = Radio[i].value;
      }
    }
    txt = txt + "\nReservation:\t\t\t\t\t"+radio;

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