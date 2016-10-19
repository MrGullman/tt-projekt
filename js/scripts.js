$(document).ready(function() {

	var fontSize = $(window).width()/50;
	$('body').css('font-size', fontSize);
	
	$(window).resize(function() {
		var fontSize = $(window).width()/50;
		$('body').css('font-size', fontSize);
	});

});