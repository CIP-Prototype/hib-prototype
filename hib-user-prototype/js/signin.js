//Waits for page to load
$(window).load(function(){
	$("#submit").click(function (){

		var app = sessionStorage.app;

		if (app == "diabetes"){
			window.location.href = "diabetes_complete.html";
		}

		else if (app == "appointment"){
			window.location.href = "appointment_complete.html";
		}

		if (app == "yourApp"){
			window.location.href = "yourApp_bio.html";
		}
	});
});

