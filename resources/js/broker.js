var radioOption = "";

$(window).load(function() {

	$("#yes").click({radioOption:"yes"}, radioSelect);
	$("#create").click({radioOption:"create"},radioSelect);
	$("#continue").click({radioOption:"continue"},radioSelect);
	$("#Next").click(radioEnter);
	$("#registerHere").click(showCreatePage);
	
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

				if( radioOption == 'yes') {
					$("#chooser").hide();
					$("#createAccount").hide();
					$("#selector").show();				
				}
				else if (radioOption == 'create'){
					$("#chooser").hide();
					$("#selector").hide();
					$("#createAccount").show();
				}
			 	else if (radioOption == 'continue'){
						if (sessionStorage.app == "bookGP" ) {
							window.location.href = 'appointment-complete.html'
						}
						else if (sessionStorage.app == "orderPresc" ) {
							window.location.href = 'prescriptions-complete.html'
						}
						else if (sessionStorage.app == "viewPlanner" ) {
							window.location.href = 'diabetes-complete.html'
						}
						else if (sessionStorage.app == "yourApp" ) {
							window.location.href = 'your-app-biometric.html'
						}
				}
};

function showCreatePage () {
	$("#chooser").hide();
	$("#selector").hide();
	$("#createAccount").show();
};
