//Test newGame (function)
//Test userInfo (array)
//Test shipSpot (array, spots on the ship vulnerable to attack)
//Test shipAnchor (element of shipSpot)
//Test passwordCheck (array)

assert(newGame == 1, "New game starts.");
assert(userInfo != [], "User typed in username and password");
assert(shipSpot >= 0, "Ship coordinates are valid");
assert(shipAnchor == shipSpot[0], "Ship's anchor point works");
assert(passwordCheck == userInfo[1], "Password is valid/invalid");
