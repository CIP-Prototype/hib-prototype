$(window).load(function() {

	$("#verifySignin").click(verifySignin);
});

function verifySignin () {
    if (sessionStorage.app == 'bookGP') {
        sessionStorage.loggedIn = 'true';
        window.location.href = 'appointment-complete.html';     
    }
    else if (sessionStorage.app == 'orderPresc'){
        sessionStorage.loggedIn = 'true';
        window.location.href = 'prescriptions-complete.html';
    }
    else if (sessionStorage.app == 'viewPlanner'){
        sessionStorage.loggedIn = 'true';
        window.location.href = 'diabetes-complete.html';
    }
    else if (sessionStorage.app == 'yourApp'){
        sessionStorage.loggedIn = 'true';
        window.location.href = 'your-app-biometric.html';
    }
};
