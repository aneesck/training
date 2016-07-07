function validate_name(){
	var na = document.getElementById("nam");
	var a = na.value;	
	if (a === "") {
		alert("Enter name");
		return false;
		}
	}
	


function validate_email(){		
	var na = document.getElementById("ema");
	var a = na.value;	
	var atpos = a.indexOf("@");
    var dotpos = a.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=a.length) {
        alert("Not a valid e-mail address");
        return false;	
		}
	}






function validate_res(){

  //name validation ----------

 	var txt = "Reservation Details\n";
 	var name = document.getElementById("nam").value;
 	if(name === ""){
 		alert("Name is Empty");
 		return false;
 	}
 	txt = txt + "\nName:\t\t\t\t\t\t" + name;
  //---------------------------

  //email validation-----------
 	var emai = document.getElementById("ema").value;
 	var atpos = emai.indexOf("@");
    var dotpos = emai.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emai.length) {
        alert("Not a valid e-mail address");
        return false;	
	}
 	txt = txt + "\nEmail:\t\t\t\t\t\t" + emai;
  //---------------------------

  //Department Validation------
 	var sel = document.getElementById("sel").value;
 	if(sel === ""){
 		alert("department not Selected");
 		return false;
 	}
 	txt = txt + "\nDepartment:\t\t\t\t\t" + sel;
  //---------------------------

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
    
  if(rad === ""){
      alert("Reservation is undefined")
      return false;
  }
  txt = txt + "\nReservation:\t\t\t\t\t"+rad;
  //---------------------------

  //---------------------------
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
  //---------------------------

  //Date Validation------------
  var dat = document.getElementById("datee").value;
  if(dat === ""){
 		alert("Date is invalid");
 		return false;
 	}
 	var na = document.getElementById("datee");
  var a = na.value; 
  a = a.split("-");
  var d = new Date();
  var mon = d.getMonth()+1;
  var yr = d.getFullYear();
  var day = d.getDate();
  if(yr > a[0]){
    alert("Invalid Date");
    return false;
  }
  else if ( yr <= a[0] && mon > a[1]){
    alert("Invalid Date");
    return false;
  }
  else if( yr <= a[0] && mon <= a[1] && day > a[2]){
    alert("Invalid Date"); 
    return false;
  }
  txt = txt + "\nDate:\t\t\t\t\t\t" + dat;
  //---------------------------

  txt = txt + "\nTime:\t\t\t\t\t\t" + document.getElementById("dr1").value;
  txt = txt + ":" + document.getElementById("dr2").value;
  
 	alert(txt);
 	}	
			
			
 