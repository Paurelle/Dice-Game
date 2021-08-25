
/*---------- EVENT ----------*/ 

const new_game = document.getElementById("new-game");
const roll_dice = document.getElementById("roll-dice");
const hold = document.getElementById("hold");

new_game.addEventListener('click', event => {
    gameRestart();
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
    dicePoster(number);
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


/*------ Functions ATH ------*/ 

function ATH(player, round, global){
    let score_round = document.getElementById("score-round-player"+player);
    let score_global = document.getElementById("score-global-player"+player);

    score_round.innerText = round;
    score_global.innerText = global;
    
    let puce_Player1 = document.getElementById("puce-player-1");
    let puce_Player2 = document.getElementById("puce-player-2");

    let Player_1_bg = document.getElementById("player-1-bg");
    let Player_2_bg = document.getElementById("player-2-bg");

    if (checkTurnPlayer() === player1) {
        puce_Player1.style.visibility = "visible";
        puce_Player2.style.visibility = "hidden";

        Player_1_bg.style.background = "rgb(247, 247, 247)";
        Player_2_bg.style.background = "rgb(255, 255, 255)";
    }
    else{
        puce_Player1.style.visibility = "hidden";
        puce_Player2.style.visibility = "visible";

        Player_1_bg.style.background = "rgb(255, 255, 255)";
        Player_2_bg.style.background = "rgb(247, 247, 247)";
        
    }
}

function dicePoster(number){
    for (let i = 1; i <= 6; i++) {
        let dice = document.getElementById(i);
            dice.style.visibility = 'hidden';
            dice.style.position = 'absolute';
    }
    let diceX = document.getElementById(number);
        diceX.style.visibility = 'visible';
        diceX.style.position = 'relative';
}


/*---- Functions restart ----*/ 

function gameRestart(){
    dicePoster(0);
    player1.score_round = 0;
    player1.score_global = 0;
    player1.turn = true;
    player2.score_round = 0;
    player2.score_global = 0;
    player2.turn = false;
    gameEnd = false;
    for (let id = 1; id <= 2; id++) {
        ATH(id, 0, 0);
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
            ATH(this.id, 0, "Win");
            gameEnd = true;
        }
    }
}


/*------- Init Values -------*/ 

let player1 = new Player(0, 0, true, 1);
let player2 = new Player(0, 0, false, 2);
let gameEnd = false;
