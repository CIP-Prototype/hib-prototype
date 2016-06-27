$(window).load(function() {
	$('#openingTimesLink').click(function (e){
		$(e.target).children().toggleClass('fa-caret-down fa-caret-right');
	});
});
