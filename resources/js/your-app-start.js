$(window).load(function() {

  $("#signIn").click({appName:"yourApp"}, chosenApp);

});

function chosenApp (app) {

  var appName = app.data.appName;

  sessionStorage.app = appName;
  if (appName=="yourApp") {
    if (sessionStorage.loggedIn == 'true') {
        window.location.href = 'your-app-biometric.html';
    }
    else {
        window.location.href = 'broker.html';
    }
  }
}
