$("#restart-button").hide();
$("#hm-p1").hide();
$("#ps-p2").hide();
$("#hm-p2").hide();


function UserInfo(username,password){
	this.username = username;
	this.password = password;
}

var boardSet = {

	boardP1:[24],
	boardTurnP1: [24],
	boardP2: [24],
	boardTurnP2: [24],
	cellE: [4,9,14,19,24],
	currentPlayer:"P1"
}

var GameManager = function(){

	this.init = function(){

		this.newGame();

		$("input:checkbox").click(function() {

			if ($(this).is(":checked")) {
			    var group = "input:checkbox[name='" + $(this).attr("name") + "']";
			    $(group).prop("checked", false);
			    $(this).prop("checked", true);
			} else {
			    $(this).prop("checked", false);
			}
		});	

		$("#info-submit1").on('click', function(e){

			e.preventDefault();
			var useName1 = $("#username1").val();
			var usePass1 = $("#password1").val();

			gameManager.gameSetup1(useName1,usePass1);
			$('#userModal1').modal('hide')
			$('#userModal2').modal('show')

			$("#info-submit2").on('click', function(e){

				e.preventDefault();
				var useName2 = $("#username2").val();
				var usePass2 = $("#password2").val();

				gameManager.gameSetup2(useName2,usePass2);
				$('#userModal2').modal('hide')

				$('#userModal2').on('hidden.bs.modal', function(){
			    $(this).find('form')[0].reset();
				$("#newgame-button").hide();
				$("#restart-button").show();
				});
			})

			//This prevents the previous user inputs from showing up when New Game is pressed again.
			$('#userModal1').on('hidden.bs.modal', function(){
			    $(this).find('form')[0].reset();
			});


		});
		
	}

	this.newGame = function(){

		$("#newgame").click(function(){
			
			boardSet.boardP1 = new Array();
			boardSet.boardTurnP1 = new Array();

		});

		this.userInfo1 = new UserInfo();
		this.userInfo2 = new UserInfo();
		
	}

	this.gameSetup1 = function(username, password){
		this.userInfo1.username = username;
		this.userInfo1.password = password;

	}

	this.gameSetup2 = function(username,password){
		this.userInfo2.username = username;
		this.userInfo2.password = password;
	}

	var that = this;

	//shipAnchor was previously named placeShip. Renamed for more clarity.
	//shipAnchor indicates the cell number of the grid cell you click on to place the boats.
	
	this.shipDrop = function() {

		var shipCounter = 0;
		$(".grid-dot").click(function (event) {

		    var shipAnchor = this.id;
		    var gridId = this.id;
		    gridId = gridId.substring(-3,9);
		    shipAnchor = shipAnchor.substring(9);
		    shipAnchor = parseInt(shipAnchor);

		 	$("input:checkbox[name=ship]:checked").each(function(){
				shipSize = parseInt($(this).val());
				shipType = $(this).attr('id');
			});

			var rowLength = 5;
			shipCounter++;

			if(shipCounter == 2){
				currentPlayer = 'P2';						
				console.log("Ship placement finish");
				$("#ps-p1").hide();
				$("#ps-p2").show();
				$("#userPwModal2").modal('show');
			};

			// consider refactoring condition (Jordan said don't count off)
			// at the least, name values with variables to make more readable, and add a comment explaining what's happening
		    if ((rowLength-((shipAnchor+1)%rowLength)+1) >= shipSize && ((shipAnchor+1)%rowLength) != 0) {

				boardSet.boardP1.push(shipAnchor);

				for (var i = shipAnchor; i<(shipAnchor + shipSize); i++) {
					$('#'+gridId+i).css("background-color","brown");
					$('#'+shipType).parents().eq(2).hide();

					// $('#'+shipType).parents().eq(2).hide();
					// shipCounter ++;
					// 	//pop up modal for player 2 password
					// 	//show player 2 board for set up
					// 	console.log("P1 done with ship placement!");
					// 	console.log(shipCounter);
					// }
					// $(".shipImage").each(function(){
					// })

				}
				// shipCounter++;
		    } else {  	
		    	$('#error').modal('show');
			}

		});
	};
	this.shipDrop();
};

var gameManager = new GameManager();
gameManager.init();
