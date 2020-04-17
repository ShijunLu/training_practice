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
			contents += "<td>" + data[idx].login + "</td>";
			contents += "<td onclick = \'getFollowers(\""+data[idx].followers_url +"\","+ idx +")\'>" + data[idx].followers_url + "</td>";
			contents += "<td> 0 </td>";
			contents += "<td> <img src='" + data[idx].avatar_url + "' width=50 height=50 /></td>";
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
		var flowers_num = Object.keys(data).length;
		console.log(flowers_num, index); 
		$('#usersTable tr:eq(' + (index + 1) + ') td:eq(3)').html(flowers_num);
	})

}


