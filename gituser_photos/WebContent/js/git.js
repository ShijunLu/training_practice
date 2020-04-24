$(document).ready(function() {
	
	$.ajax({
	
		url: "https://api.github.com/users"
		
	}).then(function(data) {
		
		console.log(data);
		var table = $("#usersTable");
		var contents = "";
		$.each(data, function(idx) {
			
			contents += "<tr>";
			contents += "<td>" + data[idx].id + "</td>";
			contents +=  "<td onclick = \'getFollowers(\""+data[idx].followers_url +"\","+ idx +")\'>" + data[idx].login + "</td>";

			contents += "<td> 0 </td>";

			contents += "</tr>";
		})
		
		console.log(contents);
		table.append(contents);
		
	});
	
});

function getFollowers(my_url, index) {
	$.ajax({
		url:my_url
	}).then(function(data){
		console.log(data);

		console.log(data["0"].avatar_url);
		var images = "";
		$.each(data, function(idx) {
			var img = data[idx].avatar_url;
			console.log(img);
			images += "<img src=" + img + "width=40 height=40 />";
		});

		$('#usersTable tr:eq(' + (index + 1) + ') td:eq(2)').html(images);
		

		
	})

}


