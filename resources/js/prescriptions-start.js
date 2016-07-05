$(window).load(function() {

  $("#signIn").click({appName:"orderPresc"}, chosenApp);

});

function chosenApp (app) {

  var appName = app.data.appName;

  sessionStorage.app = appName;
  if (appName=="orderPresc") {
    if (sessionStorage.loggedIn == 'true') {
        window.location.href = 'prescriptions-complete.html';
    }
    else {
        window.location.href = 'broker.html';
    }
  }
}
