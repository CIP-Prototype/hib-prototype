$(window).load(function() {

  $("#signIn").click({appName:"viewPlanner"}, chosenApp);

});

function chosenApp (app) {

  var appName = app.data.appName;

  sessionStorage.app = appName;
  if (appName=="viewPlanner") {
    if (sessionStorage.loggedIn == 'true') {
        window.location.href = 'diabetes-complete.html';
    }
    else {
        window.location.href = 'broker.html';
    }
  }
}
