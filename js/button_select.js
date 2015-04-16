
$(document).ready(function(){
	$("#list li").click(function(){
		var str = $(this).text();
  		$("#dropdownMenu1").text(str);
	});
});
