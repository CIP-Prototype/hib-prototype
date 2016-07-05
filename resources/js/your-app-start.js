$(window).load(function() {

  $("#signIn").click({appName:"yourApp"}, chosenApp);

});

function chosenApp (app) {

  var appName = app.data.appName;

  sessionStorage.clear();
  sessionStorage.app = appName;
  if (appName=="yourApp") {
    window.location.href = 'broker-chooser.html';
  }
}
