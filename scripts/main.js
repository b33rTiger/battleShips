function UserInfo(username,password){
	this.username = username;
	this.password = password;
}

function userInfo1(username,password){
	this.base = userInfo;
}

function userInfo2(username,password){
	this.base = userInfo;
}

var boardSet = {

	board: new Array(),

}

var GameManager = function(){
	this.userInfo1;
	this.userInfo2;

	this.init = function(){
		// $('#cell-a1').append("testies");
		this.newGame();
	}

	this.newGame = function(){

		$("#newgame").click(function(){
			$(".gameCell").empty();
			boardSet.board = new Array();
		})

		this.userInfo1 = new UserInfo();
		this.userInfo2 = new UserInfo();
	}
};

var gameManager = new GameManager();
gameManager.init();