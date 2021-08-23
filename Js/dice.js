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


/*-------- Functions --------*/ 

function rollDice(){
    number = Math.floor((Math.random()*6)+ 1);
    return number;
}

function changeTurn(){
    if (player1.turn === true) {
        player1.turn = false;
        player2.turn = true;
    }
    else{
        player1.turn = true;
        player2.turn = false;
    }
}

function checkTurnPlayer(){
    if (player1.turn === true) {
        return player1;
    }
    else{
        return player2;
    }
}


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