 $(function() {
    $( "#datee" ).datepicker({
      showOn: "button", 
      buttonText: "<i class='fa fa-calendar'></i>",
      dateFormat: 'yy-mm-dd'
    });
  });


function validate_res(){

  var f = document.getElementsByTagName('form')[0];
  if(f.checkValidity()) {

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
			
	}		
