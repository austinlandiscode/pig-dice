// Business Logic

// Create player constructor
// Create object for player one and player two 
// Container with incrementing or zero score for each roll/ branching

// Player Object Constructor
function Player(name) {
  this.name = name;
  this.score = 0;
  this.updatedScore = 0;
}


Player.prototype.diceRoll = function() {
  //bring in dice object - happens on call
  //capture the orginal score value (let orgScore = score;)
  //roll a random range between 1-6
  let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  let hold = false;
  if(hold === true) {
    score = updatedScore
  } else {
    player.diceRoll()
  }





  if (randomNumber1 === 1) {
    alert("You rolled a 1! Sorry, your turn is over.");
    break;


  } else {
  updatedScore += randomNumber1;
  prompt("roll again?")  //replace
  prompt("hold?")  //replace
  let hasRolled = true;
    player.diceRoll()
    
  }
    player.diceRoll()
    firstTime = false;
    let hasRolled = true;
};



//ui logic

// Creates two players

let currentPlayer = playerOne;
player1 or player2


function playerSwitch()  {
  if(currentPlayer == playerOne)  {
    currentPlayer = playerTwo;
} else {
  currentPlayer = playerOne;
}
}


// player.diceRoll;

$(document).ready(function() {

  let playerOne = new Player("Player One");
  let playerTwo = new Player("Player Two");
  let currentPlayer = playerOne;
  
  $("#roll").on("click", function(event){
    event.preventDefault();
    currentPlayer.diceRoll()
    
  });

  $("#hold").on("click", function(event){
    event.preventDefault();
    
    
  });
});

//function for program will always start at player 1
//switches back and forth when a player rolls 1 or holds.

if whatever (player !== 1) {

  $("#hold").show();
}
