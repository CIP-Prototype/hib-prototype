$(window).load(function() {

  $("#signIn").click({appName:"orderPresc"}, chosenApp);

});

function chosenApp (app) {

  var appName = app.data.appName;

  sessionStorage.clear();
  sessionStorage.app = appName;
  if (appName=="orderPresc") {
    window.location.href = 'broker-chooser.html';
  }
}
