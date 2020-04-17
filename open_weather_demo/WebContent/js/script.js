$(document).ready(function(){
	console.log("Loaded JQuary!");
	$("#btn1").click(function(){
		console.log("inside button1 click..");
		var zipCode = $("#zipcode").val();
		console.log(zipCode)
		$.ajax({
			url: "https://api.openweathermap.org/data/2.5/weather?zip="+zipCode+",us&appid=071e0dea99e2fa4c7e8d0cc3a78abe3c"
		}).then(function(data){
			console.log(data);
			var divTag = document.getElementById("content1");
			divTag.innerHTML ="City Name is " + data.name+"<br>"+ "Temp_max is " + data.main.temp_max+"<br>"+"Temp_min is " + data.main.temp_min;
		})
	})
	
	
})

$(document).ready(function(){
	console.log("Loaded success2");	
	$("#btn2").click(function(){
		console.log("inside button2 click...");
		var lon = $("#lat").val();
		var lat = $("#lon").val();
		
		console.log(lon +"===>"+ lat);
		
		$.ajax({
			url:"https://api.openweathermap.org/data/2.5/find?lat="+ lat + "&lon="+ lon + "&cnt=10&appid=071e0dea99e2fa4c7e8d0cc3a78abe3c"
		}).then(function(data){
			console.log(data);
			var divTag2 = document.getElementById("content2");
			var names = "";
			$.each(data.list, function(idx){
				var temp = data.list[idx].name;
				console.log(temp);
				names += "<li>" + temp;
				
			});
			console.log(names);
			divTag2.innerHTML = names;
		
		})
	})
	
	
})




