$(document).ready(function() {

	console.log("Loaded jQuery!");
	
	$("#btn").click(function() {
		console.log("Inside button click...");
		var lon = $("#longitude").val();
		var lat = $("#latitude").val();
		console.log(lon + "====>" + lat);
	
		$.ajax({
		
			url: "https://api.openweathermap.org/data/2.5/find?lat=" + lat + "&lon=" + lon + "&cnt=20&appid=a30ebb5af6b78e566e1797db9855606e"
			
		}).then(function(data) {
			console.log(data);
			var divTag = $("#content");
			//divTag.innerHTML = "<ul>";
			var names = "";
			$.each(data.list, function(idx) {
				var temp = data.list[idx].name;
				console.log(temp);
				names += "<li>" + temp + "</li>";
			});
			console.log(names);
			divTag.innerHTML = "<ul>" + names;
			
		})
	})
	
})