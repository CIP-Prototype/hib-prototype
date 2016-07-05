$(window).load(function() {
    
	$("#submit").click(patientLogin);
});

function patientLogin () {   
    if (sessionStorage.app == 'bookGP') {
        window.location.href = 'appointment-complete.html';
    }
    else if (sessionStorage.app == 'orderPresc'){
        window.location.href = 'prescriptions-complete.html';
    }
    else if (sessionStorage.app == 'viewPlanner'){
        window.location.href = 'diabetes-complete.html';
    }
    else if (sessionStorage.app == 'yourApp'){
        window.location.href = 'your-app-complete.html';
    }
};
