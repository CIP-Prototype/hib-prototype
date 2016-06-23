//Waits for page to load
$(window).load(function(){
	$("#signOut").click(function (){

		var app = sessionStorage.app;

		if (app == "diabetes"){
			sessionStorage.clear();
			window.location.href = "diabetes_signOut.html";
		}

		else if (app == "appointment"){
			sessionStorage.clear();
			window.location.href = "appointment_signOut.html";
		}

		else if (app == "yourApp") {
			sessionStorage.clear();
			window.location.href = "yourApp_signOut.html";
		}

		else {
			sessionStorage.clear();
			window.location.href = "yourapp_signout.html";
		}
	});
});