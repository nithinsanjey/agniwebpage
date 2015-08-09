$(document).ready(function(){
	$(".description").hide();
    $(".vertical_div").mouseover(function(){
    	console.log("first vertical hovering "+$.inArray( this,$(".vertical_div") ));
    	$(this).css("-webkit-filter","grayscale(0%)");
		$(this).css("filter","grayscale(0%)");
    	switch($.inArray( this, $(".vertical_div") ))
    	{
    		case 0:
				$(this).next().next().next().next().css("-webkit-filter","grayscale(0%)");
				$(this).next().next().next().next().css("filter","grayscale(0%)");
				$(this).next().next().css("-webkit-filter","grayscale(0%)");
				$(this).next().next().css("filter","grayscale(0%)");
				break;
			case 1:
				$(this).next().next().css("-webkit-filter","grayscale(0%)");
				$(this).next().next().css("filter","grayscale(0%)");
				break;	
			case 2:
			$(this).prev().prev().css("-webkit-filter","grayscale(0%)");
				$(this).prev().prev().css("filter","grayscale(0%)");
				$(this).next().next().css("-webkit-filter","grayscale(0%)");
				$(this).next().next().css("filter","grayscale(0%)");
				break;
			case 3:
				$(this).prev().prev().css("-webkit-filter","grayscale(0%)");
				$(this).prev().prev().css("filter","grayscale(0%)");
				break;
			case 4:
				$(this).prev().prev().prev().prev().css("-webkit-filter","grayscale(0%)");
				$(this).prev().prev().prev().prev().css("filter","grayscale(0%)");
				$(this).prev().prev().css("-webkit-filter","grayscale(0%)");
				$(this).prev().prev().css("filter","grayscale(0%)");
				break;
    	}
		
		//$(".vertical_div").css("-webkit-filter","grayscale(0%)");
		$(this).children().next().children().children().next().slideDown("fast");
		//$(this).children().css("background-color","rgba(0,0,0,0.4)");
		
	});
	$(".vertical_div").mouseleave(function(){
		$(".description").slideUp("fast");
	});
	
	//form
	$("#elementname").hide();
	$("#elementc_password").hide();
	$("#elementphone").hide();
	$("#elementroll").hide();
	$("#elementdep").hide();
	$("#elementbatch").hide();
	$("#loginalert").hide();
	$("#registerbutton").click(function(){
		$("#elementname").slideDown();
		$("#elementc_password").slideDown();
		$("#elementphone").slideDown();
		$("#elementroll").slideDown();
		$("#elementdep").slideDown();
		$("#elementbatch").slideDown();
		$("#lineModalLabel").text("Sign Up");
		$("#registeralert").hide();
		$("#loginalert").show();
	});
	$("#loginbutton").click(function(){
		$("#elementname").slideUp();
		$("#elementc_password").slideUp();
		$("#elementphone").slideUp();
		$("#elementroll").slideUp();
		$("#elementdep").slideUp();
		$("#elementbatch").slideUp();
		$("#lineModalLabel").text("Sign In");
		$("#registeralert").show();
		$("#loginalert").hide();
	});
});