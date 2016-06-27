
$(window).load(function() {

	$("#bookGP").click({appName:"bookGP"}, chosenApp);
  $("#orderPresc").click({appName:"orderPresc"}, chosenApp);
  $("#viewPlanner").click({appName:"viewPlanner"}, chosenApp);

  $('#openingTimesLink').click(function (e){
		$(e.target).children().toggleClass('fa-caret-down fa-caret-right');
	});

});

function chosenApp (app) {

  var appName = app.data.appName;

  sessionStorage.clear();
  sessionStorage.app = app.data.appName;
  if (appName=="bookGP" || "orderPresc" || "viewPlanner") {
    window.location.href = 'broker-chooser.html';
  }
}