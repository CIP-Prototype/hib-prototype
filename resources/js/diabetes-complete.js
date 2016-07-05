$(window).load(function() {
	
	$("#signOut").click(signOut);
    $("#signOutMob").click(signOut);
	
	$('.panel-heading').click(function (){
		$(this).find('i').toggleClass('fa-caret-down fa-caret-right');
	});
	
	$('#moreMetLink').click(function (){
		$(this).find('i').toggleClass('fa-caret-down fa-caret-right');
	});
});

function signOut() {
    sessionStorage.clear();
}