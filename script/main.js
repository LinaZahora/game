const USER = 'X';
const COMP = 'O';
var userNow = '';
var td = document.querySelectorAll('td');
var arr;
var newGameCount = 0;
var winnerGame = document.getElementById('winnerGame');
var showWinner = document.getElementById('showWinner')
var winnerExists = false; 

function newGame() {
    userNow = USER;
    arr = [['', '', ''], ['', '', ''], ['', '', '']];
    var td = document.querySelectorAll('td');

    for (let j = 0; j < td.length; j++) {
        td[j].innerHTML = '';
    }
    prepareNextRound();
    
    for (let i = 0; i < td.length; i++) {
        td[i].addEventListener('click', makeTurn);
    }
    if(newGameCount < 5){
        newGameCount++;
    }
    winnerGame.hidden = true;
    winnerExists = false;
}
newGame();

function fillFields(target) {
    target.innerHTML = userNow;
    const value =target.getAttribute('value');
    const coord = value.split(" ");
    const coordX = coord[0];
    const coordY = coord[1];
    arr[coordX][coordY] = userNow;
}

function changeActor() {
    if (userNow == USER) {
        userNow = COMP;
    } else {
        userNow = USER
    }
}
function checkPlayer() {
    let h3 = document.querySelector('h3');
    h3.innerHTML = 'Ходит игрок ' + userNow;
}

function makeAllChecks(){ 
    checkWinner();
    changeActor();
    checkPlayer();
    checkfinish();
}

//function checkWinner(){ 
//    horizontal(arr);
//    vertical(arr);
//    diagonal(arr);
//    draw(arr);
//}
//
//function checkIfBotCanLoose() {
//    horizontalBot();
//    verticalBot();
//    diagonalBot();
//}
//function checkIfBotCanWin(){
//    tryToWinHorizontal();
//    tryToWinVertical();
//    tryToWinDiahonal();
//}
//
//function fillMove() {
//  
//    randomTurn();
//    makeAllChecks();
//    addWinner(counterX, counterY);  
//}
//
//function makeTurn(event) {
//    fillFields(event.target);
//    makeAllChecks();
//    alreadyTaken(td);
//    if(winnerExists === false){
//    fillMove();    
//    }
//    addWinner(counterX, counterY);
//}

function nextRound(){

    var newId = document.getElementById('newId');
    var roundId = document.getElementById('roundId');
       
        counterX = 0;
        counterY = 0;
        addWinner(counterX, counterY);
        newId.disabled = false;
        roundId.disabled = true;
        newGameCount = 0;
        finalyWinner();
}

function prepareNextRound(){
    var newId = document.getElementById('newId');
    var roundId = document.getElementById('roundId');
    
    if(newGameCount === 4){
        newId.disabled = true;
        roundId.disabled = false;
    }
}

function finalyWinner(){
    winnerGame.hidden = false;   
}

function checkfinish(){
    for(var i = 0; i < arr.length; i++ ){
        if(arr[i][0] === USER && arr[i][1] === USER && arr[i][2] === USER){
            winnerExists = true;
        }
    }
    for(var j = 0; j < arr.length; j++){
        if(arr[0][j] === USER && arr[1][j] === USER && arr[2][j] === USER){
             winnerExists = true;
        }
    }
    if (arr[0][0] === USER && arr[1][1] === USER && arr[2][2] === USER || arr[0][2] === USER &&  arr[1][1] === USER && arr[2][0] === USER){
        winnerExists = true;
    }
}

function randomTurn() {
    // найти случайную пустую клетку и сделать ход
    const filtered =[];
    td.forEach(function (item){
        if(item.innerHTML===''){
            filtered.push(item);
        } 
    });
    let rand = Math.floor(Math.random()*filtered.length);
    fillFields(filtered[rand]);
}
 
function blockCells(td) { 
    for (let i = 0; i < td.length; i++) {
        td[i].removeEventListener('click', makeTurn);
    }
}

function alreadyTaken(td) {  
    for (let i = 0; i < td.length; i++) {
        if (!td[i].innerHTML == '') {
            td[i].removeEventListener('click', makeTurn);
        }
    };
}

var counterX = 0;
var counterY = 0;

function addWinner(counterX, counterY) {
    
    var scoreX = document.getElementById('scoreX');
    var scoreY = document.getElementById('scoreY');

    scoreX.innerHTML = counterX;
    scoreY.innerHTML = counterY;
}

