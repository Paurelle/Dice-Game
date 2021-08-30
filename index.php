<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="jeu de dés a 2 joueur" />
        <link rel="stylesheet" href="Images/bootstrap-4.4.1-dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
        <link rel="stylesheet" href="Css/index.style.css">
        <link rel="icon" type="image/x-icon" href="Images/dés.icon">
        <title>Dice game</title>
    </head>
    <body>

        <div class="content">

            <div class="container">
                <div class="row">
                    <!-- Zone Player 1 -->
                    <div class="col-6 p-0">
                        <div class="player-1 active-bg" id="player-1-bg">
                            <h2 class="player-name">PLAYER 1 <i class="bi bi-circle-fill icon-name1" id="puce-player-1"></i></h2>
                            <div class="global-score"><span id="score-global-player1">0</span></div> 
                            <div class="box-round">
                                <h3 class="round-label">CURRENT</h3>
                                <div class="round-score"><span id="score-round-player1">0</span></div>
                            </div>
                        </div>
                    </div>
                    <!-- Zone Player 2 -->
                    <div class="col-6 p-0">
                        <div class="player-2" id="player-2-bg">
                            <h2 class="player-name">PLAYER 2 <i class="bi bi-circle-fill icon-name2" id="puce-player-2"></i></h2>
                            <div class="global-score"><span id="score-global-player2">0</span></div> 
                            <div class="box-round">
                                <h3 class="round-label">CURRENT</h3>
                                <div class="round-score"><span id="score-round-player2">0</span></div>
                            </div>
                        </div>
                    </div>
                    <!-- Zone Middle -->
                    <button class="new" id="new-game"><i class="bi bi-plus-circle icon-button"></i>New game</button>
                    <button class="roll" id="roll-dice"><i class="bi bi-arrow-repeat icon-button"></i>Roll dice</button>
                    <button class="hold" id="hold"><i class="bi bi-box-arrow-in-down icon-button"></i>Hold</button>
                    <div class="dice" id="dice">
                        <div id="0"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" id="1" fill="currentColor" class="bi bi-dice-1" viewBox="0 0 16 16" >
                            <circle cx="8" cy="8" r="1.5"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" id="2" fill="currentColor" class="bi bi-dice-2" viewBox="0 0 16 16">
                            <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" id="3" fill="currentColor" class="bi bi-dice-3" viewBox="0 0 16 16">
                            <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" id="4" fill="currentColor" class="bi bi-dice-4" viewBox="0 0 16 16">
                            <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" id="5" fill="currentColor" class="bi bi-dice-5" viewBox="0 0 16 16">
                            <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" id="6" fill="currentColor" class="bi bi-dice-6" viewBox="0 0 16 16">
                            <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                    </div>


                </div>
            </div>
        </div>
    
        <script src="Js/dice.js"></script>
    </body>
</html>