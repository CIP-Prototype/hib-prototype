$(window).load(function() {
	
	$('.panel-heading').click(function (){
		$(this).find('i').toggleClass('fa-caret-down fa-caret-right');
	});
	
	$('#moreMetLink').click(function (){
		$(this).find('i').toggleClass('fa-caret-down fa-caret-right');
	});
});
