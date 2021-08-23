/*---------- EVENT ----------*/ 

const new_game = document.getElementById("new-game");
const roll_dice = document.getElementById("roll-dice");
const hold = document.getElementById("hold");

new_game.addEventListener('click', event => {
    
});

roll_dice.addEventListener('click', event => {
    if (gameEnd === false) {
        
    }
});

hold.addEventListener('click', event => {
    if (gameEnd === false) {
        
    }
});


/*---------- Class ----------*/ 

class Player {
    constructor(round, global, turnPlayer, player) {
      this.score_round = round;
      this.score_global = global;
      this.turn = turnPlayer;
      this.id = player;
    }
}


/*------- Init Values -------*/ 

let player1 = new Player(0, 0, true, 1);
let player2 = new Player(0, 0, false, 2);
let gameEnd = false;