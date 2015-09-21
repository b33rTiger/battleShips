function userInfo(username,password){
	this.username = username;
	this.password = password;
}

function userInfo1(username,password){
	this.base = userInfo;
}

userInfo1.prototype = new userInfo;

function userInfo2(username,password){
	this.base = userInfo;
}

userInfo2.prototype = new userInfo;

var boardSet = {

	board: new Array()

}

var GameManager = function(){

	this.init = function(){

	}

	this.newGame = function(){

		//$(cellstuff).empty();
		boardSet.board = new Array();
	}

};

var gameManager = new GameManager;
gameManager.init();