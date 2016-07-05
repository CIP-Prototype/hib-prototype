$(window).load(function() {

  $("#signIn").click({appName:"bookGP"}, chosenApp);

});

function chosenApp (app) {

  var appName = app.data.appName;

  sessionStorage.app = appName;
  if (appName=="bookGP") {
    if (sessionStorage.loggedIn == 'true') {
        window.location.href = 'appointment-complete.html';
    }
    else {
        window.location.href = 'broker.html';
    }
  }
}
