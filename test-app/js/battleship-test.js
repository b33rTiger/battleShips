//Test newGame (function)
//Test userInfo (array)
//Test shipSpot (array, spots on the ship vulnerable to attack)
//Test shipAnchor (element of shipSpot)
//Test passwordCheck (array)

// var testnewGame = function(){
// 	//create test here that clicks the new Game button

// 	return false;
// }

// assert(testnewGame, "New game starts.");

gameManager.userInfo1.username = "Mike";
gameManager.userInfo1.password = "balls";

var testUserInfo = function(username,password){
	gameManager.userInfo1.username = username;
	gameManager.userInfo1.password = password;

};
assert(gameManager.userInfo1.username == "Mike", "User typed in username and password");
// assert(shipSpot >= 0, "Ship coordinates are valid");
// assert(shipAnchor == shipSpot[0], "Ship's anchor point works");
// assert(passwordCheck == userInfo[1], "Password is valid/invalid");
