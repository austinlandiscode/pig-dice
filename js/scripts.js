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
  prompt("roll again?")
   
    player.diceRoll()
    
  }
    player.diceRoll()
    firstTime = false;
};



//ui logic

// Creates two players
let playerOne = new Player("Player One");
let playerTwo = new Player("Player Two");
let currentPlayer = playerOne;
player1 or player2

// if(player == playerOne)  {
//   player = playerTwo;
// }

// player.diceRoll;

$(document).ready(function() {
  $("#").click(function(event){
    event.preventDefault();
      
    
  });
});

