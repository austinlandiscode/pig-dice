let playerOne;
let playerTwo;
let currentPlayer;

function Player(number) {
  this.playerNum = number;
  this.score = 0;
  this.tempScore = 0;
  this.firstRoll = true;
}

Player.prototype.diceRoll = function() {

  if(this.firstRoll) {  //
    this.tempScore = this.score;
    this.firstRoll = false;
  }
  
  let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  let modifiedScore = this.score;

  if (randomNumber1 !== 1) {
    modifiedScore += randomNumber1;
    console.log("add!");
    this.score = modifiedScore;
    // return modifiedScore;
  }
  else  {
    console.log("bust!");
    this.score = this.tempScore;
    this.firstRoll = true;
    playerSwitch();
    // return this.score;
  }
}

function playerSwitch()  {
  if(currentPlayer === playerOne) {
    currentPlayer = playerTwo;
  } else {
    currentPlayer = playerOne;
  }
}

$(document).ready(function() {
  playerOne = new Player(1);
  playerTwo = new Player(2);
  currentPlayer = playerOne;
  
  
  $("#roll").on("click", function(event){
    event.preventDefault();
    currentPlayer.diceRoll();
    $("#answer").text(`Player One: ${playerOne.score} Player Two: ${playerTwo.score}`)
    console.log(playerOne);
    console.log(playerTwo);
  });

  $("#hold").on("click", function(event){
    event.preventDefault();
    currentPlayer.tempScore = currentPlayer.score;
    playerSwitch();
  });
});
                      
                      
// // Business Logic
// function PlayerDatabase () {
//   this.players ={};
//   this.currentId = 0;
// }

// PlayerDatabase.prototype.addPlayer = function(player) {
//   player.id = this.assignId();
//   this.players[player.id] = player;
// }

// PlayerDatabase.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }
// PlayerDatabase.prototype.findPlayer = function(id) {
//   if (this.players[id] != undefined) {
//     return this.players[id];
//   }
//   return false;
// }

// PlayerDatabase.prototype.deletePlayer = function(id) {
//   if (this.players[id] === undefined) {
//     return false;
//   }
//   delete this.players[id];
//   return true;
// }
 




























































