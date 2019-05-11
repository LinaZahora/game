function checkWinner(){ 
    horizontal(arr);
    vertical(arr);
    diagonal(arr);
    draw(arr);
}

function checkIfBotCanLoose() {
    horizontalBot();
    verticalBot();
    diagonalBot();
}
function checkIfBotCanWin(){
    tryToWinHorizontal();
    tryToWinVertical();
    tryToWinDiahonal();
}

function fillMove() {
  
    randomTurn();
    makeAllChecks();
    addWinner(counterX, counterY);  
}

function makeTurn(event) {
    fillFields(event.target);
    makeAllChecks();
    alreadyTaken(td);
    if(winnerExists === false){
    fillMove();    
    }
    addWinner(counterX, counterY);
}