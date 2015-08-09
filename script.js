$(document).ready(function(){
	$(".description").hide();
    $(".vertical_div").mouseover(function(){
		$(this).css("-webkit-filter","grayscale(0%)");
		$(this).css("filter","grayscale(0%)");
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