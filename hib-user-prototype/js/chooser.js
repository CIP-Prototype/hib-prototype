//Waits for page to load
$(window).load(function(){
	$("#go").click(function (){

		if ($("#idpSelect").val() == "idp1") {
			window.location.href = "signIn_1.html";
		}

		if ($("#idpSelect").val() == "idp2") {
			window.location.href = "signIn_2.html";
		}
	});
});

