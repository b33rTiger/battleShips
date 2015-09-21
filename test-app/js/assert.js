//If outcome is true add to webpage "PASS: " + description;
//If outcome is false add to webpage "FAIL: " + description;

function assert(outcome,description){
	var list = $("#output");
	if(outcome){
		//There already is a true/false statement in tests, so putting it again here will be redundant.
		//return ("Pass: " + outcome)
		list.append("<li>Pass: " + description + "</li>");

		//$("#output").append("Pass: " + description);
	} else {
		list.append("<li>Fail: " + description + "</li>");
		//$("#output").append("Fail: " + description);
	}

	//test outcome


	//build <li>
	//list.append("Pass: " + outcome);
}