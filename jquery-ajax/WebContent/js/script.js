$(document).ready(function() {

	console.log("Loaded jQuery!");
	
	$("#ok").click(function() {
		console.log("Inside button click...");
		var zipCode = $("#zipcode").val();
		console.log(zipCode);
	
		$.ajax({
		
			url: "https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=a30ebb5af6b78e566e1797db9855606e"
			
		}).then(function(data) {
			console.log(data);
		})
	})
	
})