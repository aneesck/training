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
function validate_date(){
	var na = document.getElementById("sel");
	var a = na.value;	
	if (a === "") {
		alert("select department");
		}
 	}

function validate_res(){
 	var txt = "Reservation Details\n";
 	var name=document.getElementById("nam").value;
 	if(name===""){
 		alert("Name is Empty");
 		return false;
 	}
 	txt = txt + "\nName:\t\t\t\t\t\t" + name;
 	var emai= document.getElementById("ema").value;
 	var atpos = emai.indexOf("@");
    var dotpos = emai.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emai.length) {
        alert("Not a valid e-mail address");
        return false;	
	}
 	txt = txt + "\nEmail:\t\t\t\t\t\t" + emai;
 	var sel= document.getElementById("sel").value;
 	if(sel===""){
 		alert("department not Selected");
 		return false;
 	}

 	txt = txt + "\nDepartment:\t\t\t\t\t\t" + sel;
 	txt = txt + "\nReservation:\t\t\t\t\t\t";
  	var Radio = document.getElementsByName("room");
   	for(var i = 0; i < Radio.length; i++)
   	{
      if(Radio[i].checked)
      {
          txt = txt + Radio[i].value;
      }
   }
   txt = txt + "\nExtra Requirements:"
   var Chec = document.getElementsByName("check");
   for(var i = 0; i < Chec.length; i++)
   	{
      if(Chec[i].checked)
      {
          txt = txt + "\t\t\t\t\t\t" + Chec[i].value;
      }
   	}
   	var dat = document.getElementById("datee").value;
   	if(dat===""){
 		alert("Date is invalid");
 		return false;
 	}
 	txt = txt + "\nDate:\t\t\t\t\t\t" + dat;
 	txt = txt + "\nTime:\t\t\t\t\t\t" + document.getElementById("dr1").value;
 	txt = txt + ":" + document.getElementById("dr2").value;
 	alert(txt);
 	}	
			
					
	
	
