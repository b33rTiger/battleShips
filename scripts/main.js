function UserInfo(username,password){
	this.username = username;
	this.password = password;
}

var boardSet = {

	board: new Array(),

}

var GameManager = function(){

	this.init = function(){
		
		this.newGame();
		$("#info-submit1").on('click', function(e){
			e.preventDefault();
			console.log("click ran");
			var useName1 = $("#username1").val();
			var usePass1 = $("#password1").val();

			gameManager.gameSetup1(useName1,usePass1);
			$('#userModal1').modal('hide')

			//This prevents the previous user inputs from showing up when New Game is pressed again.
			$('#userModal1').on('hidden.bs.modal', function(){
			    $(this).find('form')[0].reset();
			});
			
			
		})
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
