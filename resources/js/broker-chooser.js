var radioOption = "";

$(window).load(function() {

	$("#yes").click({radioOption:"yes"}, radioSelect);
	$("#create").click({radioOption:"create"},radioSelect);
	$("#continue").click({radioOption:"continue"},radioSelect);
	$("#Next").click(radioEnter);

});

function radioSelect (option) {
	radioOption = option.data.radioOption;
}

function radioEnter () {

				if( radioOption == 'yes') {
					  window.location.href = 'signin-selector.html';
				}
				else if (radioOption == 'create'){
					  window.location.href = 'create-account.html';
				}
			 	else if (radioOption == 'continue'){
						if (sessionStorage.app == "bookGP" ) {
							window.location.href = 'appointment-complete.html'
						}
						else if (sessionStorage.app == "orderPresc" ) {
							window.location.href = 'prescriptions-complete.html'
						}
				}
};