function UserInfo(username,password){
	this.username = username;
	this.password = password;
}

// function userInfo1(username,password){
// 	this.base = userInfo;
// }

// function userInfo2(username,password){
// 	this.base = userInfo;
// }

var boardSet = {

	board: new Array(),

}

var GameManager = function(){
	// this.userInfo1;
	// this.userInfo2;

	this.init = function(){
		// $('#cell-a1').append("testies");
		this.newGame();
		$("#info-submit1").on('click', function(e){
			e.preventDefault();
			console.log("click ran");
			var useName1 = $("#username1").val();
			var usePass1 = $("#password1").val();

			gameManager.gameSetup1(useName1,usePass1);
			//put close modal code here
			//and clear form fields (prevent old username and password popping up in the next modal)
			//submit button refreshes page
			
		})
		// this.gameSetup();
	}

	this.newGame = function(){

		$("#newgame").click(function(){
			
			boardSet.board = new Array();
		});

		this.userInfo1 = new UserInfo();
		this.userInfo2 = new UserInfo();
	}

	this.gameSetup1 = function(username, password){
		this.userInfo1.username = username;
		this.userInfo1.password = password;

	}

	this.gameSetup2 = function(){

	}
};

var gameManager = new GameManager();
gameManager.init();

// $("#info-submit1").on('click', function(){
// 			debugger
// 			console.log("click ran");
// 			var useName1 = $("#username1").val();
// 			var usePass1 = $("#password1").val();

// 			gameManager.gameSetup1(useName1,usePass1);

			
// 		})