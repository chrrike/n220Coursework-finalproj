//array to hold the values in square from top left to bottom right
let gridArray = ['','','','','','','','',''];
//value to hold the player's value that will replace innerHTMl
let playerChoice = 'X';
//value to hold win state
let isWon = false;

//add event listener to each square in the grid
let squares = document.querySelectorAll("button");
for(let i = 0; i<squares.length; i++){
    squares[i].addEventListener("click", playerSelect());
}

function playerSelect(){
    //set innerhtml of button as X
    event.target.innerHTML = playerChoice;
    //get the number of square from data attribute
    let squareNum = event.target.dataset.num;
    //set the number-1 as X
    gridArray[squareNum-1] = "X";
    //console.log(gridArray);
    isWon = checkWon();
    if(isWon == true){
        //console.log("You win!");
    }else{
        compTurn();
    }
}

function checkWon(){
    //check if any win condition has been met while not equaling null
    if(gridArray[0] == gridArray[1] == gridArray[2] !== ''){
        return true;
    }else if(gridArray[3] == gridArray[4] == gridArray[5] !== ''){
        return true;
    }else if(gridArray[6] == gridArray[7] == gridArray[8] !==''){
        return true;
    }else if(gridArray[0] == gridArray[3] == gridArray[6] !==''){
        return true;
    }else if(gridArray[1] == gridArray[4] == gridArray[7] !==''){
        return true;
    }else if(gridArray[2] == gridArray[5] == gridArray[8] !==''){
        return true;
    }else if(gridArray[0] == gridArray[4] == gridArray[8] !==''){
        return true;
    }else if(gridArray[2] == gridArray[4] == gridArray[6] !==''){
        return true;
    }else{
        return false;
    }
}

function compTurn(){
    //select a random number between 0-8
    let compSelection = Math.floor((Math.random()*9));
    if(gridArray[compSelection] == 'X' || gridArray[compSelection] == "O"){
        //if the selected space already has been selected, call function again to pick another num
        compTurn();
    }else if(gridArray[compSelection] == ""){
        //put an O in that spot in the array
        gridArray[compSelection] = "O";
        //change inner HTML corresponding button to O
        squares[compSelection].innerHTML = "O";
    }else{
        console.log("Tie");
    }
    //check to see if won state has changed
    isWon = checkWon();
    //if so, then the computer has won
    if(isWon == true){
        console.log("Computer Wins!");
    }
}
