window.onload = function(){
	var flag = false;
	var canvas = document.getElementById('can');
	ctx = canvas.getContext("2d");
	var rect = canvas.getBoundingClientRect();
	var scaleX = canvas.width / rect.width;
	var scaleY = canvas.height / rect.height;
 	canvas.addEventListener("mousemove", function (e) {
	  	if(flag){
           	Draw((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY, true);
           }
        });
    canvas.addEventListener("mousedown", function (e) {
        flag = true;
        Draw((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY, false);
        });
    canvas.addEventListener("mouseup", function (e) {
        flag = false;
        });
    canvas.addEventListener("mouseout", function (e) {
        flag = false;
        });
 
   function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.closePath();
    	}
    lastX = x; lastY = y;
	}
	document.getElementById('save').addEventListener('click', function(){
		var dataURL = canvas.toDataURL('image/png');
		var data = atob( dataURL.substring( "data:image/png;base64,".length ) ),
    	asArray = new Uint8Array(data.length);
		for( var i = 0, len = data.length; i < len; ++i ) {
    	asArray[i] = data.charCodeAt(i);    
		}
		var blob = new Blob( [ asArray.buffer ], {type: "image/png"} );
		if (window.saveAs) {
    		window.saveAs(blob, "cannn.png");
		}
		else{
		    console.log("saveAs not supported")
		}
	var image = new Image();
	image.src = dataURL;
	document.getElementById('img').appendChild(image); 	
	});
}	
function color(clr){
	ctx.strokeStyle = clr;
}
function erase(){
	ctx.strokeStyle = 'white';
	ctx.lineWidth = 20;
}	
function clr(){
	ctx.clearRect(0, 0, 400, 400);
}
