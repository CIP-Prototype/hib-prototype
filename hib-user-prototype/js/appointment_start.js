//Waits for page to load
$(window).load(function(){
	//Triggers when sign in button is clicked
	$("#signIn").click(function (){
		//sets and stores the app name to pass it to the choser/sign in pages
		var app = "appointment";
		sessionStorage.clear();
		sessionStorage.app = app;

		//directs the user to the IDP chooser page
		window.location.href = "chooser.html";
	});
});