
$(window).load(function() {

	$("#appointmentComplete").click({appName:"bookGP"}, chosenApp);
  $("#prescriptionComplete").click({appName:"orderPresc"}, chosenApp);
  $("#diabetesComplete").click({appName:"viewPlanner"}, chosenApp);
  $("#yourappComplete").click({appName:"yourApp"}, chosenApp);

  $('#openingTimesLink').click(function (e){
		$(e.target).children().toggleClass('fa-caret-down fa-caret-right');
	});

});

function chosenApp (app) {

  var appName = app.data.appName;

  sessionStorage.clear();
  sessionStorage.app = appName;
  if (appName=="bookGP" || "orderPresc" || "viewPlanner" || "yourApp") {
    window.location.href = 'broker.html';
  }
}
