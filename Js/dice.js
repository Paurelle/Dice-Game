/*---------- EVENT ----------*/ 

const new_game = document.getElementById("new-game");
const roll_dice = document.getElementById("roll-dice");
const hold = document.getElementById("hold");

new_game.addEventListener('click', event => {
    
});

roll_dice.addEventListener('click', event => {
    if (gameEnd === false) {
        checkTurnPlayer().playerPoint(rollDice(), false);
    }
});

hold.addEventListener('click', event => {
    if (gameEnd === false) {
        checkTurnPlayer().playerPoint(0, true);  
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
    playerPoint(score_roll, hold){
        if (score_roll === 1) {
            this.score_round = 0;
            changeTurn();
        }
        else if(hold === true){
            this.score_global += this.score_round;
            this.score_round = 0;
            changeTurn();
        }
        else{
            this.score_round += score_roll;
        }
        ATH(this.id, this.score_round, this.score_global);
        if (this.score_global >= 100) {
            changeTurn();
            gameEnd = true;
        }
    }
}


/*------- Init Values -------*/ 

let player1 = new Player(0, 0, true, 1);
let player2 = new Player(0, 0, false, 2);
let gameEnd = false;