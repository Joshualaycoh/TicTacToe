const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");

const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
let options = ["","","","","","","","",""];
let running = false;
let currentPlayer = "X";
initializeGame()

function initializeGame(){
  cells.forEach(cell => cell.addEventListener('click',cellClicked));
  restartBtn.addEventListener('click',restartGame)
  statusText.textContent = `${currentPlayer}'s turn!`;
  running = true;
}

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    if(options[cellIndex] != "" || !running){
        return;
    }
    updateCell(this,cellIndex)
    checkWinner()
}

function updateCell(cell,index){
    options[index] = currentPlayer
    cell.textContent = currentPlayer
}

function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn!`
}

function checkWinner(){
    let roundWon = false;
    for(let i = 0; i < winCondition.length; i++){
        const condition = winCondition[i];
        const cellA = options[condition[0]]  //fill the options array with the indeces from winCondition base on the current iteration
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]
        //X|O|X
        //O|X|X
        //X|O|O
             //iteration 1
       //const cellA = options[condition[0]]  = X
       //const cellB = options[condition[1]]  = O    FALSE
       //const cellC = options[condition[2]]  = X
              //iteration 2
       //const cellA = options[condition[0]]  = 0
       //const cellB = options[condition[1]]  = X    FALSE
       //const cellC = options[condition[2]]  = X
              //iteration 3
       //const cellA = options[condition[0]]  = X
       //const cellB = options[condition[1]]  = O    FALSE
       //const cellC = options[condition[2]]  = O
              //iteration 4
       //const cellA = options[condition[0]]  = X
       //const cellB = options[condition[1]]  = O    FALSE
       //const cellC = options[condition[2]]  = X
              //iteration 5
       //const cellA = options[condition[0]]  = O
       //const cellB = options[condition[1]]  = X    FALSE
       //const cellC = options[condition[2]]  = O
              //iteration 6
       //const cellA = options[condition[0]]  = X
       //const cellB = options[condition[1]]  = X    FALSE
       //const cellC = options[condition[2]]  = O
              //iteration 7
       //const cellA = options[condition[0]]  = X
       //const cellB = options[condition[1]]  = X    FALSE
       //const cellC = options[condition[2]]  = O
              //iteration 8
       //const cellA = options[condition[0]]  = X
       //const cellB = options[condition[1]]  = X    TRUE X's Won
       //const cellC = options[condition[2]]  = X


        if(cellA == "" || cellB == "" || cellC == ""){   //check if cells does not have textContent if so continue
            continue;                             
        }
        if(cellA == cellB && cellB == cellC ){     //check if cell have 3 consecutive linear pattern if so roundWon true and break
            roundWon = true;
            break;
        }
    }
    if(roundWon){                      //check if roundWon is true if so print player who won and stop running
        statusText.textContent = `${currentPlayer} Won!`
        running = false;
    } else if(!options.includes("")) {   //check if the options array does not have remaining empty string once all the cell the filled with text if so print draw and stop running 
        statusText.textContent = "Draw!";
        running = false;                                                       
    }else {
        changePlayer()             //if roundWon is not yet true and options array still have vacant index or has empty string continue the game by calling changPlayer() function
    }
}

function restartGame(){
   cells.forEach(cell => cell.textContent="");
   options = ["","","","","","","","",""];
   currentPlayer = "X";
   statusText.textContent = `${currentPlayer}'s turn!`;
   running = true;
}
