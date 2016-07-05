$(window).load(function() {

  $("#signOut").click(signOut);
  $("#signOutMob").click(signOut);

  if (sessionStorage.idp != "po") {
		window.location.href = 'visit-gp.html'
	}

});

function signOut() {
    sessionStorage.clear();
}
