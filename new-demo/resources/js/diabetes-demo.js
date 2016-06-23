$(window).load(function() {
	$('#accordion .accordion-toggle').click(function (e){
		$(e.target).children().children().toggleClass('fa-caret-down fa-caret-right');
	});
	
	$('h4.panel-title').click(function (e){
		$(e.target).children().toggleClass('fa-caret-down fa-caret-right');
	});
	
	$('i.indicator').click(function (e){
		$(e.target).toggleClass('fa-caret-down fa-caret-right');
	});
	
	$('#moreMetLink').click(function (e){
		$(e.target).children().toggleClass('fa-caret-down fa-caret-right');
	});
});
