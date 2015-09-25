//Test newGame (function)
//Test userInfo (array)
//Test shipSpot (array, spots on the ship vulnerable to attack)
//Test shipAnchor (element of shipSpot)
//Test passwordCheck (array)

var init = function(){
	//create test here that clicks the new Game button
	gameManager = new GameManager();

	gameManager.init();

	if ((boardSet.boardP1.length == 0) && (boardSet.boardP2.length == 0) && (boardSet.boardTurnP1.length == 0)
		&& (boardSet.boardTurnP2.length == 0) && (boardSet.cellE.length != 0)) {
		return true;
	} else {

	return false;
	}
};

var result = init();
assert(result, "New game starts.");

var testdropShip = function(){
	console.log(gameManager.shipDrop.gridId);


}

// assert(testdropShip(), "Drop Ship works")
// gameManager.userInfo1.username = "Mike";
// gameManager.userInfo1.password = "balls";

// var testUserInfo = function(username,password){
// 	gameManager.userInfo1.username = $("#username1");
// 	gameManager.userInfo1.password = $("#password1");

// };
// assert(gameManager.userInfo1.username == "Mike", "User 1 typed in username and password.");
// assert(gameManager.userInfo2.username == true, "User 2 typed in username and password.");

// assert(gridSpot.length >= 0, "Grid spots are stored in an array.");

// assert(shipSpot >= 0, "Ship coordinates are valid");
// assert(shipAnchor == shipSpot[0], "Ship's anchor point works");
// assert(passwordCheck == userInfo[1], "Password is valid/invalid");
