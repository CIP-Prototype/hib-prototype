$(window).load(function() {

	$("#submit").click(patientLogin);
});

function patientLogin () {
    if (sessionStorage.app == 'bookGP') {
        sessionStorage.loggedIn = 'true';
        sessionStorage.idp = 'po';
        window.location.href = 'appointment-complete.html';
    }
    else if (sessionStorage.app == 'orderPresc'){
        sessionStorage.loggedIn = 'true';
        sessionStorage.idp = 'po';
        window.location.href = 'prescriptions-complete.html';
    }
    else if (sessionStorage.app == 'viewPlanner'){
        sessionStorage.loggedIn = 'true';
        sessionStorage.idp = 'po';
        window.location.href = 'diabetes-complete.html';
    }
    else if (sessionStorage.app == 'yourApp'){
        sessionStorage.loggedIn = 'true';
        sessionStorage.idp = 'po';
        window.location.href = 'your-app-biometric.html';
    }
};