//Проверка выиграшных комбинаций Крестики-Нолики
function horizontal(arr) {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i][i] === '') {
            continue;
        }
        if (arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
            if (userNow == USER) {
                alert('Победитель ' + 'X');
                blockCells(td);
                counterX++;
                showWinner.innerHTML = 'X';
            } else {
                alert('Победитель ' + 'O');
                blockCells(td);
                counterY++;
                showWinner.innerHTML = 'O';
            }
        }
    }
}
function vertical(arr) {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i][i] === '') {
            continue;
        }
        if (arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]) {
            if (userNow == USER) {
                alert('Победитель ' + 'X');
                blockCells(td);
                counterX++;
                showWinner.innerHTML = 'X';
            } else {
                alert('Победитель ' + 'O');
                blockCells(td);
                counterY++;
                showWinner.innerHTML = 'O';
            }
        }
    }
}
function diagonal(arr) {
    if (arr[0][0] !== '' && arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
        if (userNow == USER) {
            alert('Победитель ' + 'X');
            blockCells(td);
            counterX++;
            showWinner.innerHTML = 'X';
        } else {
            alert('Победитель ' + 'O');
            blockCells(td);
            counterY++;
            showWinner.innerHTML = 'O';
        }
    }
    if (arr[0][2] !== '' && arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
        if (userNow == USER) {
            alert('Победитель ' + 'X');
            blockCells(td);
            counterX++;
            showWinner.innerHTML = 'X';
        } else {
            alert('Победитель ' + 'O');
            blockCells(td);
            counterY++;
            showWinner.innerHTML = 'O';
        }
    }
}
function draw(arr) {
    if (arr[0][0] && arr[0][1] && arr[0][2] && arr[1][0] && arr[1][1] && arr[1][2] && arr[2][0] && arr[2][1] && arr[2][2]) {
        alert('Ничья!');
    }
   
    if( counterX === counterY){
        showWinner.innerHTML = 'Победила Дружба!';
    }
}
//Защита бота при двух одинаковых комбинациях
function horizontalBot() {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i][0] && arr[i][1] === USER) {
            arr[i][2] = COMP;
        }
        if (arr[i][1] && arr[i][2] === USER) {
            arr[i][0] = COMP;
        }
        if (arr[i][0] && arr[i][2] === USER) {
            arr[i][1] = COMP;
        }
    }
}

function verticalBot() {
    for (let i = 0; i < arr.length; i++) {

        if (arr[0][i] && arr[1][i] === USER) {
            arr[2][i] = COMP;
        }
        if (arr[1][i] && arr[2][i] === USER) {
            arr[0][i] = COMP;
        }
        if (arr[0][i] && arr[2][i] === USER) {
            arr[1][i] = COMP;
        }
    }
}

function diagonalBot() {

    if (arr[0][0] && arr[1][1] === USER) {
        arr[2][2] = COMP;
    }
    if (arr[1][1] && arr[2][2] === USER) {
        arr[0][0] = COMP;
    }

    if (arr[0][2] && arr[1][1] === USER) {
        arr[2][0] = COMP;
    }
    if (arr[2][0] && arr[1][1] === USER) {
        arr[0][2] = COMP;
    }

    if (arr[0][0] && arr[2][2] === USER || arr[1][2] && arr[2][0] === USER) {
        arr[1][1] = COMP;
    }
}
//попытка выиграть бота 

function tryToWinHorizontal(){
    for(var i = 0; i < arr.length; i++){
         if (arr[i][0] && arr[i][1] === COMP) {
            arr[i][2] = COMP;}
             
         if(arr[i][1] && arr[i][2] === COMP){
             arr[i][0] = COMP;
         }  
         if(arr[i][0] && arr[i][2] === COMP){
             arr[i][1] = COMP;
         }
    }
}
function tryToWinVertical(){
    for(var i = 0; i < arr.length; i++){
        if(arr[0][i] && arr[1][i] === COMP){
           arr[2][i] = COMP;}
        if( arr[1][i] === arr[2][i] === COMP){
            arr[0][i] = COMP;
        }
        if(arr[0][i] && arr[2][i] === COMP){
            arr[1][i] = COMP;
        }
    }
}   
function tryToWinDiahonal(){
    if(arr[0][0] && arr[1][1] === COMP){
        arr[2][2] = COMP;
       }  
    if(arr[1][1] && arr[2][2] === COMP){
        arr[0][0] = COMP;
    }
    if(arr[0][2] && arr[1][1] === COMP){
        arr[2][0] = COMP;
    }
    if(arr[2][0] && arr[1][1] === COMP){
        arr[0][2] = COMP;
    }
    if(arr[0][0] && arr[2][2] === COMP){
        arr[1][1] = COMP;
    }
    if(arr[0][2] && arr[2][0] === COMP){
        arr[1][1] = COMP;
    }
}