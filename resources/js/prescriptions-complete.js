$(window).load(function() {

  $("#signOut").click(signOut);
  $("#signOutMob").click(signOut);

});

function signOut() {
    sessionStorage.clear();
}
