var radioOption = "";

$(window).load(function() {

	$("#Next").click(radioEnter);
	$("#registerHere").click(showCreatePage);
	$("#guestBtn").click(radioEnter);

	if (sessionStorage.app == "orderPresc" || sessionStorage.app == "viewPlanner") {
		$("#noLogIn").hide();
	}

	if (sessionStorage.app == "orderPresc") {
		$("#verify").hide();
	}

});

function radioSelect (option) {
	radioOption = option.data.radioOption;
}

function radioEnter () {

	if (sessionStorage.app == "bookGP" ) {
		window.location.href = 'appointment-complete.html';
	}
	else if (sessionStorage.app == "orderPresc" ) {
		window.location.href = 'prescriptions-complete.html';
	}
	else if (sessionStorage.app == "viewPlanner" ) {
		window.location.href = 'diabetes-complete.html';
	}
	else if (sessionStorage.app == "yourApp" ) {
		window.location.href = 'your-app-biometric.html';
	}
}

function showCreatePage () {
	$("#createAccount").show();
	$("#selector").hide();
}
