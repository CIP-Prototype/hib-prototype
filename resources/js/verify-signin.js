$(window).load(function() {

	$("#verifySignin").click(verifySignin);

    $("#Next").click(function() {
       $("#landing").hide();
       $("#signIn").show();
    });
});

function verifySignin () {
    if (sessionStorage.app == 'bookGP') {
        sessionStorage.loggedIn = 'true';
				sessionStorage.idp = 'verify';
        window.location.href = 'appointment-complete.html';
    }
    else if (sessionStorage.app == 'orderPresc'){
        sessionStorage.loggedIn = 'true';
				sessionStorage.idp = 'verify';
        window.location.href = 'prescriptions-complete.html';
    }
    else if (sessionStorage.app == 'viewPlanner'){
        sessionStorage.loggedIn = 'true';
				sessionStorage.idp = 'verify';
        window.location.href = 'diabetes-complete.html';
    }
    else if (sessionStorage.app == 'yourApp'){
        sessionStorage.loggedIn = 'true';
				sessionStorage.idp = 'verify';
        window.location.href = 'your-app-biometric.html';
    }
};
