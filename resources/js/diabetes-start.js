$(window).load(function() {

  $("#signIn").click({appName:"viewPlanner"}, chosenApp);

});

function chosenApp (app) {

  var appName = app.data.appName;

  sessionStorage.clear();
  sessionStorage.app = appName;
  if (appName=="viewPlanner") {
    window.location.href = 'broker-chooser.html';
  }
}
