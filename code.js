//Device ID and unique access token
var device = "e00fce68019f2d01cfb8d6b7"; 
var token = "86302ccc0ca204fcd59149af9b0d824a301e0b0a"; 

// Initialise a Particle object
var particle = new Particle();

// Updating the function below on an interval (.5s)
window.setInterval(tempCheck, 500);

// Function to update the HTML element with id "room-temp" 
function tempCheck(){
	particle.getVariable({ deviceId: device, name: "roomTemp", auth: token }).then(function(data) {

    // check if data is above 0
		if (data.body.result > 0){
        // changing the element happens here
  			document.getElementById("room-temp").innerHTML = "Temperature is " + data.body.result;  		
		}
  // error handling
	}, function(err) {
        	console.log("An error occurred retrieving data:", err);
	});
}
