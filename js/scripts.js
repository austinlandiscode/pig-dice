// Business Logic

// Create player constructor
// Create object for player one and player two 
// Container with incrementing or zero score for each roll/ branching

// Player Object Constructor
function Player(name) {
  this.name = name;
  this.score = 0;
}

// Creates two players
let playerOne = new Player("Player One");
let playerTwo = new Player("Player Two");

Player.prototype.diceRoll() {
  //bring in dice object - happens on call
  //capture the orginal score value (let orgScore = score;)
  //roll a random range between 1-6
  //branch if(1) {
    //score = orgScore;
    //break
  //}
  //branch if(2-6) {
    //add number
    //return
  //}
};

let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6


//ui logic

// player1 or player2
// if(player == playerOne)  {
//   player = playerTwo;
// }

player.diceRoll;