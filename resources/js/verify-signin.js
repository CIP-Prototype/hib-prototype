$(window).load(function() {

	$("#verifySignin").click(verifySignin);
});

function verifySignin () {
    if (sessionStorage.app == 'bookGP') {
        window.location.href = 'appointment-complete.html';
    }
    else if (sessionStorage.app == 'orderPresc'){
        window.location.href = 'prescriptions-complete.html';
    }
    else if (sessionStorage.app == 'viewPlanner'){
        window.location.href = 'diabetes-complete.html';
    }
};
