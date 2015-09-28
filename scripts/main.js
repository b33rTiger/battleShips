function UserInfo(username,password){
	this.username = username;
	this.password = password;
}

var boardSet = {

	boardP1: [],
	boardTurnP1: [],
	boardP2: [],
	boardTurnP2: [],
	cellE: [4,9,14,19,24],
	currentPlayer: "P1"
}

var shipArray = {

    shipStateP1: {

        smallShipP1:{
        	shipPosition:[],
        	shipHit:[],
        	shipSunk:false
        },

        bigShipP1:{
        	shipPosition:[],
        	shipHit:[],
        	shipSunk:false
        }
    },

    shipStateP2: {

        smallShipP2:{
        	shipPosition:[],
        	shipHit:[],
        	shipSunk:false
        },

        bigShipP2:{
        	shipPosition:[],
        	shipHit:[],
        	shipSunk:false
        }
    }
}

var gameManager = new GameManager();
gameManager.init();

$("#endturnhit-button").hide();
$("#endturnmiss-button").hide();
$("#hm-p1").hide();
$("#ps-p2").hide();
$("#hm-p2").hide();
$(".ship-box").hide();


// setup Click Handlers for gameManager

$(".grid-dot").click(function (event) {
	gameManager.shipDrop(event.target.id);
});
$('.grid-hm').click(function (event){
	gameManager.hitMiss(event.target.id);
});

$('#endturnmiss-button').click(function (event) {
	gameManager.endTurnMiss();
});

$('#endturnhit-button').click(function (event) {
	gameManager.endTurnHit();
});