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

var 

var GameManager = function(){

	this.init = function(){

	}

	this.newGame = function(){

	}

};

var gameManager = new GameManager;
gameManager.init();