$("#restart-button").hide();
$("#hm-p1").hide();
$("#ps-p2").hide();
$("#hm-p2").hide();
$(".ship-box").hide();

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
				$(".ship-box").show();
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


			// consider refactoring condition (Jordan said don't count off)
			// at the least, name values with variables to make more readable, and add a comment explaining what's happening
		    if ((rowLength-((shipAnchor+1)%rowLength)+1) >= shipSize && ((shipAnchor+1)%rowLength) != 0) {

				for (var i = shipAnchor; i<(shipAnchor + shipSize); i++) {
					console.log(boardSet.currentPlayer);
					$('#'+gridId+i).css("background-color","brown");
			    	if (boardSet.currentPlayer == 'P1') {
						boardSet.boardP1.push(i);
					}else {
						boardSet.boardP2.push(i);
					};
					$('#'+shipType).parents().eq(2).hide();
				}

				shipCounter++;
				console.log(shipCounter);
				if(shipCounter == 2){

					if(boardSet.currentPlayer == 'P1'){
						console.log("Ship placement finish");
						$("#ps-p1").hide();
						$("#ps-p2").show();
						$("#player2").modal('show');
						$('.radio').prop('checked',false);
						$(".ship-box").show();
						boardSet.currentPlayer = 'P2'
						shipCounter = 0;
					} else {
						boardSet.currentPlayer = 'P1';
						$("#ps-p2").hide();
						$("#hm-p1").show();
						$("#hm-player1").modal('show');
						console.log("finished player 2 placement");

						that.hitMiss();
					}
				};
				
		    } else {  	
		    	$('#error').modal('show');
			}

		});
								
	};

	this.hitMiss = function(){
		
		$('.grid-hm').click(function (event){

			var gridId = this.id;
		    gridId = gridId.substring(-3,9);

		    debugger

		    if(boardSet.currentPlayer == "P1"){
		    	if(($.inArray(gridId),boardSet.boardP2) <= -1) {
		    	$('#hmp1-cell'+gridId).css("background-color","blue");	
		    		
		    	} else if (($.inArray(gridId),boardSet.boardP2) > -1) {
		    		$('#hmp1-cell'+gridId).css("background-color","red");
		    	}
		    	// if (gridId == boardSet.boardP2[]){
		    } else {

		    }
		  
		})
	}
	this.shipDrop();
};

var gameManager = new GameManager();
gameManager.init();
